/* Nivel avanzado — “Timer reiniciable”

Crea un componente Timer que cuente los segundos desde su montaje.
Usa un setInterval y almacena el tiempo transcurrido en un estado.

Desde el componente padre, añade un botón “Reiniciar” que cambie una
key del Timer para forzar su desmontaje y montaje.
Comprueba en consola que al reiniciarse se limpia el intervalo anterior y se
inicia uno nuevo. */


import { useEffect, useState } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [key, setKey] = useState(0);

  //Efecto que se ejecuta cuando se monta el componente
  useEffect(() => {
    console.log("Timer montado");
    const intervalId = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => {
      console.log("Limpiando Timer");
      clearInterval(intervalId);
    };
  }, [key]);

  //Handle para cuando le damos al boton de reiniciar
  const handleReset = () => {
    setSeconds(0);
    setKey((prev) => prev + 1);
  };

  return (
    <>
      <p>Segundos transcurridos: {seconds}</p>
      <button onClick={handleReset}>Reiniciar</button>
    </>
  );
}

export default Timer;