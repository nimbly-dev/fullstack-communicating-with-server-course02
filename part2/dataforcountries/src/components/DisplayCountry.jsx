import React from "react";

//Import child components
import Country from "./Country.jsx";

const Searchresults = ({ countries, filterValue, isFiltered, onClickShow }) => {
  if (isFiltered === true) {
    //Filter results based on filter value
    const filtered = countries.filter((country) => {
      if (country.name.toLowerCase().includes(filterValue.toLowerCase()))
        return true;
      else return false;
    });
    /***/
    if (filtered.length > 10) {
      //If filtered array length is greater than 10
      return (
        <div>
          <p>Too many matches, specify another filter</p>
        </div>
      );
    } else if (filtered.length < 10) {
      //Found Exact match
      if (filtered.length === 1) {
        return (
          <div>
            <Country
              name={filtered[0].name}
              capital={filtered[0].capital}
              population={filtered[0].population}
              languages={filtered[0].languages}
              flag={filtered[0].flag}
              exactMatch={true}
            />
          </div>
        );
      } else {
        return (
          <div>
            <div>
              {filtered.map((country) => (
                <Country
                  name={country.name}
                  exactMatch={false}
                  filterValue={filterValue}
                  onClickShow={onClickShow}
                />
              ))}
            </div>
          </div>
        );
      }
    }
  }
  //Input is empty
  else {
    return (
      <div>
        <p>Try some keywords</p>
      </div>
    );
  }
};

export default Searchresults;
