const { render } = require("@testing-library/react");
const { FirstApp } = require("../src/FirstApp");
import React from 'react'

describe('Pruebas en <FirstApp />', () => {

    test('Debe de hacer match con el snapshot', () => {
        const title = 'Bryan Hernandez'
        const number = 22
        const { container } = render(<FirstApp title={title} number={number} />)
        expect(container).toMatchSnapshot();
    });

    test('Debe de mostrar el titulo en un H1', () => {
        const title = 'Bryan Hernandez'
        const number = 22
        const { container, getByText, getByTestId } = render(<FirstApp title={title} number={number} />)

        // const h1 = container.querySelector('h1')
        // expect(h1.innerHTML).toContain(title);

        expect(getByTestId('test-title').innerHTML).toContain(title);

    });

    test('Debe de mostrar el subtitulo enviado por props', () => {
        const title = 'Bryan Hernandez';
        const number = 22;
        const { getByText } = render(<FirstApp title={title} number={number} />);

        expect(getByText((content, element) => {
            return content.includes('Tengo') && content.includes(number.toString()) && content.includes('años');
        })).toBeTruthy();
    });

});
