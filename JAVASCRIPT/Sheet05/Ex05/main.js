
//EJEMPLO FETCH
async function obtenerUsuarios() {
  try {
    const response = await fetch("https://randomuser.me/api/?results=3");
    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    data.results.forEach((element) => {
      console.log("Nombre: " + element.name.first + " " + element.name.last);
      console.log("País: " + element.location.country);
    });

  } catch (error) {
    if (error instanceof TypeError) {
      console.error("No hay conexión o la solicitud falló.");
    } else {
      console.error("Error:", error.message);
    }
  } finally {
    console.log("Petición finalizada");
  }
}

//Ejecutamos la función
obtenerUsuarios();
