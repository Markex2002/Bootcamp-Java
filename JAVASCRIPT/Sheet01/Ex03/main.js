// El operador + con una cadena ("5") convierte el número 2 a cadena 
// y realiza concatenación de texto.
console.log("5" + 2)

// El operador - solo funciona con números, así que JavaScript convierte 
// la cadena "5" a número y hace la resta 5 - 2 = 3.
console.log("5" - 2)

// Los booleanos se convierten a números: true = 1, false = 0. Entonces 1 + 1 = 2.
console.log(true + true)

// El operador == realiza conversión de tipos 
// y false se convierte en 0, por lo que 0 == 0 es true.
console.log(false == 0)

// El operador === compara *tipo y valor* sin conversión. 
// Un número (10) no es igual a una cadena ("10"), así que es false.
console.log(10 === "10")