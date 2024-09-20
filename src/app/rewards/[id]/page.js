'use client';

import { useRouter } from 'next/navigation';

export default function RewardDetails({ params }) {
  const router = useRouter();
  const { id } = params;

  // Puedes hacer fetch de la recompensa con el id
  // O también pasarle los detalles mediante props al hacer el routing
  return (
    <div className="text-white">
      <h1>Detalles de la Recompensa {id}</h1>
      {/* Muestra más información de la recompensa aquí */}
      <button onClick={() => router.back()} className="p-2 mt-4 bg-blue-500 rounded">
        Volver
      </button>
    </div>
  );
}
