// import Link from "next/link";
// import { buttonVariants } from "@/components/ui/button"
// import {MapPinIcon, ClockIcon, UserIcon, MailIcon} from '@heroicons/react/24/outline';

// export default function confirm() {
//     return (
//         <div className="mx-[30px] grid gap-[20px] justify-center my-8 text-white">
//             <div className="mb-8 text-3xl text-center">
//                 <h1>Confirmar datos</h1>                
//             </div>
//             <h5>Datos del usuario</h5>
//             <div className="grid gap-3 p-4 rounded-2xl outline outline-2 outline-[var(--color-secundary)]">
//                 <div className="flex items-center">
//                     <UserIcon className="w-6 h-6 mr-2" />
//                     <p>Nombre del usuario</p>
//                 </div>
//                 <div className="flex items-center">
//                     <UserIcon className="w-6 h-6 mr-2" />
//                     <p>Email</p>
//                 </div>                
//             </div>
//             <h5>Ubicacion</h5>
//             <div className="grid gap-3 p-4 rounded-2xl outline outline-2 outline-[var(--color-secundary)]">
//                 <p>Nombre del lugar</p>
//                 <div className="flex items-center">
//                     <MapPinIcon className="w-6 h-6 mr-2" />
//                     <p>Dirección</p>
//                 </div>
//                 <div className="flex items-center">
//                     <ClockIcon className="w-6 h-6 mr-2" />
//                     <p>Horarios</p>
//                 </div>                
//             </div>

//             <hr/>
//             <p>Materiales elejidos a reciclar</p>
//             <div className='text-center'>
//                 <Link href="/dashboard" className={buttonVariants({variant: "blackText", size: "lg", className: "font-bold"})}>Confirmar</Link>
//             </div>
//         </div>
//     )
// }

'use client'
import { MapPinIcon } from '@heroicons/react/24/outline';
import Link from "next/link";
import useRecycleStore from "@/app/stores/useRecycleStore"; // Importar Zustand

export default function Confirm() {
  const { selectedMaterials, selectedLocation } = useRecycleStore(); // Obtener datos de Zustand

  return (
    <div className="mx-[30px] grid gap-[20px] justify-center my-8 text-white">
      <div className="mb-8 text-3xl text-center">
        <h1>Confirmar Reciclaje</h1>
      </div>

      <div>
        <h2>Materiales Seleccionados:</h2>
        <ul>
          {selectedMaterials.length > 0 ? (
            selectedMaterials.map((material, index) => <li key={index}>{material}</li>)
          ) : (
            <p>No seleccionaste materiales</p>
          )}
        </ul>
      </div>

      <div>
        <h2>Ubicación Seleccionada:</h2>
        {selectedLocation ? (
          <div className="flex items-center">
            <MapPinIcon className="w-6 h-6 mr-2" />
            <p>{selectedLocation}</p>
          </div>
        ) : (
          <p>No seleccionaste una ubicación</p>
        )}
      </div>

      <div className='text-center'>
        <Link href="/recycle/success" className="btn btn-primary">Confirmar</Link>
      </div>
    </div>
  );
}
