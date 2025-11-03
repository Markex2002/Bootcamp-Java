import { useEffect } from "react";

function Greeting({name}: {name: string}) {
    useEffect(() => {console.log(`Cambiando nombre para ${name}`)



}, [name])
    return (
        <>
        <p>Greeting, {name}</p>
        </>
    )
}

export default Greeting;