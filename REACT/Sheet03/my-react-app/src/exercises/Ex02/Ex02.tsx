/* Objetivo didáctico: entender las dependencias de useEffect y cómo React
sincroniza y limpia correctamente al modificar props.
Nivel básico — “Saludo dependiente de props”
Crea un componente Greeting que reciba una prop name .
Usa useEffect para mostrar en consola cada vez que cambie el nombre:
"Actualizando saludo para <name>" .
Desde App , añade un <input> controlado que actualice la prop name con
cada pulsación.
Observa en consola cómo el efecto se ejecuta solo cuando cambia la prop.
Nivel avanzado — “Simulador de conexión de salas”
Crea un componente RoomStatus que reciba una prop roomId (por ejemplo
"general" , "soporte" , "random" ).
Al montarse o cuando cambie roomId , muestra: "Connecting to room: <id>" .
Usa un setTimeout de 2 segundos para simular la conexión y luego muestra
"Connected to room: <id>" .
En el cleanup, imprime "Disconnected from room: <id>" .
En el padre ( App ), añade un <select> que cambie la prop roomId .
Observa en consola la secuencia de conexión y desconexión según
cambias de sala. */

import { useState } from "react";
import Greeting from "./Greeting";


type level = "basic" | "advanced";

function Ex02({nivel}: {nivel:level}) {
    const [nombre, setNombre] = useState<string>("")

    return (
        <div>
            {
                /* nivel === "basic" && */
                <>
                    <input name="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)}/>
                    <Greeting name={nombre}></Greeting>
                </>
            }
        </div>
    )
}

export default Ex02;













