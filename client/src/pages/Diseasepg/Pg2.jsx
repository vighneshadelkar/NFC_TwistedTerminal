import React, { useState } from "react";
import Search from "../../components/Search/Search";
import data from "../../data/ayurveda";
import Card1 from "../../components/Card/Card1";
import "./Pg2.css"

export default function Pg2() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  // Filter the data based on the search term
  const filteredData = data.filter(
    (item) =>
      item.Name && item.Name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Define a function to render the list of Card1 components
  const renderCards = (items) => {
    return items.map((item) => <Card1 key={item.id} item={item} />);
  };

  return (
    <div className="pg2">
      <div className="pg2Wrapper">
        <Search handleSearch={handleSearch} />
        <ul>
          {searchTerm.length === 0
            ? renderCards(data)
            : renderCards(filteredData)}
        </ul>
      </div>
    </div>
  );
}
