'use client'

import SearchBar from "@/components/search-bar";
import { Checkbox } from "@/components/ui/checkbox"

export default function AdminPage() {
    return (
        <div className="container mx-auto max-w-[600px] px-4 justify-center my-8 text-white">
            <h1 className="mb-4 text-2xl">Ingrese el correo del usuario para ingresar puntos</h1>
            <SearchBar/>

            {/* Grupo de checkboxes con textos */}
            <div className="mt-6 space-y-4">
                {/* Primera opción */}
                <div className="flex items-center space-x-3">
                    <Checkbox id="option-1" />
                    <label htmlFor="option-1" className="text-lg">Papel</label>
                    <input 
                        type="number" 
                        placeholder="Peso (kg)" 
                        className="ml-4 p-2 border border-gray-300 rounded-md w-[120px] bg-gray-900 text-white"
                    />
                </div>

                {/* Segunda opción */}
                <div className="flex items-center space-x-3">
                    <Checkbox id="option-2" />
                    <label htmlFor="option-2" className="text-lg">Carton</label>
                </div>

                {/* Tercera opción */}
                <div className="flex items-center space-x-3">
                    <Checkbox id="option-3" />
                    <label htmlFor="option-3" className="text-lg">Latas de metal</label>
                </div>
               {/* Cuarta opción */}
               <div className="flex items-center space-x-3">
                    <Checkbox id="option-4" />
                    <label htmlFor="option-4" className="text-lg">Plastico</label>
                </div>
               {/* Quinta opción */}
               <div className="flex items-center space-x-3">
                    <Checkbox id="option-5" />
                    <label htmlFor="option-5" className="text-lg">Vidrio</label>
                </div>
            </div>
        </div>
    );
}
