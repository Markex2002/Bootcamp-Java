function saludar(ciudad){ 
    console.log(`Soy ${this.nombre} de ${ciudad}`); 
}

function invocarCon(ctx, fn, ...args) {
  return fn.apply(ctx, args);
}

const persona={nombre:'Lucía'};
saludar.call(persona, 'Madrid');
saludar.apply(persona, ['Sevilla']);

const saludarLuis = saludar.bind({nombre:'Luis'});
saludarLuis('Valencia');

invocarCon({nombre:'Ada'}, saludar, 'Zaragoza');