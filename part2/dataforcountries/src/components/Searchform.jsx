import React from "react";

const Searchform = ({ handleChangeSearchValue, currentFilterValue }) => {
  return (
    <div>
      <form>
        <label for="searchInput">Find Countries: </label>
        <input
          id="searchInput"
          name="searchInput"
          value={currentFilterValue}
          onChange={handleChangeSearchValue}
        ></input>
        <br />
      </form>
    </div>
  );
};

export default Searchform;
