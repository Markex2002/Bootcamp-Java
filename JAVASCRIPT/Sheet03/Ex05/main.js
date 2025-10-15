function groupBy(arr, keyOrFn) {
  return arr.reduce((acc, item) => {
    // obtener la clave: si es función, la llamamos; si es string/propiedad, la usamos
    const key = typeof keyOrFn === 'function' ? keyOrFn(item) : item[keyOrFn];
    
    // si no existe aún la clave en el acumulador, inicializamos un array
    if (!acc[key]) acc[key] = [];
    
    // añadimos el elemento al array correspondiente
    acc[key].push(item);
    
    return acc;
  }, {}); // inicializamos con objeto vacío
}


const frutas = ['peras', 'peral', 'manzana', 'madera'];
const grouped = groupBy(frutas, s => s[0]);
console.log(grouped);