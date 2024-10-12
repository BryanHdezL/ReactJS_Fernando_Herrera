// Desestructuración de arreglos

// Arreglo
const personajes = ['Goku', 'Vegeta', 'Trunks'];
const [g, v, t] = personajes;
console.log(g, v, t);

const getArray = () => {
  return ['ABC', 123];
}

const [string, number] = getArray();
console.log(string, number);

// Tarea
// 1. El primer valor del arreglo se llamara nombre
// 1. El segundo valor del arreglo se llamara setNombre

const myUseState = (valor) => {
  return [valor, () => console.log('Hola Mundo')];
}

const [nombre, setNombre] = myUseState('Bryan');
console.log(nombre);
setNombre()
