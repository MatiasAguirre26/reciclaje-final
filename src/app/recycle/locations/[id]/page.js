'use client';

import styles from '@/styles/recycle-page.module.css';
import { MapPinIcon, ClockIcon } from '@heroicons/react/24/outline';
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import useRecycleStore from "@/app/stores/useRecycleStore"; // Importar zustand
import { useRouter } from 'next/navigation'; // Este hook es específico del App Router


export default function ConfirmationPage() {
  const router = useRouter();
  const handleConfirm = async () => {
    if (selectedMaterials.length > 0 && selectedLocation) {
      // Datos a enviar al backend
      const data = {
        materials: selectedMaterials,
        location: selectedLocation,
      };

      try {
        // Enviar los datos al backend mediante fetch
        const response = await fetch("/api/confirmation", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        // Verificar la respuesta del servidor
        if (response.ok) {
          // Redirigir a la página de éxito si la respuesta es exitosa
          router.push("/reciclaje-exitoso");
        } else {
          // Manejar errores en la respuesta del servidor
          const errorData = await response.json();
          console.error("Error:", errorData.message);
          alert("Error al enviar los datos. Inténtalo de nuevo.");
        }
      } catch (error) {
        // Manejar errores de la solicitud
        console.error("Error:", error);
        alert("Hubo un problema al enviar los datos. Inténtalo de nuevo.");
      }
    } else {
      // Mostrar un mensaje si no hay materiales o ubicación seleccionados
      alert("Por favor, selecciona materiales y una ubicación antes de confirmar.");
    }
    // Aquí haces la lógica de confirmación
    // Una vez que se haya confirmado, redirige a la página de éxito
    router.push('/reciclaje-exitoso');
  };
  // Obtener datos desde Zustand
  const { selectedMaterials, selectedLocation } = useRecycleStore();

  return (
    <div className="mx-[30px] grid gap-[20px] justify-center my-8 text-white">
      <div className="mb-8 text-3xl text-center">
        <h1>Confirmar Reciclaje</h1>
      </div>

      {/* Mostrar los materiales seleccionados */}
      <div className={styles.materialsSection}>
        <h2 className='text-xl'>Materiales seleccionados:</h2>
        {selectedMaterials.length === 0 ? (
          <p>No has seleccionado ningún material.</p>
        ) : (
        <div className={styles.materialsList}>
        {selectedMaterials.map((material, index) => (
          <div
            key={index}
            className={"bg-[--color-secundary] text-white rounded-lg p-4 flex flex-col items-center justify-center"}
          >
            <div className={styles.materialIcon}>{material.icon}</div>
            <p className={styles.materialName}>{material.name}</p>
          </div>
        ))}
        </div>
        )}
      </div>

      {/* Mostrar la ubicación seleccionada */}
      <div className={styles.locationSection}>
        <h2 className='mb-3 text-xl'>Ubicación seleccionada:</h2>
        {selectedLocation ? (
          <div className="mb-5 p-4 bg-[--color-secundary] border-l-8 border-[--color-primary] rounded-lg drop-shadow-[0_35px_35px_rgba(0,0,0,100)]">
            <p className='mb-2 text-lg font-semibold'>Nombre del lugar: {selectedLocation.name}</p>
            <div className="flex items-center mb-3">
              <MapPinIcon className="w-6 h-6 mr-2" />
              <p>{selectedLocation.address}</p>
            </div>
            <div className="flex items-center">
              <ClockIcon className="w-6 h-6 mr-2" />
              <p>{selectedLocation.hours}</p>
            </div>
          </div>
        ) : (
          <p>No se seleccionó ninguna ubicación.</p>
        )}
      </div>

      <div className='flex justify-center gap-4'>
        <Link href="./" className={buttonVariants({ variant: "secondary", size: "lg", className: "font-bold" })}>
          Volver
        </Link>
        <Link href="/confirmation/success" onClick={handleConfirm} className={buttonVariants({ variant: "default", size: "lg", className: "font-bold" })}>
          Confirmar
        </Link>
      </div>
    </div>
  );
}
