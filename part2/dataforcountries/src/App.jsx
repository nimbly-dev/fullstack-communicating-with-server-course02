import React, { useState, useEffect } from "react";

import axios from "axios";
//Import child components
import Searchform from "./components/Searchform.jsx";
import DisplayCountry from "./components/DisplayCountry.jsx";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);
  const [filterValue, setFilterValue] = useState("Enter a country");

  //Gets the countries from the REST Countries
  const hook = () => {
    axios.get("https://restcountries.eu/rest/v2/all").then((response) => {
      setCountries(response.data);
    });
  };

  useEffect(hook, []);

  //Methods
  const searchInputChange = (event) => {
    //If input is default value or empty
    if (event.target.value === "Enter a country" || event.target.value === "") {
      setIsFiltered(false);
      setFilterValue("");
    } else {
      setIsFiltered(true);
      setFilterValue(event.target.value);
    }
  };

  const onClickShow = (event) => {
    setFilterValue(event.target.value);
  };

  return (
    <main>
      <h3>REST All Country API</h3>
      <Searchform
        handleChangeSearchValue={searchInputChange}
        currentFilterValue={filterValue}
      />
      <br />
      <DisplayCountry
        countries={countries}
        isFiltered={isFiltered}
        filterValue={filterValue}
        onClickShow={onClickShow}
      />
    </main>
  );
};

export default App;
