// React
import PropTypes from 'prop-types'
import React from 'react';

const getGreetings = (nombre) => {
    return `Hola ${nombre}`;
}

export const FirstApp = ({ title = 'NO HAY TITULO', number = 0 }) => {
    return (
        <>
            <h1 data-testid="test-title">{title}</h1>
            <h2>Tengo {number} años</h2>
        </>
    )
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
}
