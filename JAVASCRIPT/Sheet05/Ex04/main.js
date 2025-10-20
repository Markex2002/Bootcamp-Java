
//Funcion con una promesa que se resuelve o rechaza aleatoriamente
function procesarTarea() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const random_boolean = Math.random() < 0.5;
      random_boolean ? resolve(console.log("Completado"), "Completado") : reject("Error");
    }, 1000);
  });
}

//Funcion para probar la promesa varias veces
async function probarTarea() {
  try {
    await procesarTarea();
  } catch (error) {
    console.log("Error capturado: " + error);
  }

  try {
    await procesarTarea();
  } catch (error) {
    console.log("Error capturado: " + error);
  }

  try {
    await procesarTarea();
  } catch (error) {
    console.log("Error capturado: " + error);
  }
}

//Ejecutamos la funcion
probarTarea();