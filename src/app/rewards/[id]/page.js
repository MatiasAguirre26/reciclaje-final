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

function generateRandomCode() {
  return Math.random().toString(36).substring(2, 10).toUpperCase();
}

export default function RewardDetails({ params }) {
  const router = useRouter();
  const { data: session } = useSession();
  const userId = session?.user?.userId;

  const { selectedReward, redeemReward, userPoints, setSelectedReward, addRedeemedReward } = useRewardStore();
  const [redeemed, setRedeemed] = useState(false);

  useEffect(() => {
    if (!selectedReward) {
      router.push('/rewards');
    }
  }, [selectedReward, router]);

  if (!selectedReward) {
    return null;
  }

  const handleRedeem = async () => {
    if (userPoints >= selectedReward.cost) {
      try {
        const response = await fetch('/api/coupons/redeem', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${session.accessToken}`,
          },
          body: JSON.stringify({
            couponId: selectedReward.id,
            cost: selectedReward.cost,
          }),
        });
  
        if (response.ok) {
          const data = await response.json();
          console.log('Canje exitoso:', data);
          updateAfterRedemption(data.updatedPoints, data.redeemedCoupon);
          router.push('/dashboard');
        } else {
          const errorData = await response.json();
          console.error('Error en el canje:', errorData);
          alert(errorData.message || 'Error al canjear el cupón. Por favor, intenta de nuevo.');
        }
      } catch (error) {
        console.error('Error al realizar el canje:', error);
        alert('Error de conexión. Por favor, verifica tu conexión a internet e intenta de nuevo.');
      }
    } else {
      alert('No tienes suficientes puntos para canjear esta recompensa.');
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
