import React from 'react';

const Form = ({ handleBtnSubmit, handleInputNameChange, value }) => {
    return (
        <form onSubmit={handleBtnSubmit} name='phoneBookForm'>
            <label for='inputName'>Name: </label>
            <input id='inputName' name='inputName' value={value} onChange={handleInputNameChange}>
            </input>
            <button type="submit">Add Name</button>
        </form>
    )
}

export default Form