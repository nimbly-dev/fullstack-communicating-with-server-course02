import React from "react";

//import helper modules
import phonebook from "../services/phonebook";

const Form = ({
  handleBtnSubmit,
  handleInputNameChange,
  handleInputNumberChange,
  placeholderNameValue,
}) => {
  return (
    <div>
      <h3>Add a new number: </h3>
      <form onSubmit={handleBtnSubmit} name="phoneBookForm">
        <label for="inputName">Name: </label>
        <input
          id="inputName"
          name="inputName"
          value={placeholderNameValue}
          onChange={handleInputNameChange}
        />
        <br />
        <label for="inputNumber">Number: </label>
        <input
          id="inputNumber"
          name="inputNumber"
          onChange={handleInputNumberChange}
          type="number"
        />
        <br />
        <button type="submit">Add Contact</button>
      </form>
    </div>
  );
};

export default Form;
