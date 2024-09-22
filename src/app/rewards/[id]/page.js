'use client';

import CoinsIcon from '/public/icons/coins.svg';
import useRewardStore from '@/app/stores/useRewardStore';
import Link from 'next/link';
import { buttonVariants } from "@/components/ui/button";
import TicketIcon from '/public/icons/ticket.svg';
import { useEffect, useState } from 'react';
import { useSession } from "next-auth/react";


export default function RewardDetails() {
  const { data: session } = useSession(); // Obtiene la sesión
  const userId = session.user.userId; // Asegúrate de que esta propiedad exista

  const { selectedReward, redeemReward, userPoints } = useRewardStore();
  const [redeemed, setRedeemed] = useState(false); // Para mostrar un mensaje de confirmación

  if (!selectedReward) {
    return <p>No hay detalles de la recompensa disponibles</p>;
  }

  // const handleRedeem = () => {
  //   if (userPoints >= selectedReward.cost) {
  //     redeemReward(selectedReward.cost);  // Descuenta los puntos
  //     setRedeemed(true);  // Muestra el mensaje de confirmación
  //     console.log("Puntos después del canje:", useRewardStore.getState().userPoints); // Verifica que los puntos se han actualizado
  //   } else {
  //     setRedeemed(false);  // En caso de no tener suficientes puntos
  //   }
  // };


  const handleRedeem = async () => {
    if (userPoints >= selectedReward.cost) {
      // Lógica para canjear los puntos
      redeemReward(selectedReward.cost);  // Descuenta los puntos
      setRedeemed(true);  // Muestra el mensaje de confirmación
      
      const couponValue = selectedReward.cost; // valor del cupón
      const couponValidity = selectedReward.expiration; // vigencia del cupón

      console.log("Datos a enviar:", {
        userId,
        totalPoints: userPoints,
        couponValue,
        couponValidity,
      });
  
      // Realiza el fetch
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
  
    } else {
      setRedeemed(false);  // En caso de no tener suficientes puntos
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
      <p className="text-lg">Valor del cupon: <span className="font-bold">{selectedReward.cost} Puntos</span></p>
        {/* <p>Descuento: {selectedReward.discount}</p>
        <p>Categoría: {selectedReward.category}</p>
        <p>Detalles: {selectedReward.details}</p> */}
        <p>Vencimiento: {selectedReward.expiration}</p>
      </div>
      {/* Mensaje de confirmación al canjear */}
      {redeemed && (
        <p className="text-center text-green-500">¡Canje exitoso! Has canjeado la recompensa.</p>
      )}

      <div className='flex justify-center gap-4'>
        <Link href="/rewards" className={buttonVariants({ variant: "secondary", size: "lg", className: "font-bold" })}>Volver</Link>
        <Link href="/dashboard" onClick={handleRedeem} className={buttonVariants({ variant: "default", size: "lg", className: "font-bold" })}>Canjear</Link>
      </div>      
    </div>

  );
}
