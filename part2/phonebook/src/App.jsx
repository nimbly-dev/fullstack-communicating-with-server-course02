import React, { useState } from 'react'

//Import child components
import Form from "./components/Form"
import Person from "./components/Person"

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-1234567', id: 1 }
  ])
  const [newName, setNewName] = useState('Enter new name')
  const [newNumber, setNewNumber] = useState('Enter new number')


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
      <Form
        placeholderNameValue={newName}
        handleBtnSubmit={addContact}
        handleInputNameChange={inputNameChange}
        handleInputNumberChange={inputNumberChange}
      />
      <h2>Numbers</h2>
      {persons.map(person => (
        <Person key={person.id} name={person.name} number={person.number} />
      ))}
    </div>
  )
}

export default App
