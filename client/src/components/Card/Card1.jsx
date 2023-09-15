import React from "react";
import "./Card1.css";

const Card1 = ({ item, handleClick, isSelected }) => {
  const cardClassName = `cardContainer ${isSelected ? "selected" : ""}`;

  return (
    <div className={cardClassName} onClick={handleClick}>
      <div className="cardWrapper">
        <div className="card">
          <h2 className="disName">Name: {item?.Name}</h2>
          <hr></hr>
          <h2 className="disName">Ayurveda Med:</h2>
          {Array.isArray(item?.AyurvedicRemedy) &&
            item.AyurvedicRemedy.map((symptom, index) => (
              <p key={index}>{symptom}</p>
            ))}
            <h3>Generic Med: {item?.IntegrationWithModernMedicine}</h3>
          <hr></hr>
        </div>
      </div>
    </div>
  );
};

export default Card1;
