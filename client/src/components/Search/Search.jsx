import React from 'react';
import "./Search.css"

const Search= ({ handleSearch }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => handleSearch(e.target.value)}
        className='search'
      />
    </div>
  );
};

export default Search;
