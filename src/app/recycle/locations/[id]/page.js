import Link from "next/link";
import { buttonVariants } from "@/components/ui/button"
import { MapPinIcon, ClockIcon } from '@heroicons/react/24/outline';

export default function confirm() {
    return (
        <div className="mx-[30px] grid gap-[20px] justify-center my-8 text-white">
            <div className="mb-8 text-3xl text-center">
                <h1>Confirmar datos</h1>                
            </div>
            <img src='/assets/header.webp' alt='imagen-del-lugar'></img>
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
            <p>Materiales elejidos a reciclar</p>
            <div className='text-center'>
                <Link href="/dashboard" className={buttonVariants({variant: "blackText", size: "lg", className: "font-bold"})}>Confirmar</Link>
            </div>
        </div>
    )
}