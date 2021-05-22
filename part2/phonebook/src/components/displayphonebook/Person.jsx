import React from "react";

//Import helper modules
import phonebookService from "../../services/phonebook";

const Person = ({ id, name, number }) => {
  // Handle deleting name
  const deleteContact = (id) => {
    const askConfirmation = window.confirm("Do you really want to delete" + id);
    if (askConfirmation === true) {
      phonebookService.remove(id);
      window.location.reload(); //Needs alternative
    }
  };
  return (
    <div>
      <p key={id}>
        {name} | {number}
        <button onClick={() => deleteContact(id)}>Delete </button>
      </p>
    </div>
  );
};

export default Person;
