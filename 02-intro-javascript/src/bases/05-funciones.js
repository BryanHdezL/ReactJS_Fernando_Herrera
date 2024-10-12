// Funciones

// Formato general en varios lenguajes de programacion
function saludar1(nombre) {
  return `Hola, ${nombre}`
}

// Formato recomendado en JavaScript
const saludar2 = function (nombre) {
  return `Hola, ${nombre}`
}

// Formato en funcion flecha
const saludar3 = (nombre) => `Hola, ${nombre}`;
const saludar4 = () => `Hola mundo`;
const getUser = () => ({ uid: 'ABC123', username: 'BryanHdezL', });

console.log(`Saludar1: ${saludar1('Bryan')}`);
console.log(`Saludar2: ${saludar2('Bryan')}`);
console.log(`Saludar3: ${saludar3('Bryan')}`);
console.log(`Saludar4: ${saludar4()}`);
console.log(getUser());



// Tarea

// 1. Transformar a funcion flecha
// 2. Tiene que retornar un objeto implicito
// 3. Pruebas

const getUsuarioActivo = (nombre) => ({ uid: 'ABC567', username: nombre });
const ususarioActivo = getUsuarioActivo('Fernando');
console.log(ususarioActivo);