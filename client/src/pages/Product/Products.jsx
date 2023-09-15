import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Pdcard from '../../components/Card/Pdcard';
import "./Product.css"

export default function Products() {
  return (
    <div className="proContainer">
        <Navbar/>
        <div className="proWrapper">
            <div className="cardsDiv">
                <Pdcard/>
            </div>
        </div>
    </div>
  )
}
