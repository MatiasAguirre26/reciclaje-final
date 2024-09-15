"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function LugaresReciclaje() {
  const [recyclingPoints, setRecyclingPoints] = useState([]);
  const [selectedPoint, setSelectedPoint] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecyclingPoints = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/api/recycling-points"
        );
        if (!response.ok) {
          throw new Error("Error al obtener los puntos de reciclaje");
        }
        const data = await response.json();
        setRecyclingPoints(data.points);
      } catch (err) {
        setError("No se pudieron cargar los puntos de reciclaje");
      } finally {
        setIsLoading(false);
      }
    };

    fetchRecyclingPoints();
  }, []);

  if (isLoading) {
    return <div className="text-center">Cargando puntos de reciclaje...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Lugares de reciclado</h1>
      <Image
        src="/assets/recycling-general.jpg"
        alt="Imagen general de reciclaje"
        width={500}
        height={300}
        className="w-full h-auto mb-4 rounded"
      />
      {selectedPoint && (
        <>
          <p className="font-semibold">{selectedPoint.name}</p>
          <p>{selectedPoint.address}</p>
          <p className="mb-4">{selectedPoint.schedule}</p>
        </>
      )}
      <hr className="my-4" />
      <p className="mb-2">Elige el lugar donde vas a llevar el reciclaje</p>
      <Select
        onValueChange={(value) =>
          setSelectedPoint(
            recyclingPoints.find((point) => point.id === value) || null
          )
        }
      >
        <SelectTrigger className="w-full mb-4">
          <SelectValue placeholder="Selecciona un lugar" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Puntos de Reciclaje</SelectLabel>
            {recyclingPoints.map((point) => (
              <SelectItem key={point.id} value={point.id}>
                {point.name}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      <Button asChild className="w-full" disabled={!selectedPoint}>
        <Link href={`/lugares/${selectedPoint?.id}`}>Siguiente</Link>
      </Button>
    </div>
  );
}
