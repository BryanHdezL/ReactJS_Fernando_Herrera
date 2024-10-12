// Variables y constantes

const nombre = 'Bryan'
const apellido = 'Hernandez'
let valorDado = 5
valorDado = 4

if (true) {
  // Diferente scope
  let valorDado = 6
  console.log(valorDado);
}

console.log(valorDado);