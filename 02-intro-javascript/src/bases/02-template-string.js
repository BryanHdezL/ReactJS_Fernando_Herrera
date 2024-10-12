// Template string

const nombre = 'Bryan';
const apellido = 'Hernandez';

const nombreCompleto = `${nombre} ${apellido}`;

console.log(nombreCompleto);

function getSaludo(nombre) {
  return `Hola ${nombre}`;
}

console.log(`Este es un saludo: ${getSaludo(nombre)}`);