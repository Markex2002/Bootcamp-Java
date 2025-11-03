// App.tsx
import React, { useEffect, useId, useState } from "react";
import "./App.css";
import Ex01 from "./exercises/Ex01/Ex01";
import Ex02 from "./exercises/Ex02/Ex02";
import Ex03 from "./exercises/Ex03/Ex03";
//import Usuario from "./exercises/ex03/Usuario";

// Tipos
type Level = "basic" | "advanced";
type ExerciseComponent = React.ComponentType<{ nivel: Level }>;

// Registros estáticos fuera del componente
const EXERCISES = {
  1: Ex01,
  2: Ex02,
  3: Ex03,
} as const satisfies Record<number, ExerciseComponent>;

const LEVELS = ["basic", "advanced"] as const satisfies readonly Level[];

export default function App() {
  const [exId, setExId] = useState<keyof typeof EXERCISES | null>(null);
  const [level, setLevel] = useState<Level>("basic");

  const baseId = useId();
  const exerciseIds = Object.keys(EXERCISES).map(
    key => Number(key) as keyof typeof EXERCISES);


  // Si el id seleccionado deja de existir (p. ej., cambias EXERCISES), resetea
  useEffect(() => {
    if (exId != null && !(exId in EXERCISES)) setExId(null);
  }, [exId]);

  const Selected = exId != null ? EXERCISES[exId] : undefined;

  return (
    <>
      {/* Tabs accesibles para elegir ejercicio */}
      <div
        role="tablist"
        aria-label="Ejercicios"
        className="exercises"
      >
        {exerciseIds.map((id) => {
          const selected = exId === id;
          const tabId = `${baseId}-tab-ex-${id}`;
          const panelId = `${baseId}-panel-ex-${id}`;
          return (
            <button
              key={id}
              id={tabId}
              role="tab"
              type="button"
              aria-selected={selected}
              aria-controls={panelId}
              tabIndex={selected ? 0 : -1}
              className={selected ? "active" : undefined}
              onClick={() => setExId(id)}
            >
              {`ex${String(id).padStart(2, "0")}`}
            </button>
          );
        })}
      </div>

      {/* Radios para nivel (elección exclusiva) */}
      <fieldset className="levels">
        <legend>Niveles</legend>
        {LEVELS.map((lvl) => (
          <label key={lvl}>
            <input
              type="radio"
              name="level"
              value={lvl}
              checked={level === lvl}
              onChange={() => setLevel(lvl)}
            />
            {lvl}
          </label>
        ))}
      </fieldset>

      {/* Panel del ejercicio seleccionado */}
      <main
        role="tabpanel"
        id={exId != null ? `${baseId}-panel-ex-${exId}` : undefined}
        aria-labelledby={exId != null ? `${baseId}-tab-ex-${exId}` : undefined}
        className="exercise-container"
      >
        {Selected ? (
          <Selected nivel={level} />
        ) : (
          <p>Selecciona un ejercicio</p>
        )}
      </main>
    </>
  );
}
