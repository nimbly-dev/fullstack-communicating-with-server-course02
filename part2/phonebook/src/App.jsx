import React, { useState } from 'react'

//Import child components
import Form from "./components/Form"
import Person from "./components/Person"

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', id: 1 }
  ])
  const [newName, setNewName] = useState('Enter new name')


  //Handle addingName
  const addName = (event) => {


    if (newName === '' || newName === 'Enter new name') {
      alert("Input must not be empty or default value")
    }
    else if (persons.some(person => person.name === newName)) {
      alert(newName + " is already existing")
    }
    else {
      event.preventDefault()
      const newPersonObj = {
        name: newName,
        id: persons.length + 1
      }
      setPersons(persons.concat(newPersonObj))
      setNewName('')
    }

  }

  const inputNameChange = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Form value={newName} handleBtnSubmit={addName} handleInputNameChange={inputNameChange} />
      <h2>Numbers</h2>
      {persons.map(person => (
        <Person key={person.id} name={person.name} />
      ))}
    </div>
  )
}

export default App
