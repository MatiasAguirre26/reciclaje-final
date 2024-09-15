import styles from '@/styles/recycle-page.module.css';
import { MapPinIcon, ClockIcon } from '@heroicons/react/24/outline';
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

export default function locations() {
    return (
        <div className="mx-[30px] grid gap-[20px] justify-center my-8 text-white">
            <div className="mb-8 text-3xl text-center">
                <h1>Lugares de reciclados</h1>                
            </div>
            <div>
                <img src='/assets/header.webp' alt='imagen-del-lugar'></img>    
            </div>
            <p>Nombre del lugar</p>
            <div className="flex items-center">
                <MapPinIcon className="w-6 h-6 mr-2" />
                <p>Dirección</p>
            </div>
            <div className="flex items-center">
                <ClockIcon className="w-6 h-6 mr-2" />
                <p>Horarios</p>
            </div>
            <hr/>
            <p>Elige el lugar donde vas a llevar el reciclaje</p>                          
            <div>
            <Select>
                <SelectTrigger className={`${styles.selectTrigger} w-[280px] text-black`}>
                    <SelectValue placeholder="Selecciona una ubicación" />
                </SelectTrigger>
                <SelectContent className={styles.selectContent}>
                    <SelectGroup>
                        <SelectLabel className={styles.selectLabel}>Ubicaciones de reciclaje</SelectLabel>
                        <SelectItem value="location1" className={styles.selectItem}>
                            <div className="flex items-center">
                                <MapPinIcon className="w-4 h-4 mr-2" />
                                <span>Calle Falsa 123, Ciudad A</span>
                            </div>
                        </SelectItem>
                        <SelectItem value="location2" className={styles.selectItem}>
                            <div className="flex items-center">
                                <MapPinIcon className="w-4 h-4 mr-2" />
                                <span>Avenida Siempreviva 742, Ciudad B</span>
                            </div>
                        </SelectItem>
                        <SelectItem value="location3" className={styles.selectItem}>
                            <div className="flex items-center">
                                <MapPinIcon className="w-4 h-4 mr-2" />
                                <span>Plaza Central, Ciudad C</span>
                            </div>
                        </SelectItem>
                        <SelectItem value="location4" className={styles.selectItem}>
                            <div className="flex items-center">
                                <MapPinIcon className="w-4 h-4 mr-2" />
                                <span>Barrio Verde, Ciudad D</span>
                            </div>
                        </SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>             
            </div>
            <div className='text-center'>
                <Link href="locations/1" className={buttonVariants({variant: "blackText", size: "lg", className: "font-bold"})}>Siguiente</Link>                
            </div>
        </div>

    )
}