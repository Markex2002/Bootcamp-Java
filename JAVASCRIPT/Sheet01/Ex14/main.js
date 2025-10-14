var mensaje = "Mensaje global";

function mostrarMensaje() {
  var mensaje = "Mensaje local";

  console.log("Dentro de la función:", mensaje);
}

mostrarMensaje();

console.log("Fuera de la función:", mensaje);