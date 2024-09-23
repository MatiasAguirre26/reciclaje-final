'use client';

import { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import Navbar from '@/components/navbar';

export default function MapComponent() {
  useEffect(() => {
    // Verificar si el mapa ya está inicializado
    if (!document.getElementById('map')._leaflet_id) {
        // Centrar el mapa en Buenos Aires, Argentina
        const map = L.map('map').setView([-34.6037, -58.3816], 53); // Coordenadas de Buenos Aires

        // Agregar capa de mapa (OpenStreetMap)
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);


     // Crear un ícono personalizado usando el ícono de Heroicons como HTML
     const iconHtml = `
     <div style="width: 24px; height: 24px; color: var(--background-color);">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-9">
        <path fill-rule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clip-rule="evenodd" />
        </svg>
     </div>
   `;

   // Crear un icono de Leaflet con ese HTML
   const customIcon = L.divIcon({
     className: 'custom-marker', // Clase CSS para estilos adicionales
     html: iconHtml,
     iconSize: [24, 24]
   });

      // Información de las locaciones
      const locations = [
        {
          coords: [-34.6037, -58.3816],
          name: 'Zona de Reciclaje 1',
          address: 'Plaza de Mayo, Buenos Aires',
          hours: 'Lunes a Viernes: 9:00 AM - 6:00 PM',
        },
        {
          coords: [-34.6158, -58.4333],
          name: 'Zona de Reciclaje 2',
          address: 'Parque Centenario, Buenos Aires',
          hours: 'Todos los días: 8:00 AM - 8:00 PM',
        },
        {
          coords: [-34.6272, -58.3644],
          name: 'Zona de Reciclaje 3',
          address: 'Barracas, Buenos Aires',
          hours: 'Lunes a Sábado: 10:00 AM - 5:00 PM',
        },
        {
          coords: [-34.5904, -58.3820],
          name: 'Zona de Reciclaje 4',
          address: 'Recoleta, Buenos Aires',
          hours: 'Todos los días: 9:00 AM - 7:00 PM',
        }
      ];

        // Añadir marcadores
        locations.forEach((location) => {
            const popupContent = `
            <div class="p-4">
              <h3 class="text-lg font-semibold text-green-700">${location.name}</h3>
              <p class="text-sm text-gray-700">Dirección: ${location.address}</p>
              <p class="text-sm text-gray-700">Horario: ${location.hours}</p>
            </div>
          `;
            L.marker(location.coords, { icon: customIcon })
                .addTo(map)
                .bindPopup(popupContent)
                .openPopup();
            });
    }
  }, []);

  return (
    <div className="container mx-auto max-w-[600px] px-4 my-8 text-white">
        <div id="map" className='w-full h-[800px] rounded-lg mb-4'></div>
        <Navbar />
    </div>
    
    
  );
}
