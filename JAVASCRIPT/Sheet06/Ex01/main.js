const urlBasePokemon = "https://pokeapi.co/api/v2/pokemon/";


//FUNCION PRINCIPAL QUE PINTA LA POKEDEX COMPLETA//
async function pintarPokedexCompleta() {
  try {
    //Podemos usar ?limit para limitar el numero de pokemons que queremos obtener
    const response = await fetch(urlBasePokemon + "?limit=151");
    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status} ${response.statusText}`);
    }
    
    const data = await response.json();
    for (const pokemon of data.results) {
      await obtenerPokemon(pokemon.url);
    }

  } catch (error) {
    if (error instanceof TypeError) {
      console.error("No hay conexión o la solicitud falló.");
    } else {
      console.error("Error:", error.message);
    }
  }
}


//Funcion para obtener un pokemon por su id//
async function obtenerPokemon(urlPokemon){
  try {
    const response = await fetch(urlPokemon);
    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();

    //Insertamos los datos en el HTML
    rellenarDatosHtml(data);


  } catch (error) {
    if (error instanceof TypeError) {
      console.error("No hay conexión o la solicitud falló.");
    } else {
      console.error("Error:", error.message);
    }
  }
}


//Funcion para insertar los datos del pokemon en el HTML//
function rellenarDatosHtml(pokemon) {
  const container = document.querySelector("main .container");
  let article = document.createElement("article");

  //Parte de la imagen//
  let divImagen = document.createElement("div");
  divImagen.classList.add("image-wraper");

  let img = document.createElement("img");
  img.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + pokemon.id + ".png";
  let pID = document.createElement("p");
  pID.classList.add("id");
  pID.textContent = ("ID / " + pokemon.id);
  

  divImagen.append(img);
  divImagen.append(pID);


  //Parte de de los datos//
  let divDatos = document.createElement("div");
  divDatos.classList.add("article-data");

  let h3nombre = document.createElement("h3");
  h3nombre.textContent = pokemon.name;
  divDatos.append(h3nombre);

  pokemon.types.forEach(tipo => {
    let button = document.createElement("button");
    button.textContent = tipo.type.name;
    divDatos.append(button);
  });

  //Sacamos de donde evoluciona el Pokemon
  obtenerEvolucionaDe(pokemon.species.url, divDatos);

  //Insertamos las secciones en el article
  article.append(divImagen);
  article.append(divDatos);

  //Finalmente insertamos el article en el container
  container.append(article);
}



//Funcion para obtener de donde evoluciona un pokemon
async function obtenerEvolucionaDe(urlEspeciesPokemon, divDatos){
    try {
    const response = await fetch(urlEspeciesPokemon);
    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();

    //Comprobamos si el pokemon evoluciona de otro
    if (data.evolves_from_species) {
      let divEvolucionaDe = document.createElement("div");
      divEvolucionaDe.classList.add("evolves-from");

      //Datos
      let pEvolucionaDe = document.createElement("p");
      pEvolucionaDe.textContent = "Evoluciona de:";
      let h4EvolucionaDe = document.createElement("h4");
      h4EvolucionaDe.textContent = data.evolves_from_species.name;

      divEvolucionaDe.append(pEvolucionaDe);
      divEvolucionaDe.append(h4EvolucionaDe);

      //Finalmente añadimos los datos de evolucion al divDatos
      divDatos.append(divEvolucionaDe);
    }


  } catch (error) {
    if (error instanceof TypeError) {
      console.error("No hay conexión o la solicitud falló.");
    } else {
      console.error("Error:", error.message);
    }
  }
}


pintarPokedexCompleta();