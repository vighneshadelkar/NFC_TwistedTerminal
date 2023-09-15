import React from "react";
import "./Card1.css";

export default function Card1({ item }) {
  return (
    <div className="card">
      <div className="cardWrapper">
        <h2 className="disName">{item.Name}</h2>
        <hr></hr>
        <h2 className="disName">Ayurveda Med: {item.AyurvedicRemedy}</h2>
        <h3>Symptoms:</h3>
        <ul>
          {Array.isArray(item.Symptoms) &&
            item.Symptoms.map((symptom, index) => <li key={index}>{symptom}</li>)}
        </ul>
        <p className="description"><h2>Description: </h2>{item.IntegrationWithModernMedicine}</p>
      </div>
    </div>
  );
}
