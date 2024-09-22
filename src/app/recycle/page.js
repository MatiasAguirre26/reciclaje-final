'use client'

import { useState } from 'react';
import styles from '@/styles/recycle-page.module.css';
import Navbar from '@/components/navbar';
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import useRecycleStore from "@/app/stores/useRecycleStore"; // Importar la store

// Iconos
import MetalIcon from '/public/icons/metal.svg';
import GlassIcon from '/public/icons/glass.svg';
import PaperIcon from '/public/icons/paper.svg';
import BoxIcon from '/public/icons/box.svg';
import PlasticIcon from '/public/icons/plastic.svg';

const materialsList = [
  { name: 'Metales', icon: <MetalIcon /> },
  { name: 'Vidrio', icon: <GlassIcon /> },
  { name: 'Papel', icon: <PaperIcon /> },
  { name: 'Cartón', icon: <BoxIcon /> },
  { name: 'Plástico', icon: <PlasticIcon /> },
];

export default function Recycle() {
  const { selectedMaterials, setSelectedMaterials } = useRecycleStore(); // Usar Zustand

  const handleSelectMaterial = (material) => {
    if (selectedMaterials.includes(material)) {
      setSelectedMaterials(selectedMaterials.filter((item) => item !== material));
    } else {
      setSelectedMaterials([...selectedMaterials, material]);
    }
  };

  return (
    <div className="grid gap-6 text-center ">
      <div>
        <h2 className='mb-8 text-3xl'>Reciclar</h2>
        <p>Selecciona los materiales que vas a reciclar</p>
      </div>
      <div className={styles.materialsList}>
        {materialsList.map((material, index) => (
          <button
            key={index}
            className={`${styles.materialButton} ${
              selectedMaterials.includes(material) ? styles.selected : ''
            }`}
            onClick={() => handleSelectMaterial(material)}
          >
            <div className={styles.materialIcon}>{material.icon}</div>
            <p className={styles.materialName}>{material.name}</p>
          </button>
        ))}
      </div>
      <div>
        <Link href="recycle/locations" className={buttonVariants({ variant: "default", size: "lg", className: "font-bold" })}>Siguiente</Link>
      </div>
      <div>
        <Navbar />
      </div>
    </div>
  );
}
