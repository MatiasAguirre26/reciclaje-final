// 'use client';

// import Navbar from '@/components/navbar';
// import useRewardStore from '@/app/stores/useRewardStore';
// import SearchBar from "@/components/search-bar";
// import CoinsIcon from '/public/icons/coins.svg';
// import TicketIcon from '/public/icons/ticket.svg';
// import Link from 'next/link';

// export default function RewardsPage() {

//   const { setSelectedReward } = useRewardStore();
//   const userPoints = useRewardStore((state) => state.userPoints);


//   const categories = ['Todos', 'Coto', 'Día', 'Carrefour'];
//   const rewards = [
//     { id: 1, discount: '15%', category: 'Alimentos', cost:200, details: 'Detalles del cupón 1', expiration: '31/12/2024' },
//     { id: 2, discount: '20%', category: 'Bebidas', cost:300, details: 'Detalles del cupón 2', expiration: '30/11/2024' },
//     // Agrega más recompensas según sea necesario
//   ];

//   const handleCardClick = (reward) => {
//     setSelectedReward(reward);  // Almacena la recompensa seleccionada
//   };

//   return (
//     <div className="grid justify-center gap-6 mx-8 my-8 text-white">
//       <div className="mb-8 text-3xl text-center">
//         <h1>Recompensas</h1>
//       </div>
//       <div className="flex flex-col items-center justify-between p-4 rounded-lg">
//         <h4 className='text-xl text-center'>Puntos disponibles</h4>
//         <div className="flex items-center">
//           <CoinsIcon className="w-6 h-6 text-[--color-primary]" />
//           <p className="ml-2 text-3xl font-bold">{userPoints}</p>
//         </div>
//       </div>
//       <div>
//         <SearchBar />
//       </div>
//       <div className="flex space-x-4 overflow-x-auto">
//         {categories.map((category, index) => (
//           <button key={index} className="px-4 py-2 bg-[--color-secundary] rounded-lg hover:bg-gray-600">
//             {category}
//           </button>
//         ))}
//       </div>
//       <div className="grid grid-cols-2 gap-6">
//           {rewards.map((reward, index) => (
//           <Link 
//             href="/rewards/details" 
//             onClick={() => handleCardClick(reward)}
//             key={index}
//             className="p-6 transition-all bg-[--color-secundary] rounded-lg hover:bg-gray-700"
//           >
//             <div className="flex justify-center mb-4">
//               <TicketIcon className="w-12 h-12 text-[--color-primary]"/>
//             </div>
//             <p className="text-xl font-bold">{reward.discount}</p>
//             <p className="text-sm">{reward.category}</p>
//           </Link>
//         ))}
//       </div>
//       <Navbar />
//     </div>
//   );
// }


'use client';

import { useEffect, useState } from 'react';
import Navbar from '@/components/navbar';
import useRewardStore from '@/app/stores/useRewardStore';
import SearchBar from "@/components/search-bar";
import CoinsIcon from '/public/icons/coins.svg';
import TicketIcon from '/public/icons/ticket.svg';
import Link from 'next/link';

export default function RewardsPage() {
  const { setSelectedReward } = useRewardStore();
  const userPoints = useRewardStore((state) => state.userPoints);
  
  const [isMounted, setIsMounted] = useState(false);

  // Este useEffect se asegura de que el componente se monte antes de mostrar los puntos
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const categories = ['Todos', 'Coto', 'Día', 'Carrefour', 'Jumbo'];
  const rewards = [
    { id: 1, discount: '15%', category: 'Alimentos', cost: 200, details: 'Detalles del cupón 1', expiration: '31/12/2024' },
    { id: 2, discount: '20%', category: 'Bebidas', cost: 300, details: 'Detalles del cupón 2', expiration: '30/11/2024' },
  ];

  const handleCardClick = (reward) => {
    setSelectedReward(reward);  // Almacena la recompensa seleccionada
  };

  // Si el componente no está montado, retorna null o un loader temporal
  if (!isMounted) {
    return null; // O puedes retornar un loader/spinner si prefieres
  }

  return (
    <div className="grid gap-6">
      <div className="mb-8 text-3xl text-center">
        <h1 className='font-bold'>Recompensas</h1>
      </div>
      <div className="flex flex-col items-center justify-between p-4 rounded-lg">
        <h4 className='text-xl font-semibold text-center'>Puntos disponibles</h4>
        <div className="flex items-center">
          <CoinsIcon className="w-6 h-6 text-[--color-primary]" />
          <p className="ml-2 text-3xl font-bold">{userPoints}</p>
        </div>
      </div>
      <div>
        <SearchBar />
      </div>
      <div className="flex space-x-4 overflow-x-auto">
        {categories.map((category, index) => (
          <button key={index} className="px-4 py-2 bg-[--color-secundary] rounded-lg hover:bg-gray-600">
            {category}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-6">
        {rewards.map((reward, index) => (
          <Link 
            href="/rewards/details" 
            onClick={() => handleCardClick(reward)}
            key={index}
            className="p-6 transition-all bg-[--color-secundary] rounded-lg hover:bg-gray-700"
          >
            <div className="flex justify-center mb-4">
              <TicketIcon className="w-12 h-12 text-[--color-primary]"/>
            </div>
            <p className="text-xl font-bold">{reward.discount}</p>
            <p className="text-sm">{reward.category}</p>
          </Link>
        ))}
      </div>
      <Navbar />
    </div>
  );
}
