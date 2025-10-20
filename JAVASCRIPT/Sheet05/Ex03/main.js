//Funcion asincrona
function esperar(milisegundos) {
  return new Promise((resolve) => {
    setTimeout(resolve, milisegundos);
  });
}

//Colocamos los awaits en una funcion asincrona, pues si no no funcionaria
async function tareas() {
  console.log("Inicio del proceso...");
  await esperar(1000);

  console.log("Cargando configuración...");
  await esperar(1500);

  console.log("Proceso completado");
}

//Ejecutamos la funcion
tareas();