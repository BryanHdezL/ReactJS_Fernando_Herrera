// React
import PropTypes from 'prop-types'

const getGreetings = (nombre) => {
    return `Hola ${nombre}`;
}

export const FirstApp = ({ title, number }) => {
    return (
        <>
            <h1>{title}</h1>
            <h2>Tengo {number} años</h2>
        </>
    )
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
}

FirstApp.defaultProps = {
    title: 'NO HAY TITULO',
    number: 0,
}