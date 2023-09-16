import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Pdcard from "../../components/Card/Pdcard";
import products from "../../data/products";
import Search from "../../components/Search/Search";
import "./Product.css";
import Chatbot from "../../components/Chatbot/Chatbot";

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
        <Chatbot />
      </div>
    </div>
  );
}
