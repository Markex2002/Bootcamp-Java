const usuario = { nombre: "Lucía", edad: 27, activo: true };

for (let propiedad in usuario) {
  console.log("Propiedad: " + propiedad + " → Valor: " + usuario[propiedad]);
}
