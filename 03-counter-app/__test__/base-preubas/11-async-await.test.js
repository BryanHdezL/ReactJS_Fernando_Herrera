import { getImagen } from "../../src/base-pruebas/11-async-await";

describe('Pruebas en 11-async-await', () => {

    test('getImagen debe de retornar un URL de la imagen', async () => {

        const url = await getImagen();
        
        expect(typeof url).toBe('string');
    });

    // test('getImagen debe de retornar un mensaje de error si no se tiene API_Key', async () => {

    //     const resp = await getImagen();
        
    //     expect(resp).toBe('No se encontro una URL');
    // });

});