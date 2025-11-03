import { useEffect, useState } from "react";

const url = "https://jsonplaceholder.typicode.com/users";

type User = {
    id: number,
    name: string,
}

function UserList() {
    const [usuarios, setUsuarios] = useState<User[]>([]);

    useEffect(() => {
    const fetchUsers = async () => {
        const url = "https://jsonplaceholder.typicode.com/users";
        const response = await fetch(url);
        const data = await response.json();
        setUsuarios(data); // data is already an array, not data.results
    };

    fetchUsers();
    }, []);


    return (
        <div>
        <h2>Lista de Usuarios</h2>
        {usuarios.length === 0 ? (
            <p>Cargando...</p>
        ) : (
            usuarios.map((user) => (
                <div key={user.id}>
                <h3>{user.id}</h3>
                <p>{user.name}</p>
                <hr />
            </div>
        )))}
        </div>
    );
}

export default UserList;