numeros = [1,6,3,9,5,0]

//Usamos toSorted() para no cambiar el array original
function stableNumericSort(arr){
    return arr.toSorted();
}

numerosOrdenados = stableNumericSort(numeros);

//Pruebas
console.log(numeros);
console.log(numerosOrdenados)