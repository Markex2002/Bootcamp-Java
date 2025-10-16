const user = { id: 7, profile: { email: 'x@y.com' } };
//const user = { id: 7, profile: { email: undefined } };


//Extraemos las variables
const { id, profile: { email: mail = '(sin email)' } = {} } = user;


console.log(id);
console.log(mail);