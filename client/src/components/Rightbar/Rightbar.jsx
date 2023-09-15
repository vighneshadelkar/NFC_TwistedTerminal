import React from "react";
import "./Rightbar.css";

const Rightbar = ({ selectedItem }) => {
  console.log(selectedItem);
  return (
    <div className="rightbar">
      {selectedItem ? (
        <>
          <h2>Selected Item</h2>
          <div className="selectedItem">
            <h3>Name: {selectedItem.Name}</h3>
            <p>Ayurveda Med: {selectedItem.AyurvedicRemedy}</p>
            <h3>Symptoms:</h3>
            <ul>
              {Array.isArray(selectedItem?.Symptoms) &&
                selectedItem.Symptoms.map((symptom, index) => (
                  <li key={index}>{symptom}</li>
                ))}
            </ul>
            <h3>Description:{selectedItem.IntegrationWithModernMedicine}</h3>
          </div>
        </>
      ) : (
        <>Rightbar</>
      )}
    </div>
  );
};

export default Rightbar;
