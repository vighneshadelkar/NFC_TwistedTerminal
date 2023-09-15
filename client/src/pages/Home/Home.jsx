import React from 'react';
import Homeimg from "../../images/home-img.jpg"

export default function Home() {
  return (
    <div className="home">
        <div className="homeWrapper">
            <section className="home1">
                <div className="homeText">
                    <h1>Overall Wellness through ayurveda is our muse</h1>
                    <button className="explore">Explore More</button>
                </div>
                <div className="imgDiv">
                    <img src={Homeimg} alt="home img"  />
                </div>
            </section>
        </div>
    </div>
  )
}
