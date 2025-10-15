export const PI = 3.14159;

export function areaCirculo(r) {
  return PI * r * r;
}

export function media(...nums) {
  const validos = nums.filter(n => typeof n === 'number' && !isNaN(n));
  return validos.length ? validos.reduce((a, b) => a + b, 0) / validos.length : NaN;
}

export default function sumar(a, b) {
  return a + b;
}
