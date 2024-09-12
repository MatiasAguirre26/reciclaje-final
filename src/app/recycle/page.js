'use client'

import { useState } from 'react';
import styles from '@/styles/recycle-page.module.css';
import Navbar from '@/components/navbar';
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button"
import create from "zustand"


const materialsList = [
    { name: 'Metales', icon: '🛠️' },
    { name: 'Vidrio', icon: '🍾' },
    { name: 'Papel', icon: '📄' },
    { name: 'Cartón', icon: '📦' },
    { name: 'Plástico', icon: '🧴' },
  ];

export default function Recycle() {
    const [selectedMaterials, setSelectedMaterials] = useState([]);

    const handleSelectMaterial = (material) => {
      if (selectedMaterials.includes(material)) {
        setSelectedMaterials(selectedMaterials.filter((item) => item !== material));
      } else {
        setSelectedMaterials([...selectedMaterials, material]);
      }
    };

    return (
      <div className={styles.recycleContainer}>
        <h2>Reciclar</h2>
        <p>Selecciona los materiales que vas a reciclar</p>
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
        <Link href="recycle/locations" className={buttonVariants({ })}>Siguiente</Link>
        <Navbar />
      </div>
    )
}
  