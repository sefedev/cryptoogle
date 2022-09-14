import React, { useState } from "react";

const Search = ({ onSearch }) => {

 const onChangeHandler = (e) => {
    onSearch(e.target.value)
 }

//  console.log(filteredItem)



  return (
    <>
      <div className="search-box">
        <input
          className="search-input"
          type="search"
          placeholder="Search CryptoAsset..."
          onChange={onChangeHandler}
        />
        <button className="btn">Search</button>
      </div>
    </>
  );
};

export default Search;
