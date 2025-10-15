//Etiquetar
const etiquetar = (texto = 'N/A', prefijo = `TS-${Date.now()}`) => `${prefijo}:${texto}`;

//Sumamos una lista de números
function sumatorio(base = 0, ...numeros){
  let total = base;
  numeros.forEach(num => {
    if (typeof(num) == "number") {
      total += num;
    }
  });

  return total;
}

//Devolver el máximo de una lista de números
function maximoDe(numeros){
  return Math.max(...numeros)
}


//Pruebas
console.log(sumatorio(10, 1, 2, '3', 4) === 17);
console.log(maximoDe([1,9,3]) === 9)
console.log(/^TS-\d+:N\/A$/.test(etiquetar()));