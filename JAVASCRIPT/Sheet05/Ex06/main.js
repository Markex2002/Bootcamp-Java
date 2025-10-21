//Empezamos creando una funcion que nos devuelve una promesa que obtiene un producto por su id
function crearPromesa(id) {
  return fetch("https://fakestoreapi.com/products/" + id)
    .then((response) => {
      if (!response.ok) throw new Error("Error en la respuesta");
      return response.json();
    });
}

//Ahora creamos una funcion asincrona que "ejecuta" todas las promesas
async function obtenerProductos() {
  try {
    //Todas los promesas se guardaran en una tabla
    const results = await Promise.all([
      crearPromesa(1),
      crearPromesa(2),
      crearPromesa(3)
    ]);

    //Mostramos los resultados
    console.log(results[0].title);  
    console.log(results[0].price);
    console.log(results[1].title);  
    console.log(results[1].price);
    console.log(results[2].title);  
    console.log(results[2].price);
  } catch (error) {
    console.error("Error:", error);
  }
}

obtenerProductos();