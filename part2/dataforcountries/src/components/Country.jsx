import React from "react";

const Country = ({
  name,
  capital,
  population,
  languages,
  flag,
  exactMatch,
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
    return <p>{name}</p>;
  }
};

export default Country;
