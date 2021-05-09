import React, { useState } from 'react'

//Import child components
import Form from "./components/Form"
import DisplayPhonebook from "./components/DisplayPhonebook"
import Searchfield from "./components/Searchfield"

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', id: 0, number: '040-123456' },
    { name: 'Ada Lovelace', id: 1, number: '39-44-5323523' },
    { name: 'Dan Abramov', id: 2, number: '12-43-234345' },
    { name: 'Mary Poppendieck', id: 3, number: '39-23-6423122' }
  ])
  const [searchString, setNewSearchString] = useState('Enter search string')
  const [isFilter, setIsFilter] = useState(false)
  const [newName, setNewName] = useState('Enter new name')
  const [newNumber, setNewNumber] = useState(0)

  //Handle searchFilter
  const filterPersons = (event) => {
    //Check if searchString is empty or default value
    if (searchString === '' || searchString === 'Enter search string') {
      event.preventDefault()
      alert("Input must not be empty or default value")
    } else {
      event.preventDefault()
      setIsFilter(true)
    }
  }

  const searchInputChange = (event) => {
    setNewSearchString(event.target.value);
  }

  //Resets filter
  const resetFilter = () => {
    setIsFilter(false)
    setNewSearchString('')
  }

  //Handle addingName
  const addContact = (event) => {

    if (newName === '' || newName === 'Enter new name' || newNumber === '') {
      event.preventDefault()
      alert("Input must not be empty or default value")
    }
    else if (persons.some(person => person.name === newName)) {
      event.preventDefault()
      alert(`${newName} is already added to phonebook`)
    }
    else {
      event.preventDefault()
      const newPersonObj = {
        name: newName,
        number: newNumber,
        id: persons.length + 1
      }
      setPersons(persons.concat(newPersonObj))
      setNewName('')
      setNewNumber(0)
    }
  }

  const inputNameChange = (event) => {
    setNewName(event.target.value)
  }

  const inputNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

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
      <h2>Numbers</h2>
      <DisplayPhonebook
        persons={persons}
        searchString={searchString}
        isFilter={isFilter}
      />
    </div>
  )
}

export default App
