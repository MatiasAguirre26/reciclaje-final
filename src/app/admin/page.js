'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

import MetalIcon from '/public/icons/metal.svg'
import GlassIcon from '/public/icons/glass.svg'
import PaperIcon from '/public/icons/paper.svg'
import BoxIcon from '/public/icons/box.svg'
import PlasticIcon from '/public/icons/plastic.svg'

const POINTS_PER_KILO = {
  cardboard: 10,
  glass: 5,
  paper: 8,
  metal: 15,
  plastic: 12
}

export default function AdminPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [weights, setWeights] = useState({
    cardboard: '',
    glass: '',
    paper: '',
    metal: '',
    plastic: ''
  })

  const handleSearch = (e) => {
    e.preventDefault()
    console.log('Buscando usuario:', searchQuery)
    setUserEmail(searchQuery)
    setSearchQuery('')
  }

  const handleWeightChange = (material, value) => {
    // Permitir solo números positivos y decimales
    if (/^\d*\.?\d*$/.test(value) || value === '') {
      setWeights(prevWeights => ({
        ...prevWeights,
        [material]: value
      }))
    }
  }

  const calculatePoints = () => {
    const totalPoints = Object.entries(weights).reduce((total, [material, weight]) => {
      const weightValue = parseFloat(weight) || 0
      return total + (weightValue * POINTS_PER_KILO[material])
    }, 0)
    return Math.ceil(totalPoints) // Redondear hacia arriba
  }

  const materials = [
    { icon: BoxIcon, label: "Cartón", key: "cardboard" },
    { icon: GlassIcon, label: "Vidrio", key: "glass" },
    { icon: PaperIcon, label: "Papel", key: "paper" },
    { icon: MetalIcon, label: "Metal", key: "metal" },
    { icon: PlasticIcon, label: "Plástico", key: "plastic" }
  ]

  return (
    <div className="container mx-auto max-w-[600px] px-4 my-8 text-white bg-gray-900 min-h-screen">
      <h1 className="mb-4 text-2xl">Ingrese el correo del usuario para ingresar puntos</h1>
      
      <form onSubmit={handleSearch} className="mb-6">
        <div className="flex gap-2">
          <Input 
            type="text" 
            placeholder="Buscar usuario..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-grow"
          />
          <Button type="submit">Buscar</Button>
        </div>
      </form>

      {userEmail && <p className="mb-4">Usuario seleccionado: {userEmail}</p>}

      <div className="mt-6 space-y-4">
        {materials.map((material, index) => (
          <div key={index} className="flex items-center justify-between space-x-3">
            <material.icon className="w-6 h-6 text-[--color-primary]" />
            <label htmlFor={`option-${index + 1}`} className="text-lg">{material.label}</label>
            <div className="flex flex-col items-end">
              <div className="flex items-center space-x-2">
                <Input
                  type="text"
                  id={`option-${index + 1}`}
                  placeholder="Peso (kg)"
                  className="w-[120px] bg-gray-800"
                  value={weights[material.key]}
                  onChange={(e) => handleWeightChange(material.key, e.target.value)}
                />
                <span className="text-sm">
                  ({POINTS_PER_KILO[material.key]} pts/kg)
                </span>
              </div>
              <span className="text-xs text-gray-400">
                {weights[material.key] ? `${(parseFloat(weights[material.key]) * 1000).toFixed(0)} gramos` : ''}
              </span>
            </div>
          </div>
        ))}

        <Card className="mt-6 bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-lg text-center">Puntos que recibirá</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-center">{calculatePoints()} puntos</p>
          </CardContent>
        </Card>

        <Button className="w-full mt-4 font-bold">Enviar</Button>
      </div>
    </div>
  )
}
