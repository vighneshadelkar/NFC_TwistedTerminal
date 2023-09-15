import React from "react";
import Homeimg from "../../images/home-img.jpg";
import Img1 from "../../images/login-img.jpg"
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

export default function Home() {
  return (
    <div className="home">
      <Navbar />
      <div className="homeWrapper">
        <section className="homeSection1">
          <div className="homeText">
            <h1 className="homeTitle">
              Overall Wellness through ayurveda <br></br>is our muse
            </h1>
            <button className="explore">Explore More</button>
          </div>
          <div className="imgDiv">
            {/* <img src={Img1} alt="home img" className="homeimg"/> */}
          </div>
        </section>
        <section className="homeSection2" data-aos="zoom-in">
          <div className="wrapper">
            <div className="cdWrapper">
              <h1 className="homeTitle">
                It's Time to Heal. <br></br>Wellness for Every Body.
              </h1>
              <div className="cdWrapper2">
                <div className="cd">
                  <h2>The Three Doshas</h2>
                  <p>
                    At the heart of Ayurveda lies the concept of the three
                    doshas—Vata, Pitta, and Kapha. These fundamental energies,
                    derived from the five elements (earth, water, fire, air, and
                    ether), govern our physical and mental characteristics.
                  </p>
                </div>
                <div className="cd">
                  <h2>Ayurvedic Lifestyle</h2>
                  <p>
                    Ayurveda places great emphasis on dinacharya, or daily
                    routines, as a cornerstone of good health. These routines
                    are designed to align with the natural rhythms of the day
                    and night, helping to maintain balance and prevent
                    imbalances that can lead to illness.
                  </p>
                </div>
                <div className="cd">
                  <h2>Ayurvedic Diet and Nutrition</h2>
                  <p>
                    In Ayurveda, food is considered medicine, and a balanced
                    diet tailored to your dosha composition is crucial for
                    maintaining health and vitality. This section delves into
                    the principles of Ayurvedic nutrition, offering guidance on
                    selecting foods that align with your dosha.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
}
