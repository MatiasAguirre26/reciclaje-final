'use client'

import SearchBar from "@/components/search-bar";
import { Button, buttonVariants } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

import MetalIcon from '/public/icons/metal.svg';
import GlassIcon from '/public/icons/glass.svg';
import PaperIcon from '/public/icons/paper.svg';
import BoxIcon from '/public/icons/box.svg';
import PlasticIcon from '/public/icons/plastic.svg';

export default function AdminPage() {
    return (
        <div className="container mx-auto max-w-[600px] px-4 justify-center my-8 text-white">
            <h1 className="mb-4 text-2xl">Ingrese el correo del usuario para ingresar puntos</h1>
            <SearchBar/>

            {/* Grupo de checkboxes con textos */}
            <div className="mt-6 space-y-4">
                {/* Primera opción */}
                <div className="flex items-center justify-between space-x-3 ">
                    <PaperIcon className="w-6 h-6 text-[--color-primary]" />
                    <label htmlFor="option-1" className="text-lg">Papel</label>
                    <input 
                        type="number" 
                        placeholder="Peso (kg)" 
                        className="ml-4 p-2 border border-gray-300 rounded-md w-[120px] bg-gray-900 text-white"
                    />
                </div>

                {/* Segunda opción */}
                <div className="flex items-center justify-between space-x-3 ">
                    <BoxIcon className="w-6 h-6 text-[--color-primary]" />
                    <label htmlFor="option-2" className="text-lg">Carton</label>
                    <input 
                        type="number" 
                        placeholder="Peso (kg)" 
                        className="ml-4 p-2 border border-gray-300 rounded-md w-[120px] bg-gray-900 text-white"
                    />
                </div>

                {/* Tercera opción */}
                <div className="flex items-center justify-between space-x-3 ">
                    <MetalIcon className="w-6 h-6 text-[--color-primary]" />
                    <label htmlFor="option-3" className="text-lg">Latas de metal</label>
                    <input 
                        type="number" 
                        placeholder="Peso (kg)" 
                        className="ml-4 p-2 border border-gray-300 rounded-md w-[120px] bg-gray-900 text-white"
                    />
                </div>
               {/* Cuarta opción */}
               <div className="flex items-center justify-between space-x-3 ">
                   <PlasticIcon className="w-6 h-6 text-[--color-primary]" />
                    <label htmlFor="option-4" className="text-lg">Plastico</label>
                    <input 
                        type="number" 
                        placeholder="Peso (kg)" 
                        className="ml-4 p-2 border border-gray-300 rounded-md w-[120px] bg-gray-900 text-white"
                    />
                </div>
               {/* Quinta opción */}
               <div className="flex items-center justify-between space-x-3 ">
                    <GlassIcon className="w-6 h-6 text-[--color-primary]" />
                    <label htmlFor="option-5" className="text-lg">Vidrio</label>
                    <input 
                        type="number" 
                        placeholder="Peso (kg)" 
                        className="ml-4 p-2 border border-gray-300 rounded-md w-[120px] bg-gray-900 text-white"
                    />
                </div>
                {/* Tarjeta para mostrar los puntos del usuario */}
                <div className="mt-6">
                    <Card className="text-white bg-gray-800">
                        <CardHeader>
                            <CardTitle className="text-lg text-center">Puntos que recibirá</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-2xl font-bold text-center"> puntos</p>
                        </CardContent>
                    </Card>
                </div>
                <Button className={buttonVariants({ variant: "default", size: "lg", className: "font-bold" })}>Enviar</Button>
            </div>
        </div>
    );
}
