interface UsuarioProps {
  nombre: string;
  edad?: number;
}

const Usuario = ({nombre, edad}: UsuarioProps) => {
    return (
        <div>
            <p>Nombre: {nombre} (Edad: {edad ? edad : "edad no existe"})</p>
        </div>
    );
}

export default Usuario;