//Orden superior
function procesar(lista, transformador) {
    //Usamos map para generar un nuevo array sin modificar el original
    return lista.map((valor, indice) => transformador(valor, indice));
}

//Pasamos los valores a mayusculas
function aMayusculas(v) {
    return v.toUpperCase();
}
//Devolvemos un String con el valor y el indice
function etiquetaIndice(v, i) {
    return `#${i}:${v}`;
}



const base = ['a','b'];
const t1 = procesar(base, v=>v.toUpperCase());
console.log(t1.join(',')); // A,B
console.log(base.join(',')); // a,b (inmutable)