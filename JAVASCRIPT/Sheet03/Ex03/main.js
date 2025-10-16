const data = [1, [2, 3], [[4], 5]];
console.log(data)

function flatAll(arr){
    let result = arr;
    // mientras haya algún elemento que sea array, seguimos aplanando

    while (result.some(Array.isArray)) {
    // Si x ya es un array, flatMap reparte sus elementos dentro del resultado.
    // Si x no es un array, [x] es un array de un solo elemento — flatMap también lo reparte.
    result = result.flatMap(x => Array.isArray(x) ? x : [x]);
  }

  return result;
}

console.log(flatAll(data));