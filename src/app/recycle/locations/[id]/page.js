import Link from "next/link";
import { buttonVariants } from "@/components/ui/button"

export default function confirm() {
    return (
        <div className="mx-[30px] grid gap-[20px] text-center text-white justify-items-center">
            <h1>Confirmacion de datos</h1>
            <img src='/assets/header.webp' alt='imagen-del-lugar'></img>
            <p>Nombre del lugar</p>
            <p>Direccion</p>
            <p>Horario</p>
            <hr/>
            <p>Materiales elejidos a reciclar</p>
            <Link href="/dashboard" className={buttonVariants({variant: "blackText", size: "lg", className: "rounded-full px-18"})}>Confirmar</Link>
        </div>
    )
}