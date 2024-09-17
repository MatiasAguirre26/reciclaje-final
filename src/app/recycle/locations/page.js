// import styles from '@/styles/recycle-page.module.css';
// import { MapPinIcon, ClockIcon } from '@heroicons/react/24/outline';
// import Link from "next/link";
// import { buttonVariants } from "@/components/ui/button"
// import {
//     Select,
//     SelectContent,
//     SelectGroup,
//     SelectItem,
//     SelectLabel,
//     SelectTrigger,
//     SelectValue,
//   } from "@/components/ui/select"

// export default function locations() {
//     return (
//         <div className="mx-[30px] grid gap-[20px] justify-center my-8 text-white">
//             <div className="mb-8 text-3xl text-center">
//                 <h1>Lugares de reciclados</h1>                
//             </div>
//             <div>
//                 <img src='/assets/header.webp' alt='imagen-del-lugar'></img>    
//             </div>
//             <p>Nombre del lugar</p>
//             <div className="flex items-center">
//                 <MapPinIcon className="w-6 h-6 mr-2" />
//                 <p>Dirección</p>
//             </div>
//             <div className="flex items-center">
//                 <ClockIcon className="w-6 h-6 mr-2" />
//                 <p>Horarios</p>
//             </div>
//             <hr/>
//             <p>Elige el lugar donde vas a llevar el reciclaje</p>                          
//             <div>
//             <Select>
//                 <SelectTrigger className={`${styles.selectTrigger} w-[280px] text-black`}>
//                     <SelectValue placeholder="Selecciona una ubicación" />
//                 </SelectTrigger>
//                 <SelectContent className={styles.selectContent}>
//                     <SelectGroup>
//                         <SelectLabel className={styles.selectLabel}>Ubicaciones de reciclaje</SelectLabel>
//                         <SelectItem value="location1" className={styles.selectItem}>
//                             <div className="flex items-center">
//                                 <MapPinIcon className="w-4 h-4 mr-2" />
//                                 <span>Calle Falsa 123, Ciudad A</span>
//                             </div>
//                         </SelectItem>
//                         <SelectItem value="location2" className={styles.selectItem}>
//                             <div className="flex items-center">
//                                 <MapPinIcon className="w-4 h-4 mr-2" />
//                                 <span>Avenida Siempreviva 742, Ciudad B</span>
//                             </div>
//                         </SelectItem>
//                         <SelectItem value="location3" className={styles.selectItem}>
//                             <div className="flex items-center">
//                                 <MapPinIcon className="w-4 h-4 mr-2" />
//                                 <span>Plaza Central, Ciudad C</span>
//                             </div>
//                         </SelectItem>
//                         <SelectItem value="location4" className={styles.selectItem}>
//                             <div className="flex items-center">
//                                 <MapPinIcon className="w-4 h-4 mr-2" />
//                                 <span>Barrio Verde, Ciudad D</span>
//                             </div>
//                         </SelectItem>
//                     </SelectGroup>
//                 </SelectContent>
//             </Select>             
//             </div>
//             <div className='text-center'>
//                 <Link href="locations/1" className={buttonVariants({variant: "blackText", size: "lg", className: "font-bold"})}>Siguiente</Link>                
//             </div>
//         </div>

//     )
// }
// 'use client'
// import styles from '@/styles/recycle-page.module.css';
// import { MapPinIcon, ClockIcon } from '@heroicons/react/24/outline';
// import Link from "next/link";
// import { buttonVariants } from "@/components/ui/button";
// import useRecycleStore from "@/app/stores/useRecycleStore"; // Importar la store

// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectLabel,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";

// export default function Locations() {
//   const { setSelectedLocation } = useRecycleStore(); // Usar Zustand

//   const handleLocationSelect = (location) => {
//     setSelectedLocation(location); // Guardar la ubicación seleccionada
//   };

//   return (
//     <div className="mx-[30px] grid gap-[20px] justify-center my-8 text-white">
//       <div className="mb-8 text-3xl text-center">
//         <h1>Lugares de reciclados</h1>
//       </div>
//       <div>
//         <img src='/assets/header.webp' alt='imagen-del-lugar' />
//       </div>
//       <p>Nombre del lugar</p>
//       <div className="flex items-center">
//         <MapPinIcon className="w-6 h-6 mr-2" />
//         <p>Dirección</p>
//       </div>
//       <div className="flex items-center">
//         <ClockIcon className="w-6 h-6 mr-2" />
//         <p>Horarios</p>
//       </div>
//       <hr />
//       <p>Elige el lugar donde vas a llevar el reciclaje</p>
//       <div>
//         <Select onValueChange={handleLocationSelect}>
//           <SelectTrigger className={`${styles.selectTrigger} w-[280px] text-black`}>
//             <SelectValue placeholder="Selecciona una ubicación" />
//           </SelectTrigger>
//           <SelectContent className={styles.selectContent}>
//             <SelectGroup>
//               <SelectLabel className={styles.selectLabel}>Ubicaciones de reciclaje</SelectLabel>
//               <SelectItem value="Calle Falsa 123, Ciudad A" className={styles.selectItem}>
//                 <div className="flex items-center">
//                   <MapPinIcon className="w-4 h-4 mr-2" />
//                   <span>Calle Falsa 123, Ciudad A</span>
//                 </div>
//               </SelectItem>
//               <SelectItem value="Avenida Siempreviva 742, Ciudad B" className={styles.selectItem}>
//                 <div className="flex items-center">
//                   <MapPinIcon className="w-4 h-4 mr-2" />
//                   <span>Avenida Siempreviva 742, Ciudad B</span>
//                 </div>
//               </SelectItem>
//               <SelectItem value="Plaza Central, Ciudad C" className={styles.selectItem}>
//                 <div className="flex items-center">
//                   <MapPinIcon className="w-4 h-4 mr-2" />
//                   <span>Plaza Central, Ciudad C</span>
//                 </div>
//               </SelectItem>
//               <SelectItem value="Barrio Verde, Ciudad D" className={styles.selectItem}>
//                 <div className="flex items-center">
//                   <MapPinIcon className="w-4 h-4 mr-2" />
//                   <span>Barrio Verde, Ciudad D</span>
//                 </div>
//               </SelectItem>
//             </SelectGroup>
//           </SelectContent>
//         </Select>
//       </div>
//       <div className='text-center'>
//         <Link href="locations/1" className={buttonVariants({ variant: "blackText", size: "lg", className: "font-bold" })}>Siguiente</Link>
//       </div>
//     </div>
//   );
// }

'use client'
// import styles from '@/styles/recycle-page.module.css';
// import { MapPinIcon, ClockIcon } from '@heroicons/react/24/outline';
// import Link from "next/link";
// import { buttonVariants } from "@/components/ui/button";
// import useRecycleStore from "@/app/stores/useRecycleStore"; // Importar Zustand
// import {
//     Select,
//     SelectContent,
//     SelectGroup,
//     SelectItem,
//     SelectLabel,
//     SelectTrigger,
//     SelectValue,
// } from "@/components/ui/select";

// export default function Locations() {
//     const { setSelectedLocation } = useRecycleStore(); // Acceder al setter para guardar la ubicación

//     const handleLocationChange = (value) => {
//         // Guardar la ubicación seleccionada en el estado de Zustand
//         const selectedLocation = locations.find((location) => location.value === value);
//         setSelectedLocation(selectedLocation);
//     };

//     const locations = [
//         { value: "location1", name: "Calle Falsa 123, Ciudad A", address: "Calle Falsa 123", hours: "9am - 5pm" },
//         { value: "location2", name: "Avenida Siempreviva 742, Ciudad B", address: "Avenida Siempreviva 742", hours: "10am - 6pm" },
//         { value: "location3", name: "Plaza Central, Ciudad C", address: "Plaza Central", hours: "8am - 4pm" },
//         { value: "location4", name: "Barrio Verde, Ciudad D", address: "Barrio Verde", hours: "11am - 7pm" },
//     ];

//     return (
//         <div className="mx-[30px] grid gap-[20px] justify-center my-8 text-white">
//             <div className="mb-8 text-3xl text-center">
//                 <h1>Lugares de reciclados</h1>
//             </div>
//             <div>
//                 <img src='/assets/header.webp' alt='imagen-del-lugar'></img>
//             </div>
//             <p>Nombre del lugar</p>
//             <div className="flex items-center">
//                 <MapPinIcon className="w-6 h-6 mr-2" />
//                 <p>Dirección</p>
//             </div>
//             <div className="flex items-center">
//                 <ClockIcon className="w-6 h-6 mr-2" />
//                 <p>Horarios</p>
//             </div>
//             <hr />
//             <p>Elige el lugar donde vas a llevar el reciclaje</p>
//             <div>
//                 <Select onValueChange={handleLocationChange}>
//                     <SelectTrigger className={`${styles.selectTrigger} w-[280px] text-black`}>
//                         <SelectValue placeholder="Selecciona una ubicación" />
//                     </SelectTrigger>
//                     <SelectContent className={styles.selectContent}>
//                         <SelectGroup>
//                             <SelectLabel className={styles.selectLabel}>Ubicaciones de reciclaje</SelectLabel>
//                             {locations.map((location) => (
//                                 <SelectItem key={location.value} value={location.value} className={styles.selectItem}>
//                                     <div className="flex items-center">
//                                         <MapPinIcon className="w-4 h-4 mr-2" />
//                                         <span>{location.name}</span>
//                                     </div>
//                                 </SelectItem>
//                             ))}
//                         </SelectGroup>
//                     </SelectContent>
//                 </Select>
//             </div>
//             <div className='text-center'>
//                 <Link href="locations/1" className={buttonVariants({ variant: "blackText", size: "lg", className: "font-bold" })}>Siguiente</Link>
//             </div>
//         </div>
//     );
// }

import { useState, useEffect } from "react"; // Importar useState para manejar el estado local
import styles from '@/styles/recycle-page.module.css';
import { MapPinIcon, ClockIcon } from '@heroicons/react/24/outline';
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import useRecycleStore from "@/app/stores/useRecycleStore"; // Importar Zustand
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

export default function Locations() {
    const [currentLocation, setCurrentLocation] = useState(null); // Estado local para la ubicación seleccionada
    const { setSelectedLocation } = useRecycleStore(); // Acceder al setter para guardar la ubicación

    // Definir ubicaciones con dirección, horarios, e imagenes
    const locations = [
      { value: "location1", name: "Calle Falsa 123, Ciudad A", address: "Calle Falsa 123", hours: "9am - 5pm", imageUrl: "/assets/location1.jpg" },
      { value: "location2", name: "Avenida Siempreviva 742, Ciudad B", address: "Avenida Siempreviva 742", hours: "10am - 6pm", imageUrl: "/assets/location2.jpg" },
      { value: "location3", name: "Plaza Central, Ciudad C", address: "Plaza Central", hours: "8am - 4pm", imageUrl: "/assets/location3.jpg" },
      { value: "location4", name: "Barrio Verde, Ciudad D", address: "Barrio Verde", hours: "11am - 7pm", imageUrl: "/assets/location4.jpg" },
    ];

    // Usar useEffect para seleccionar una ubicación por defecto cuando se monta el componente
    useEffect(() => {
      const defaultLocation = locations[0]; // Selecciona la primera ubicación por defecto (o cualquier otra)
      setCurrentLocation(defaultLocation);
      setSelectedLocation(defaultLocation);
    }, []); // Se ejecuta solo una vez al montar el componente

    // Manejar la selección de ubicación
    const handleLocationChange = (value) => {
        const selectedLocation = locations.find((location) => location.value === value);
        setSelectedLocation(selectedLocation); // Guardar la ubicación en Zustand
        setCurrentLocation(selectedLocation); // Actualizar el estado local para mostrar los detalles
    };

    return (
        <div className="mx-[30px] grid gap-[20px] justify-center my-8 text-white">
            <div className="mb-8 text-3xl text-center">
                <h1>Lugares de reciclados</h1>
            </div>
            {/* Mostrar la imagen de la ubicación seleccionada */}
            <div>
            {currentLocation && (
                <img
                    src={currentLocation.imageUrl}
                    alt={`Imagen de ${currentLocation.name}`}
                    className="object-cover w-full h-64 rounded-lg"
                />
            )}
            </div>

            {/* Mostrar los datos dinámicos de la ubicación seleccionada */}
            {currentLocation ? (
                <div className="p-4 bg-[--color-secundary] border-l-8 border-[--color-primary] rounded-lg shadow-md">
                <p className="mb-2 text-lg font-semibold">{currentLocation.name}</p>
                <div className="flex items-center mb-2">
                    <MapPinIcon className="w-6 h-6 mr-2" />
                    <p>{currentLocation.address}</p>
                </div>
                <div className="flex items-center">
                    <ClockIcon className="w-6 h-6 mr-2" />
                    <p>{currentLocation.hours}</p>
                </div>
            </div>
            ) : (
                <p>Selecciona una ubicación para ver los detalles</p>
            )}
            
            <hr className="border-[--color-secundary]" />
            <p>Elige el lugar donde vas a llevar el reciclaje</p>
            <div>
                <Select defaultValue={locations[0].value} onValueChange={handleLocationChange}>
                    <SelectTrigger className={`${styles.selectTrigger} w-[280px] text-black`}>
                        <SelectValue placeholder="Selecciona una ubicación" />
                    </SelectTrigger>
                    <SelectContent className={styles.selectContent}>
                        <SelectGroup>
                            <SelectLabel className={styles.selectLabel}>Ubicaciones de reciclaje</SelectLabel>
                            {locations.map((location) => (
                                <SelectItem key={location.value} value={location.value} className={styles.selectItem}>
                                    <div className="flex items-center">
                                        <MapPinIcon className="w-4 h-4 mr-2" />
                                        <span>{location.name}</span>
                                    </div>
                                </SelectItem>
                            ))}
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>
            
            <div className='text-center'>
                <Link href="locations/1" className={buttonVariants({ variant: "blackText", size: "lg", className: "font-bold" })}>
                    Siguiente
                </Link>
            </div>
        </div>
    );
}
