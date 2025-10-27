// Definimos la interfaz para usuario
interface usuario {
    id: number;
    nombre: string;
}
// Definimos el conjunto de Usuarios como props
interface usuariosProps {
    usuarios: usuario[];
}

//Usamos usuarios.map para renderizar la lista de usuarios
//key es necesario para que React identifique cada elemento de la lista
function RenderizarLista({usuarios}: usuariosProps) {
    return (
        <div>
            <ul>
                {usuarios.map((usuario) => (
                    <li key={usuario.id}>
                        {usuario.id} - {usuario.nombre}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default RenderizarLista;