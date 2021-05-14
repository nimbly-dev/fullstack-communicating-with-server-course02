import React from "react";

const Country = ({
  name,
  capital,
  population,
  languages,
  flag,
  exactMatch,
  onClickShow,
}) => {
  if (exactMatch === true) {
    return (
      <div>
        <h3>{name}</h3>
        <p>Capital: {capital}</p>
        <p>Population: {population}</p>
        <h5>Languages: </h5>
        <ul>
          {languages.map((language) => (
            <li key={language.iso639_1}>{language.name}</li>
          ))}
        </ul>
        <img src={flag} alt="empty"></img>
      </div>
    );
  } else {
    return (
      //If specific button is clicked its value will be set as the filterValue
      <div>
        {name} &nbsp;&nbsp;
        <button onClick={onClickShow} value={name}>
          Show
        </button>
        <br />
        <br />
      </div>
    );
  }
};

export default Country;
