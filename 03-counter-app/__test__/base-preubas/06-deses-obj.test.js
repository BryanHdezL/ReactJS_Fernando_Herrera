// test/base-pruebas/06-deses-obj.test.js
import { usContext } from "../../src/base-pruebas/06-deses-obj";

describe('Pruebas en 06-deses-obj', () => {

    test('usContext debe de retornar un objeto con los valores esperados', () => {
        const dataTest = {
            clave: 'BryanH',
            nombre: 'Bryan',
            edad: 22,
        };

        const result = usContext(dataTest);

        expect(result).toEqual({
            nombreClave: 'BryanH',
            anios: 22,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        });
    });

});
