'use client'

import { useState } from 'react';
import styles from '@/styles/recycle-page.module.css';
import Navbar from '@/components/navbar';
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button"

//Iconos
import MetalIcon from '/public/icons/metal.svg';
import GlassIcon from '/public/icons/glass.svg';
import PaperIcon from '/public/icons/paper.svg';
import BoxIcon from '/public/icons/box.svg';
import PlasticIcon from '/public/icons/plastic.svg';


import create from "zustand"


const materialsList = [
  { name: 'Metales', icon: <MetalIcon /> },
  { name: 'Vidrio', icon: <GlassIcon /> },
  { name: 'Papel', icon: <PaperIcon /> },
  { name: 'Cartón', icon: <BoxIcon /> },
  { name: 'Plástico', icon: <PlasticIcon /> },
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
      <div className="mx-[30px] grid gap-[20px] text-center justify-center my-8 text-white ">
        <div>
          <h2 className='text-3xl'>Reciclar</h2>
          <p>Selecciona los materiales que vas a reciclar</p>          
        </div>
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
        <div>
          <Link href="recycle/locations" className={buttonVariants({variant: "blackText", size: "lg"})}>Siguiente</Link>          
        </div>
        <div>
          <Navbar />          
        </div>
      </div>
    )
}
  