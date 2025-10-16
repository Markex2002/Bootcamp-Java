const a = [3,1,2];

// Esto muta el array Original, pues ordena sus elementos
a.sort();
console.log(a)

// Slice es inmutable, pues devuelve un array nuevo
const b = a.slice(0, 2);
console.log(b)

// toReversed es inmutable, devuelve un nuevo array
const c = b.toReversed();
console.log(c)

// toReversed es inmutable, devuelve un nuevo array con el indice 0 cambiado en este caso
const d = a.with(0, 99);
console.log(d)
