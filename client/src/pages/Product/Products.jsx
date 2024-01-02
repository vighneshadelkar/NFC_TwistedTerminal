import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./Product.css";
import Chatbot from "../../components/Chatbot/Chatbot";

export default function Products() {

  return (
    <div className="proContainer">
      <Navbar />
      <div className="proWrapper">
        <Chatbot />
      </div>
    </div>
  );
}
