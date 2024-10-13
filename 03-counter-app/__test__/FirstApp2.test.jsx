const { render, screen } = require("@testing-library/react");
const { FirstApp } = require("../src/FirstApp");
import React from 'react'

describe('Pruebas en <FirstApp />', () => {

    const title = 'Bryan Hernandez'
    const number = 22

    test('Debe de hacer match con el snapshot', () => {
        const { container } = render(<FirstApp title={title} number={number} />)
        expect(container).toMatchSnapshot();
    });


    test('Debe de mostrar el titulo', () => {
        render(<FirstApp title={title} number={number} />)
        expect(screen.getByText(title)).toBeTruthy();
    });

    test('Debe de mostrar el titulo en un H1', () => {
        render(<FirstApp title={title} number={number} />)
        expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain(title);
    });

});
