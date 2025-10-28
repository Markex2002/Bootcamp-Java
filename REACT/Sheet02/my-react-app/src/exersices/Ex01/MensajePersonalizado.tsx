interface personalizacionProps {
  texto: string;
  color: string;
}

function MensajePersonalizado(datos: personalizacionProps) {
    let estilos = {
        backgroundColor: datos.color,
        fontWeight: "bold",
        textAlign: "center" as const,
    }

    return (        
        <div>
            <p style={estilos}> {datos.texto} </p>
        </div>
    );
}

export default MensajePersonalizado;