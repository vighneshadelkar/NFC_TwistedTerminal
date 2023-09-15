import React from "react";
import "./Pdcard.css";


export default function Pdcard({item}) {
  return (
    <div className="card1Container">
      <div className="card1Wrapper">
        <div class="card">
            <div className="imgDiv"></div>
            <div className="text">
                <h2 className="medName">{item?.ProductName}</h2>
                <p className="description">Description: {item?.Description}</p>
                <p className="available">Availability: {item?.Availability}</p>
            </div>
        </div>
      </div>
    </div>
  );
}
