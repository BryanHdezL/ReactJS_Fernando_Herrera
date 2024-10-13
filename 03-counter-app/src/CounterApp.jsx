import PropTypes from 'prop-types'
import { useState } from 'react';

export const CounterApp = ({ value }) => {

    const [counter, setCounter] = useState(0)

    const handleAdd = () => setCounter(counter + 1)
    const handleSubstract = () => setCounter(counter - 1)
    const handleReset = () => setCounter(0)


    return (
        <>
            <h1>CounterApp</h1>
            <h2 aria-label="counter">{counter}</h2>
            <button aria-label="btn-add" onClick={handleAdd}>+1</button>
            <button aria-label="btn-reset" onClick={handleReset}>Reset</button>
            <button aria-label="btn-substract" onClick={handleSubstract}>-1</button>
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}