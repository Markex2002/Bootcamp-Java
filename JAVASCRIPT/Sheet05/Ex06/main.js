function crearPromesa(id) {
  return fetch("https://fakestoreapi.com/products/" + id)
    .then((response) => {
      if (!response.ok) throw new Error("Error en la respuesta");
      return response.json();
    });
}

async function obtenerProductos() {
  try {
    const results = await Promise.all([
      crearPromesa(1),
      crearPromesa(2),
      crearPromesa(3)
    ]);

    console.log(results[0]);     
    console.log(results[1]);
    console.log(results[2]);
  } catch (error) {
    console.error("Error:", error);
  }
}

obtenerProductos();






