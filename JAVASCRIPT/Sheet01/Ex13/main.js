var globalVar = "Soy global"; // variable global

function mostrarAlcance() {
  let localLet = "Soy local"; // variable local
  var localVar = "También soy local (aunque con var)";

  console.log("Dentro de la función:");
  console.log(globalVar); // accesible
  console.log(localLet);  // accesible
  console.log(localVar);  // accesible
}

mostrarAlcance();

console.log("Fuera de la función:");
console.log(globalVar); // accesible
console.log(typeof localLet); // undefined (no accesible)
console.log(typeof localVar); // undefined (no accesible)
