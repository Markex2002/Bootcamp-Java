// El operador lógico OR (||) devuelve el primer valor *truthy* que encuentre.
// Como false es falsy, evalúa el siguiente operando ("JavaScript"), que es truthy, y lo devuelve.
console.log(false || "JavaScript");

// El operador lógico AND (&&) devuelve el primer valor *falsy* o, si ninguno es falsy, el último valor evaluado.
// Como true es truthy, devuelve el segundo operando, "ECMAScript".
console.log(true && "ECMAScript");

// El operador ! (NOT) convierte el valor a booleano y luego lo invierte.
// 0 es falsy, así que !0 es true.
console.log(!0);