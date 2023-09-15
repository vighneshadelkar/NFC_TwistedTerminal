import React, { useState } from "react";
import Search from "../../components/Search/Search";
import data from "../../data/ayurveda";

export default function Pg2() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const filteredData = data.filter(
    (item) =>
      item.Name && item.Name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Search handleSearch={handleSearch} />
      <ul>
        {searchTerm.length === 0
          ? data.map((item) => <li key={item.id}>{item.Name}</li>)
          : filteredData.map((item) => <li key={item.id}>{item.Name}</li>)}
      </ul>
    </div>
  );
}
