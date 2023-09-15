import React from "react";
import "./Card1.css";
import item1 from "../../images/item1.jpg"
import item2 from "../../images/item2.jpg"
import item3 from "../../images/item3.jpg"
import item4 from "../../images/item4.jpg"
import item5 from "../../images/item5.jpg"
import item6 from "../../images/item6.jpg"
import item7 from "../../images/item7.jpg"
import item8 from "../../images/item8.jpg"


const Card1 = ({ item, handleClick, isSelected }) => {
  const imageMap = {
    item1,
    item2,
    item3,
    item4,
    item5,
    item6,
    item7,
    item8
  };

  console.log(item.ImagePath)
  const cardClassName = `cardContainer ${isSelected ? "selected" : ""}`;
  const imagePath = item && item.ImagePath ? item.ImagePath : null;

  return (
    <div className={cardClassName} onClick={handleClick} >
      <div className="cardWrapper" data-aos="zoom-in">
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
        {imagePath && <img src={imageMap[imagePath]} alt={item?.Name} />}
      </div>
    </div>
  );
};

export default Card1;
