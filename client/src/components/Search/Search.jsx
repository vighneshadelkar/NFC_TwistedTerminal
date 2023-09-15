import React from 'react';
import "./Search.css"

const Search= ({ handleSearch }) => {
  return (
    <div className="sear">
      <input
        type="text"
        placeholder="Disease..."
        onChange={(e) => handleSearch(e.target.value)}
        className='search'
      />
    </div>
  );
};

export default Search;
