import { useState } from "react";

function FormularioControlado() {

  const [texto, setTexto] = useState("");
  const [mensaje, setMensaje] = useState("");

  // Función que maneja el envío del formulario
  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setMensaje(texto);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Escribe algo..." value={texto}
          onChange={(e) => setTexto(e.target.value)}/>
          <p></p>
          <button type="submit">Enviar</button>
      </form>


      {mensaje && (<p>Has escrito: <strong>{mensaje}</strong></p>)}
    </div>
  );
}

export default FormularioControlado;
