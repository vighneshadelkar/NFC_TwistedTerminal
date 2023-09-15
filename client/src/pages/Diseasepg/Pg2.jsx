import React, { useState } from "react";
import Search from "../../components/Search/Search";
import data from "../../data/ayurveda";
import Card1 from "../../components/Card/Card1";
import "./Pg2.css";
import Rightbar from "../../components/Rightbar/Rightbar";
import Navbar from "../../components/Navbar/Navbar";
import item1 from "../../images/item1.jpg"
import item2 from "../../images/item2.jpg"
import item3 from "../../images/item3.jpg"
import item4 from "../../images/item4.jpg"
import item5 from "../../images/item5.jpg"
import item6 from "../../images/item6.jpg"
import item7 from "../../images/item7.jpg"
import item8 from "../../images/item8.jpg"
export default function Pg2() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);

  const handleSearch = (term) => {
    setSearchTerm(term);
    setSelectedItem(null);
  };

  const handleCardClick = (item) => {
    setSelectedItem(item);
  };

  const filteredData = data.filter(
    (item) =>
      item.Name && item.Name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const renderCards = (items) => {
    return items.map((item, index) => (
      <Card1
        key={index}
        item={item}
        handleClick={() => handleCardClick(item)}
      />
    ));
  };

  return (
    <div className="pg2">
      <Navbar/>
      <div className="pg2div">
        <Search handleSearch={handleSearch} />
        <div className="pg2Wrapper">
          <div className="cardsDiv">
            {searchTerm.length === 0
              ? renderCards(data)
              : renderCards(filteredData)}
            
          </div>
          <Rightbar selectedItem={selectedItem} />
        </div>
      </div>
    </div>
  );
}
