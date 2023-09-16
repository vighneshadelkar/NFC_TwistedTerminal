import React from "react";
import Person1 from "../../images/person1.jpg";
import Person2 from "../../images/person2.jpg";
import Person3 from "../../images/person3.jpg";
import Arrow from "../../images/arrow.png";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Blogcard from "../../components/Card/Blogcard";
import cc1 from "../../images/cc1.avif";
import cc2 from "../../images/cc2.avif";
import cc3 from "../../images/cc3.avif";


export default function Home() {
  return (
    <div className="home">
      <Navbar />
      <div className="homeWrapper">
        <section className="homeSection1">
          <div className="homeText">
            <h1 className="homeTitle">
              Unlocking Ancient Wisdom, Nurturing Modern Wellness: Your Ayurvedic Journey Begins Here!
            </h1>
            {/* <button className="explore">Explore More</button> */}
          </div>
          <div className="imgDiv">
            {/* <img src={Img1} alt="home img" className="homeimg"/> */}
          </div>
        </section>
        <div className="imgDiv">
          <img src={Arrow} alt="" />
        </div>
        <section className="homeSection2" data-aos="zoom-in">
          <div className="wrapper">
            <div className="cdWrapper">
              <h1 className="homeTitle">
                It's Time to Heal. <br></br>Wellness for Every Body.
              </h1>
              <div className="cdWrapper2">
                <div className="cd">
                  <div className="log">
                    <img className="logi" src={cc1} alt="" />
                  </div>
                  <div>

                    <h2>The Three Doshas</h2>
                    <p>
                      At the heart of Ayurveda lies the concept of the three
                      doshas—Vata, Pitta, and Kapha. These fundamental energies,
                      derived from the five elements (earth, water, fire, air, and
                      ether), govern our physical and mental characteristics.
                    </p>
                  </div>
                </div>
                <div className="cd">
                  <div className="log">
                    <img className="logg" src={cc2} alt="" />
                  </div>
                  <div>

                    <h2>Ayurvedic Lifestyle</h2>
                    <p>
                      Ayurveda places great emphasis on dinacharya, or daily
                      routines, as a cornerstone of good health. These routines
                      are designed to align with the natural rhythms of the day
                      and night, helping to maintain balance and prevent
                      imbalances that can lead to illness.
                    </p>
                  </div>
                </div>
                <div className="cd">
                  <div className="log">
                    <img className="logg" src={cc3} alt="" />
                  </div>
                  <div>
                    <h2>Ayurvedic Diet and Nutrition</h2>

                    <p>
                      In Ayurveda, food is considered medicine, and a balanced
                      diet tailored to your dosha composition is crucial for
                      maintaining health and vitality. This section delves into
                      the principles of Ayurvedia, offering guidance on
                      selecting foods that align with your dosha.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="homeSection3">
          <div className="cdWrapper">
            <h1 className="homeTitle">Blogs</h1>
            <div className="cdWrapper2">
              <Blogcard image={Person2} name={"Priya"} />
              <Blogcard image={Person1} name={"Vighnesh"} />
              <Blogcard image={Person3} name={"Abuzaid"} />
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
