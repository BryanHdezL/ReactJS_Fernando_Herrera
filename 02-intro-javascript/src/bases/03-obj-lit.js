// Objetos literales

const persona = {
  nombre: 'Bryan',
  apellido: 'Hernandez',
  edad: 22,
  direccion: {
    ciudad: 'New York',
    xip: 55321321,
    lat: 14.3232,
    lng: 34.9233321,
  }
}

console.log({ persona });
// console.table(persona);

// Clonando objetos
const persona2 = { ...persona }
persona2.nombre = 'Peter';
persona2.apellido = 'Lopez';

console.log({ persona2 });