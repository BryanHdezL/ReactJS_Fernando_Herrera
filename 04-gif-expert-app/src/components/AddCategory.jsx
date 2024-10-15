import React, { useState } from 'react'

export const AddCategory = ({ onNewCategory }) => {

  const [inputValue, setInputValue] = useState('')

  const onInputChange = (event) => {
    setInputValue(event.target.value)
  }

  const onSubmit = (event) => {
    event.preventDefault()
    const newValue = inputValue.trim().toUpperCase()
    
    if (newValue <= 0) return
    
    onNewCategory(newValue)
    setInputValue('')
  }

  return (
    <form onSubmit={onSubmit}>

      <input
        type="text"
        placeholder='Type a gif name'
        value={inputValue}
        onChange={onInputChange}
        id="gifInput"
        name="gifInput" />

    </form>
  )
}
