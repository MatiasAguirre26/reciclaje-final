'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import CoinsIcon from '/public/icons/coins.svg';
import useRewardStore from '@/app/stores/useRewardStore';
import Link from 'next/link';
import { buttonVariants } from "@/components/ui/button";
import TicketIcon from '/public/icons/ticket.svg';
import { useState } from 'react';
import { useSession } from "next-auth/react";

export default function RewardDetails({ params }) {
  const router = useRouter();
  const { data: session } = useSession();
  const userId = session?.user?.userId;

  const { selectedReward, redeemReward, userPoints, setSelectedReward } = useRewardStore();
  const [redeemed, setRedeemed] = useState(false);

  useEffect(() => {
    if (!selectedReward) {
      // Si no hay recompensa seleccionada, redirigir a la página de recompensas
      router.push('/rewards');
    }
  }, [selectedReward, router]);

  if (!selectedReward) {
    return null; // O puedes mostrar un loader aquí
  }

  const handleRedeem = async () => {
    if (userPoints >= selectedReward.cost) {
      redeemReward(selectedReward.cost);
      setRedeemed(true);
      
      const couponValue = selectedReward.cost;
      const couponValidity = selectedReward.expiration;

      console.log("Datos a enviar:", {
        userId,
        totalPoints: userPoints,
        couponValue,
        couponValidity,
      });
  
      try {
        const response = await fetch('/api/redeem', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            userId,
            totalPoints: userPoints,
            couponValue,
            couponValidity,
          }),
        });
  
        if (response.ok) {
          const data = await response.json();
          console.log('Canje exitoso:', data);
        } else {
          console.error('Error en el canje:', response.statusText);
        }
      } catch (error) {
        console.error('Error al realizar el canje:', error);
      }
    } else {
      setRedeemed(false);
    }
  };

  return (
    <div className="grid gap-6">
      <h1 className='text-3xl text-center'>Detalles de la Recompensa</h1>
      <div className="flex flex-col items-center justify-between p-4 rounded-lg">
        <h4 className='text-xl text-center'>Puntos disponibles</h4>
        <div className="flex items-center">
          <CoinsIcon className="w-6 h-6 text-[--color-primary]" />
          <p className="ml-2 text-3xl font-bold">{userPoints}</p>
        </div>
      </div>
      <div className="max-w-3xl p-6 mx-auto my-12 text-center text-white bg-gray-900 rounded-lg">
        <div className="flex justify-center mb-4">
          <TicketIcon className="w-12 h-12 text-[--color-primary]"/>
        </div>
        <p className="text-xl font-bold">{selectedReward.discount}</p>
        <p className="text-sm">{selectedReward.category}</p>
        <p className="text-lg">Valor del cupón: <span className="font-bold">{selectedReward.cost} Puntos</span></p>
        <p>Vencimiento: {selectedReward.expiration}</p>
      </div>
      {redeemed && (
        <p className="text-center text-green-500">¡Canje exitoso! Has canjeado la recompensa.</p>
      )}

      <div className='flex justify-center gap-4'>
        <Link href="/rewards" className={buttonVariants({ variant: "secondary", size: "lg", className: "font-bold" })}>Volver</Link>
        <button onClick={handleRedeem} className={buttonVariants({ variant: "default", size: "lg", className: "font-bold" })}>Canjear</button>
      </div>      
    </div>
  );
}
