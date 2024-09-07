
import Navbar from '../components/navbar';
import styles from '../styles/map-page.module.css';


import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css'; // Importar estilos de Leaflet


// Carga dinámica de React Leaflet para evitar problemas de SSR
const MapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import('react-leaflet').then(mod => mod.Marker), { ssr: false });
const Popup = dynamic(() => import('react-leaflet').then(mod => mod.Popup), { ssr: false });

export default function Map() {
    const center = [51.505, -0.09]; // Coordenadas de ejemplo (Londres)
    return (
        <div className={styles.mapContainer}>
            <MapContainer center={center} zoom={13} style={{ height: '100vh', width: '100vw' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={center}>
                <Popup>
                Ejemplo de ubicación en el mapa.
                </Popup>
            </Marker>
            </MapContainer>
            <div className={styles.searchBar}>
                <input type="text" placeholder="Buscador" />
                <button className={styles.searchButton}>🔍</button>
            </div>
            <Navbar />
        </div>

        
    )
}
  