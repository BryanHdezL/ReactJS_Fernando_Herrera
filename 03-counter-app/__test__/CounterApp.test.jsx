import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

describe('Pruebas en <CounterApp />', () => {

    const initialValue = 10;

    test('Debe de hacer match con el snapshot', () => {
        const { container } = render(<CounterApp value={initialValue} />);
        expect(container).toMatchSnapshot();
    });

    test('Debe de mostrar el valor inicial de 100', () => {
        render(<CounterApp value={100} />);
        expect(screen.getByText(100)).toBeTruthy();
    });

    test('Debe de incrementar el contador con el boton +1', () => {
        render(<CounterApp value={initialValue} />);
        fireEvent.click(screen.getByText('+1'))
        fireEvent.click(screen.getByText('+1'))
        expect(screen.getByText('12')).toBeTruthy();
    });

    test('Debe de decrementar el contador con el boton -1', () => {
        render(<CounterApp value={initialValue} />);
        fireEvent.click(screen.getByText('-1'))
        fireEvent.click(screen.getByText('-1'))
        expect(screen.getByText('8')).toBeTruthy();
    });
    
    test('Debe de resetear el contador a 0 con el boton Reset', () => {
        render(<CounterApp value={initialValue} />);
        fireEvent.click(screen.getByText('Reset'))
        expect(screen.getByText('0')).toBeTruthy();
    });
});
