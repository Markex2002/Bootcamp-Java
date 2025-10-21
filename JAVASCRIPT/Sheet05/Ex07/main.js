//Funcion para crear un usuario mediante una peticion POST
async function crearUsuario(usuario) {
const respuesta = await fetch("https://reqres.in/api/users", 
  {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(usuario)
  });

const datos = await respuesta.json();
console.log(datos);
}

//Creamos el usuario con sus atributos
let user = 
{
"name": "Alex",
"job": "Frontend Developer"
}


crearUsuario(user);