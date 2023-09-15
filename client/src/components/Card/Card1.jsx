import React from "react";
import "./Card1.css";

const Card1 = ({ item, handleClick, isSelected }) => {
  const cardClassName = `card ${isSelected ? "selected" : ""}`;

  return (
    <div className={cardClassName} onClick={handleClick}>
      <div className="cardWrapper">
        <h2 className="disName">Name: {item?.Name}</h2>
        <h2 className="disName">Ayurveda Med: {item?.AyurvedicRemedy}</h2>
        
      </div>
    </div>
  );
};

export default Card1;
