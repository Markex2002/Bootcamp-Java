const products = [
{ sku: 'A1', stock: 5, price: 10 },
{ sku: 'B2', stock: 0, price: 20 },
{ sku: 'C3', stock: 2, price: 15 },
];

// Encuentra el primer producto con stock > 0 .
console.log("Producto sin Stock: " + products.find(p => p.stock <= 0).sku);

// Verifica si algún producto es gratuito.
console.log("Hay algún producto gratuito?: " + products.some(p => p.price <= 0))

// Verifica si todos los precios son > 0.
console.log("Todos los precios mayores de 0?: " + products.every(p => p.price > 0))