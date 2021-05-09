import React from "react"

const Searchfield = (
    { placeHolderSearchFieldValue,
        handleBtnSubmit,
        handleSearchInputChange,
        handleFilterReset,
    }) => {
    return (
        <form onSubmit={handleBtnSubmit}>
            <label for='searchField'>Filter show with: </label>
            <input
                name='searchField'
                id='searchField'
                value={placeHolderSearchFieldValue}
                onChange={handleSearchInputChange}
            >
            </input>
            <br />
            <button type='submit'>Filter</button>
            <button type='button' onClick={handleFilterReset}>Reset Filter</button>
        </form>
    )
}

export default Searchfield