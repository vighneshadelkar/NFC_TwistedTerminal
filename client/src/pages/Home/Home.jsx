import React from 'react';
import Homeimg from "../../images/home-img.jpg";
import "./Home.css";

export default function Home() {
  return (
    <div className="home">
        <div className="homeWrapper">
            <section className="homeSection">
                <div className="homeText">
                    <h1 className='homeTitle'>Overall Wellness through ayurveda <br></br>is our muse</h1>
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
