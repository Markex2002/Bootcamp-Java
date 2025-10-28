/* Crea un componente Clock que muestre la hora actual y se actualice cada
segundo.
1. Define un estado time que guarde la hora formateada ( new
Date().toLocaleTimeString() ).
2. Usa useEffect con un setInterval para actualizar el estado cada segundo.
3. En el cleanup del efecto, llama a clearInterval .
4. Desde App.jsx , monta el componente <Clock /> y comprueba que el reloj se
actualiza correctamente.
5. Si ocultas el componente (por ejemplo, mediante {show && <Clock/>} ) y lo
vuelves a mostrar, el contador debe reiniciarse. */



import {useState, useEffect} from "react";

function Clock() {
    console.log("Creando intervalo")
    const [time, setTime] = useState<string |null>(null)

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date().toLocaleDateString)
        }, 1000);
        return () => clearInterval(intervalId)
    }, [])
    return <p>Clock</p>
}

export default Clock;