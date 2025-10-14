//La primera vez que se llama a la variable x
//Este da undefined, ya que no se habia declarado aun,
//Curiosamente el programa no da ningun tipo de error.
//La segundavez ya si se muestra un valor, pues la variable ha sido declarada.

console.log(x);
var x = 5;
console.log(x);