import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Pdcard from "../../components/Card/Pdcard";
import products from "../../data/products";
import Search from "../../components/Search/Search";
import Rightbar from "../../components/Rightbar/Rightbar"
import "./Product.css";

export default function Products() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);

  const handleSearch = (term) => {
    setSearchTerm(term);
    setSelectedItem(null);
  };
  const filteredData = products.filter(
    (item) =>
      item.Name && item.Name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCardClick = (item) => {
    setSelectedItem(item);
  };

  const renderCards = (items) => {
    return items.map((item, index) => (
      <Pdcard
        key={index}
        item={item}
        handleClick={() => handleCardClick(item)}
      />
    ));
  };
  return (
    <div className="proContainer">
      <Navbar />
      <div className="proWrapper">
        <Search handleSearch={handleSearch} />

        <div className="cardsDiv1">
          <div className="cardsDiv">
            {searchTerm.length === 0
              ? renderCards(products)
              : renderCards(filteredData)}
          </div>
          <Rightbar/>
        </div>
      </div>
    </div>
  );
}
