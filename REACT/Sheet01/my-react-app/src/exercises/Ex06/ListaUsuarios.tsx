//Interfaces para definir usuario y props
interface usuario{
    id: number;
    nombre: string;
    activo: boolean;
}
interface usuariosProps{
    usuarios: usuario[];
}


function ListaUsuarios({usuarios}: usuariosProps) {
    //Filtramos los usuarios activos
    const usuariosActivos = usuarios.filter(usuario => usuario.activo);

    //En el caso de que no queden usuarios activos, mostramos un mensaje
    if (usuariosActivos.length === 0) {
        return <p>No hay usuarios activos.</p>;
    }

    //Renderizamos la lista de usuarios activos
    return (
        <ul>
            { usuariosActivos.map((usuario) =>
                <li key={usuario.id}>
                    {usuario.id} - {usuario.nombre}
                </li>
                )
            }
        </ul>
    );
}


export default ListaUsuarios;