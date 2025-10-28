import { useState } from "react";


function ToggleVisibilidad() {
    let mensaje = "Hola desde React";
    const [visibilidad, setVisibilidad] = useState(true);
    
    return (    
        <div>
            <button onClick={() => setVisibilidad(!visibilidad)}>Mostrar / Ocultar</button>
            {visibilidad && <p>{mensaje}</p>}
        </div>
    )
}

export default ToggleVisibilidad;