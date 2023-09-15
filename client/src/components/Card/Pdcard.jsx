import React from "react";
import "./Pdcard.css";

export default function Pdcard() {
  const svgStyle = {
    maskType: "luminance",
  };
  return (
    <div className="card1Container">
      <div className="card1Wrapper">
        <div class="card">
            <div className="imgDiv"></div>
            <div className="text">
                <h2 className="medName">MEDS</h2>
                <p className="available">yes</p>
            </div>
        </div>
      </div>
    </div>
  );
}
