import React from 'react';

const Form = (
    {
        handleBtnSubmit,
        handleInputNameChange,
        handleInputNumberChange,
        placeholderNameValue,
    }
) => {
    return (
        <form onSubmit={handleBtnSubmit} name='phoneBookForm'>
            <label for='inputName'>Name: </label>
            <input
                id='inputName'
                name='inputName'
                value={placeholderNameValue}
                onChange={handleInputNameChange}
            />
            <br />
            <label for='inputNumber'>Number: </label>
            <input
                id='inputNumber'
                name='inputNumber'
                onChange={handleInputNumberChange}
                type='number'
            />
            <br />
            <button type="submit">Add Contact</button>
        </form>
    )
}

export default Form