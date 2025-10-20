/*
- El código normal se ejecuta primero.
- Las promesas usan la cola de microtareas, que se ejecuta después del código síncrono,
  pero antes de las tareas de la cola de macrotareas (como `setTimeout`).
- Por eso, las promesas aparecen antes que
  “setTimeout ejecutado”, aunque `setTimeout` tenga 0 ms de retraso.
*/

console.log("Inicio");

setTimeout(() => console.log("setTimeout ejecutado"), 0);
Promise.resolve()
  .then(() => console.log("Promesa resuelta"))
  .then(() => console.log("Segunda promesa resuelta"));


console.log("Fin");