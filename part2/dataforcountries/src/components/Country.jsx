import React, { useEffect, useState } from "react";

//import third party
import axios from "axios";

const Country = ({
  name,
  capital,
  population,
  languages,
  flag,
  exactMatch,
  onClickShow,
}) => {
  const test = process.env.REACT_APP_API_KEY;
  const [weatherReading, setWeatherReading] = useState([]);

  //Gets the countries from the REST Countries

  useEffect(() => {
    axios
      .get(
        "http://api.weatherstack.com/current?access_key=" +
          test +
          "&query= " +
          capital
      )
      .then((response) => {
        setWeatherReading(response.data.current);
        console.log(response.data);
      });
  }, []);

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
        <div>
          <p>
            <h4>Temperature: {weatherReading.temperature}</h4>
            <img src={weatherReading.weather_icons}></img>
            <h4>
              Wind: {weatherReading.wind_speed} mph {weatherReading.wind_dir}
            </h4>
          </p>
        </div>
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
