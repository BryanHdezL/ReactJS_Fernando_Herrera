// Promesas

import { getHeroeById } from './bases/08-imp-exp';

// const promesa = new Promise((resolve, reject) => {

//   setTimeout(() => {
//     const { name } = getHeroeById(2)
//     resolve(name);
//     // reject('No se pudo encontrar el heroe');
//   }, 2000);

// });

// promesa
//   .then((heroe) => {
//     console.log(`Heroe: ${heroe}`);
//   })
//   .catch(err => console.log(err));

const getHeroeByIdAsync = (id) => {
  return new Promise((resolve, reject) => {

    setTimeout(() => {
      const heroe = getHeroeById(id)
      if (heroe)
        resolve(heroe)
      reject('No se pudo encontrar el heroe');
    }, 2000);

  });
}

getHeroeByIdAsync(1)
  .then(console.log)
  .catch(console.warn)