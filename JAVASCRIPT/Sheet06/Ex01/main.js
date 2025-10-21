//Funcion para obtener un pokemon por su id
async function obtenerPokemon(id){
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + id);
    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    console.log("Nombre: " + data.name);


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


//Funcion para insertar los datos del pokemon en el HTML
function rellenarDatosHtml(pokemon) {





}




console.log(obtenerPokemon(1));

