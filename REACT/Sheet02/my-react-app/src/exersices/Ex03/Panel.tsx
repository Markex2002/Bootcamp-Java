import IconoNotificacion from "./IconoNotificacion";

function Panel({mensaje}: {mensaje: string}) {

    return(
        <IconoNotificacion mensaje={mensaje}></IconoNotificacion>
    )
}

export default Panel;