'use client'
import { useEffect } from 'react';
import styles from '../styles/recycle-page.module.css';
import Navbar from '../components/navbar';
import useRecycleStore from '../store/useRecycleStore';

const materialsList = [
  { name: 'Metales', icon: '🛠️' },
  { name: 'Vidrio', icon: '🍾' },
  { name: 'Papel', icon: '📄' },
  { name: 'Cartón', icon: '📦' },
  { name: 'Plástico', icon: '🧴' },
];

export default function Recycle() {
  const { selectedMaterials, addMaterial, removeMaterial } = useRecycleStore();

  const handleSelectMaterial = (material) => {
    if (selectedMaterials.includes(material)) {
      removeMaterial(material);
    } else {
      addMaterial(material);
    }
  };

  return (
    <div className={styles.recycleContainer}>
      <h2>Reciclar</h2>
      <div className={styles.materialsList}>
        {materialsList.map((material, index) => (
          <button
            key={index}
            className={`${styles.materialButton} ${
              selectedMaterials.includes(material.name) ? styles.selected : ''
            }`}
            onClick={() => handleSelectMaterial(material.name)}
          >
            <div className={styles.materialIcon}>{material.icon}</div>
            <p className={styles.materialName}>{material.name}</p>
          </button>
        ))}
      </div>
      <Navbar />
    </div>
  )
}
  