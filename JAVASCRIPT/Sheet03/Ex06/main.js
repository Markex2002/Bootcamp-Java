const text = 'hola hola adios HOLA';
const palabras = text.toLowerCase().split(/\s+/);

// contar frecuencias usando Map
const frecuencias = new Map();

for (const word of palabras) {
  frecuencias.set(word, (frecuencias.get(word) || 0) + 1);
}

console.log('Map con frecuencias:', frecuencias);


// convertir a array y ordenar por frecuencia descendente
const ordenado = Array.from(frecuencias.entries())
  .sort((a, b) => b[1] - a[1]);

console.log('Array ordenado por frecuencia descendente:', ordenado);