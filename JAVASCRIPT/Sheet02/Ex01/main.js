function formatearA(nombre, apellido) {
    if (typeof nombre !== "string" || typeof apellido !== "string" || !nombre || !apellido) {
        throw new TypeError("Nombre y apellido deben ser strings no vacíos");
    }
    return `${apellido}, ${nombre}`;
}

const formatearB = function(nombre, apellido) {
  if (typeof nombre !== "string" || typeof apellido !== "string" || !nombre || !apellido) {
    throw new TypeError("Nombre y apellido deben ser strings no vacíos");
  }
  return `${apellido}, ${nombre}`;
};

const formatearC = (nombre, apellido) => {
  if (typeof nombre !== "string" || typeof apellido !== "string" || !nombre || !apellido) {
    throw new TypeError("Nombre y apellido deben ser strings no vacíos");
  }
  return `${apellido}, ${nombre}`;
};

console.log(formatearA('Ana', 'López')); // "López, Ana"
console.log(formatearB('Luis', 'Pérez')); // "Pérez, Luis"
console.log(formatearC('Érika', 'Suárez')); // "Suárez, Érika"


try { formatearA('', 'X'); } catch(e){ console.log(e instanceof TypeError); } //
true