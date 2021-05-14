import React from "react";

//Import child components
import Person from "./displayphonebook/Person";

const DisplayPhonebook = ({ persons, isFilter, searchString }) => {
  if (isFilter === true) {
    const filtered = persons.filter((person) => {
      if (person.name.toLowerCase().includes(searchString.toLowerCase()))
        return true;
      else return false;
    });
    return (
      <div>
        {filtered.map((person) => (
          <Person key={person.id} name={person.name} number={person.number} />
        ))}
      </div>
    );
  } else {
    return (
      <div>
        {persons.map((person) => (
          <Person key={person.id} name={person.name} number={person.number} />
        ))}
      </div>
    );
  }
};

export default DisplayPhonebook;
