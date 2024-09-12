import Link from "next/link";
import { buttonVariants } from "@/components/ui/button"

export default function confirm() {
    return (
        <div>
            <h1>Confirmacion de datos</h1>
            <Link href="/dashboard" className={buttonVariants({})}>Confirmar</Link>
        </div>
    )
}