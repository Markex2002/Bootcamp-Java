import { useRef } from "react";

function FormularioNoControlado() {

  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputRef.current) {
      alert(`Has escrito: ${inputRef.current.value}`);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Escribe algo..." ref={inputRef} />
        <p></p>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default FormularioNoControlado;
