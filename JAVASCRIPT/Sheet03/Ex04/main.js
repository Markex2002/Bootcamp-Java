const users = [
{ id: 1, name: 'Ana', age: 28 },
{ id: 2, name: 'Luis', age: 17 },
{ id: 3, name: 'Zoe', age: 34 },
];

function mayoresMayusculos(lista) {
    usuariosMayusculas = [];

    lista.forEach(usuario => {
        if (usuario.age >= 18) {
            usuariosMayusculas.push(usuario.name.toUpperCase())
        }
    });

    return usuariosMayusculas;
}

console.log(mayoresMayusculos(users))