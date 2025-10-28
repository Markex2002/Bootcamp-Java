function IconoNotificacion({mensaje}: {mensaje: String}) {

        /* Si tuviéramos muchos componentes anidados o si varios necesitaran el mensaje,
        tendríamos que seguir pasándolo manualmente por cada nivel.
        Esto vuelve el código difícil de mantener y escalar.
        En esos casos se recomienda usar Context API o un estado global */

    return (
        <div>
            <p>{mensaje} 🔔</p>
        </div>
    )
}

export default IconoNotificacion;