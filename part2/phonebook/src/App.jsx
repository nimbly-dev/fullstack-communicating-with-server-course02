import React, { useState, useEffect } from "react";

//Import helper modules
import phonebookService from "./services/phonebook";

//Import child components
import Form from "./components/Form";
import DisplayPhonebook from "./components/DisplayPhonebook";
import Searchfield from "./components/Searchfield";
import phonebook from "./services/phonebook";
import SuccesfulAdd from "./components/notification/SuccesfulAdd";

const App = () => {
  const [persons, setPersons] = useState([[]]);
  const [searchString, setNewSearchString] = useState("Enter search string");
  const [isFilter, setIsFilter] = useState(false);
  const [newName, setNewName] = useState("Enter new name");
  const [newNumber, setNewNumber] = useState(0);
  const [notificationMssg, setNewNotificationMssg] = useState("");

  const hook = () => {
    phonebookService.getAll().then((initialPersons) => {
      setPersons(initialPersons);
    });
  };

  useEffect(hook, []);

  //Handle searchFilter
  const filterPersons = (event) => {
    //Check if searchString is empty or default value
    if (searchString === "" || searchString === "Enter search string") {
      event.preventDefault();
      alert("Input must not be empty or default value");
    } else {
      event.preventDefault();
      setIsFilter(true);
    }
  };

  const searchInputChange = (event) => {
    setNewSearchString(event.target.value);
  };

  //Resets filter
  const resetFilter = () => {
    setIsFilter(false);
    setNewSearchString("");
  };

  //Handle addingName
  const addContact = (event) => {
    event.preventDefault();
    const newPersonObj = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    };
    if (newName === "" || newName === "Enter new name" || newNumber === "") {
      alert("Input must not be empty or default value");
    } else if (persons.some((person) => person.name === newName)) {
      //Name already exist
      const askConfirmation = window.confirm(
        `${newName} is already added to phonebook, replace the old number with a new one?`
      );
      if (askConfirmation === true) {
        const personWithSameName = persons.find(
          (person) => person.name === newName
          //Find the person object of the contact with the same name
        );
        phonebookService
          .update(personWithSameName.id, {
            ...personWithSameName,
            number: newNumber,
          })
          .then((updatedPerson) => {
            setPersons(
              persons.map((person) =>
                person.name === newName ? updatedPerson : personWithSameName
              )
            );
          })
          .catch((error) => {
            alert(
              `the name '${personWithSameName.name}' was already deleted from server`
            );
            setPersons(persons.filter((p) => p.id !== personWithSameName));
          });
      }
    } else {
      phonebook.create(newPersonObj).then((returnedPerson) => {
        setPersons(persons.concat(returnedPerson));
        setNewName("");
        setNewNumber(0);
      });
      setNewNotificationMssg("Added new Contact");
      console.log(notificationMssg);
    }
  };

  const inputNameChange = (event) => {
    setNewName(event.target.value);
  };

  const inputNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  //Done Adding Seperating the components
  return (
    <div>
      <h2>Phonebook</h2>
      <Searchfield
        placeHolderSearchFieldValue={searchString}
        handleBtnSubmit={filterPersons}
        handleSearchInputChange={searchInputChange}
        handleFilterReset={resetFilter}
      />
      <Form
        placeholderNameValue={newName}
        handleBtnSubmit={addContact}
        handleInputNameChange={inputNameChange}
        handleInputNumberChange={inputNumberChange}
      />
      <SuccesfulAdd message={notificationMssg} />
      <h2>Numbers</h2>
      <DisplayPhonebook
        persons={persons}
        searchString={searchString}
        isFilter={isFilter}
      />
    </div>
  );
};

export default App;
