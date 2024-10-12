// Desestructuración
// Asignación desestructurante

// Objeto
const persona = {
  nombre: 'Bryan',
  edad: 45,
  clave: 'Ironman',
}

// Cambia el nombre de la función a algo diferente
const getContext = ({ nombre, edad, clave }) => ({
  nombreClave: clave,
  anios: edad,
  latlng: {
    lat: 14.1232,
    lng: -12.3232,
  }
});

const { nombreClave, anios, latlng: { lat, lng } } = getContext(persona);
console.log(nombreClave, anios);
console.log(lat, lng);
