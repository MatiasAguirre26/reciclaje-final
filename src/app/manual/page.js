import React from "react";
import { Button } from "@/components/ui/button"; // Asegúrate de que la ruta sea la correcta según tu proyecto

export default function Manual() {
  return (
    <div className="container mx-auto max-w-[600px] px-4 grid gap-[20px] justify-center my-8 text-white">
      {/* Título principal */}
      <h1 className="mb-8 text-4xl font-bold text-center">Manual Básico de Reciclaje</h1>

      {/* Sección: ¿Por qué reciclar? */}
      <section className="mb-6">
        <h2 className="mb-4 text-2xl font-semibold">¿Por qué reciclar?</h2>
        <p className="text-gray-700">
          El reciclaje es fundamental para reducir el impacto ambiental, reducir la cantidad de basura que generamos, y reutilizar materiales que, de otro modo, terminarían en vertederos. Reciclar correctamente también te ayudará a ganar puntos en nuestra aplicación.
        </p>
      </section>

      {/* Sección: Materiales reciclables */}
      <section className="mb-6">
        <h2 className="mb-4 text-2xl font-semibold">Materiales reciclables</h2>
        <ul className="text-gray-700 list-disc list-inside">
          <li>
            <strong>Plástico:</strong> Separa los plásticos PET, HDPE y otros.
          </li>
          <li>
            <strong>Papel y cartón:</strong> Evita reciclar papel sucio o con grasa.
          </li>
          <li>
            <strong>Vidrio:</strong> Vidrio de botellas y frascos, evita mezclar colores.
          </li>
          <li>
            <strong>Metal:</strong> Latas de aluminio y otros metales.
          </li>
          <li>
            <strong>Orgánicos:</strong> Usa los residuos orgánicos para compostaje.
          </li>
        </ul>
      </section>

      {/* Sección: Cómo clasificar los residuos */}
      <section className="mb-6">
        <h2 className="mb-4 text-2xl font-semibold">Cómo clasificar tus residuos</h2>
        <p className="text-gray-700">
          Sigue estos pasos sencillos para clasificar correctamente tus residuos en casa:
        </p>
        <ol className="mt-4 text-gray-700 list-decimal list-inside">
          <li>Separa los residuos orgánicos de los inorgánicos.</li>
          <li>Clasifica los materiales reciclables (plástico, papel, vidrio, metal) por separado.</li>
          <li>Asegúrate de limpiar los envases antes de reciclarlos.</li>
          <li>Deposita los residuos en los contenedores correctos.</li>
        </ol>
      </section>

      {/* Sección: Errores comunes */}
      <section className="mb-6">
        <h2 className="mb-4 text-2xl font-semibold">Errores comunes</h2>
        <ul className="text-gray-700 list-disc list-inside">
          <li>No limpiar los envases antes de reciclar.</li>
          <li>Mezclar vidrio de diferentes colores.</li>
          <li>Reciclar papel o cartón sucio o grasoso.</li>
        </ul>
      </section>

      {/* Botones de navegación */}
      <div className="flex justify-center mt-8 space-x-4">
        <Button className="px-4 py-2">Guía de reciclaje</Button>
        <Button className="px-4 py-2">Lista de zonas de reciclaje</Button>
        <Button className="px-4 py-2">Ver recompensas</Button>
      </div>
    </div>
  );
}
