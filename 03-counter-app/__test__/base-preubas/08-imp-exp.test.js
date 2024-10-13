import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";

describe('Pruebas en 08-imp-exp', () => {

    test('getHeroesById debe de retornar un heroe por ID', () => {
        const id = 1
        const hero = getHeroeById(id)
        expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' })
    });

    test('getHeroesById debe de retornar undefined si no existre el ID', () => {
        const id = 100
        const hero = getHeroeById(id)
        expect(hero).toBe(undefined)
        expect(hero).toBeFalsy()
    });

    test('getHeroesByOwner debe de retornar un arreglo con los heroes de DC', () => {
        const heroesDC = [
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }]

        const heroes = getHeroesByOwner('DC')

        expect(heroes.length).toBe(3);
        expect(heroes).toStrictEqual(heroes);
    });

    test('getHeroesByOwner debe de retornar un arreglo con los heroes de Marvel', () => {
        const heroes = getHeroesByOwner('Marvel')
        expect(heroes.length).toBe(2);
    });

});