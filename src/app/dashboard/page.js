'use client';

import Navbar from '@/components/navbar';
import Link from 'next/link';
import { useSession } from "next-auth/react";
import useRewardStore from '@/app/stores/useRewardStore';
import MapIcon from '/public/icons/map.svg';
import RecycleIcon from '/public/icons/recycle.svg';
import CoinsIcon from '/public/icons/coins.svg';
import TicketIcon from '/public/icons/ticket.svg';
import ManualIcon from '/public/icons/manual-icon.svg';

export default function Dashboard() {
  const { data } = useSession();
  console.log(data);
  const userPoints = useRewardStore((state) => state.userPoints);

  return (
    <div className="container mx-auto max-w-[600px] px-4 grid gap-[20px] justify-center my-8 text-white">
      {/* Header */}
      <header className="my-8 text-center">
        {/* <h1 className="text-4xl font-bold">Hola, </h1> */}
        {/* <p className="mt-4 text-xl">Puntos disponibles: <span className="font-bold">1000</span></p> */}
        <div className="flex flex-col items-center justify-between p-4 rounded-lg">
        <h4 className='text-xl text-center'>Puntos disponibles</h4>
        <div className="flex items-center">
          <CoinsIcon className="w-6 h-6 text-[--color-primary]" />
          <p className="ml-2 text-3xl font-bold">{userPoints}</p>
        </div>
      </div>
      </header>

      {/* Navigation */}
      <nav className="flex justify-between">
        <Link href="/recycle" className="size-24 justify-between flex flex-col items-center p-4 transition-all bg-[--color-secundary] rounded-lg hover:bg-gray-700">
          <RecycleIcon className="text-[--color-primary]" />
          <span className="mt-2 text-white">Reciclar</span>
        </Link>
        <Link href="/map" className="size-24 justify-between flex flex-col items-center p-4 transition-all bg-[--color-secundary] rounded-lg hover:bg-gray-700">
          <MapIcon className="text-[--color-primary]" />
          <span className="mt-2 text-white">Mapa</span>
        </Link>
        <Link href="/rewards" className="size-24 justify-between flex flex-col items-center p-4 transition-all bg-[--color-secundary] rounded-lg hover:bg-gray-700">
          <CoinsIcon className="text-[--color-primary]" />
          <span className="mt-2 text-white">Canjear</span>
        </Link>
      </nav>


      {/* Manual Section */}
      <section className="flex my-12 text-center bg-[--color-secundary] rounded-lg p-3">
        <ManualIcon className="w-24 h-24 text-[--color-primary]"/>
        <div className='flex flex-col justify-center'>
          <h2 className="text-2xl font-semibold">Manual de reciclaje</h2>
          <p className="mt-4 text-lg">Aprende la manera correcta de reciclar tus materiales</p>          
        </div>
      </section>

      {/* Coupons Section */}
      <section className="my-12">
        <h2 className="text-3xl font-semibold text-center">Tus cupones de descuento</h2>
        <div className="grid gap-6 mt-8 md:grid-cols-2">
          <div className="p-4 bg-gray-800 rounded-lg shadow-md">
            <TicketIcon className="w-12 h-12 text-[--color-primary]"/>
            <p className="text-xl">15% en alimentos</p>
            <span className="block mt-2 text-sm text-right text-gray-400">18:40</span>
          </div>
          <div className="p-4 bg-gray-800 rounded-lg shadow-md">
            <TicketIcon className="w-12 h-12 text-[--color-primary]"/>
            <p className="text-xl">15% en alimentos</p>
            <span className="block mt-2 text-sm text-right text-gray-400">18:40</span>
          </div>
        </div>
        <div className="mt-8 text-center">
          <Link href="/ver-mas" className="text-lg text-blue-500 hover:underline">Ver más</Link>
        </div>
      </section>

      {/* Navbar */}
      <Navbar />
    </div>
  );
}
