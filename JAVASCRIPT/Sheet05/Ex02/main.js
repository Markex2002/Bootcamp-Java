//CALLBACKS
setTimeout(() => {
  console.log("Consultando base de datos...");
  setTimeout(() => {
    console.log("Procesando datos...");
    setTimeout(() => {
      console.log("Operación completada");
    })
  }, 1000)
}, 2000);


//PROMESAS
new Promise((resolve) => {
  setTimeout(() => {
    console.log("Consultando base de datos...");
    resolve();
  }, 2000);
}).then(() => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Procesando datos...");
        resolve();
      }, 1000);
    });
  })
  .then(() => {
    console.log("Operación completada");
  });


/*
  Promise.resolve()
    .then(() => console.log("Promesa resuelta"))
    .then(() => console.log("Segunda promesa resuelta"));
*/