//Incrementa Inicio por el paso
function crearContador(inicio = 0, paso = 1) {
  let contador = inicio;
  
  return function() {
    contador += paso;
    return contador;
  };
}



function memoizar(fn) {
  const cache = {};

  return function (...args) {
    const clave = JSON.stringify(args);
    if (cache.hasOwnProperty(clave)) {
      console.log('Desde caché:', clave);
      return cache[clave];
    }
    console.log('Ejecutando fn:', clave);
    const resultado = fn(...args);
    cache[clave] = resultado;
    return resultado;
  };
}



//Pruebas
const inc = crearContador(5,2);
console.log(inc())
console.log(inc())

const contarLlamadas = () => {
    let n=0;
    const f = (x)=>{ n++; return x*x; };
    const llamadas = () => n;
    return { f, llamadas };
};

const { f, llamadas } = contarLlamadas();
const mf = memoizar(f);
mf(5); mf(5);

console.log(llamadas()); // 1