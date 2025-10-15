'use strict';

let temporizador = {
    nombre: "cronometro1",
    iniciar(ms) {
        setTimeout(function() {
        console.log(`Listo: ${this.nombre}`);
        }.bind(this), ms);
  }
}

const temporizador2 = {
  nombre: 'Cronometro2',
  iniciar(ms) {
    setTimeout(() => {
      console.log(`Listo: ${this.nombre}`);
    }, ms);
  }
};



// Comenta/descomenta cada versión
const t = Object.create(temporizador); 
t.nombre='Tarea X'; 
t.iniciar(1000);
// Esperado (alguna de las dos versiones): "Listo: Tarea X"
//temporizador2.iniciar(1000); 