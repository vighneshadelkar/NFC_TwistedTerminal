import React from "react";
import "./Rightbar.css";
import Homeimg from "../../images/home-img.jpg";
import item1 from "../../images/item1.jpg"
import item2 from "../../images/item2.jpg"
import item3 from "../../images/item3.jpg"
import item4 from "../../images/item4.jpg"
import item5 from "../../images/item5.jpg"
import item6 from "../../images/item6.jpg"
import item7 from "../../images/item7.jpg"
import item8 from "../../images/item8.jpg"

const Rightbar = ({ selectedItem }) => {
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
  console.log(selectedItem);
  const imagePath = selectedItem &&selectedItem.ImagePath ? selectedItem.ImagePath : null;
  return (
    <div className="rightbar">
      {selectedItem ? (
        <div className="card2">
          <img src={imageMap[imagePath]} alt="" className="rightbarImg" />
          <h2>Selected Item</h2>
          <div className="selectedItem">
            <h3>Name: {selectedItem.Name}</h3>
            <p>Ayurveda Med: {selectedItem.AyurvedicRemedy}</p>
            <h3>Medicinal Property:</h3>
            <ul>
              {Array.isArray(selectedItem?.PharmacologicalProperties) &&
                selectedItem.PharmacologicalProperties.map((symptom, index) => (
                  <li key={index}>{symptom}</li>
                ))}
            </ul>
            <h3>Symptoms:</h3>
            <ul>
              {Array.isArray(selectedItem?.Symptoms) &&
                selectedItem.Symptoms.map((symptom, index) => (
                  <li key={index}>{symptom}</li>
                ))}
            </ul>
            <h3>Description:{selectedItem.IntegrationWithModernMedicine}</h3>
          </div>
        </div>
      ) : (
        <img src={Homeimg} alt="" className="rightbarImg" />
      )}
    </div>
  );
};

export default Rightbar;
