describe('Prueas en DemoComponent', () => {

    test('Esta prueba no debe de fallar', () => {
        // 1. Incializacion
        const m1 = 'Hola Mundo'
        // 2. Estimulo
        const m2 = m1.trim()
        // 3. Observar el comportamiento...esperado
        expect(m1).toBe(m2);
    });

});
