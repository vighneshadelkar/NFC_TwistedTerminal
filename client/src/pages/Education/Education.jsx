import React from "react";
import "./Education.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

export default function Education() {
  return (
    <div className="eduContainer">
      <Navbar />
      <div className="eduWrapper">
        <div className="text">
          <h1>History</h1>
          <div className="textCards" data-aos="zoom-in-right">
            <h2>Vedic Period</h2>
            <p>
              The origins of Ayurveda can be traced back to the Vedic period,
              during which the earliest sacred texts of India, known as the
              Vedas, were composed. Within the Vedas, particularly in the
              Atharvaveda, one finds hymns and verses related to medicinal
              plants, diseases, and healing practices.
            </p>
          </div>
          <div className="textCards" data-aos="zoom-in-right">
            <h2>Compilation of Ayurvedic Texts</h2>
            <p>
              The foundational texts of Ayurveda, known as the "Charaka Samhita"
              and the "Sushruta Samhita," were written during this period.
              Charaka Samhita, attributed to the sage Charaka, focuses on
              internal medicine, while Sushruta Samhita, attributed to the sage
              Sushruta, primarily deals with surgery and surgical techniques.
            </p>
          </div>
          <div className="textCards" data-aos="zoom-in-right">
            <h2>Golden Age of Ayurveda</h2>
            <p>
              During this period, Ayurveda saw significant advancements and
              flourishing. Notable commentaries and interpretations of earlier
              texts were written. Universities and institutions dedicated to the
              study and practice of Ayurveda were established.
            </p>
          </div>
          <div className="textCards" data-aos="zoom-in-right">
            <h2>Revival and Modernization</h2>
            <p>
              Efforts were made to revive and modernize Ayurveda during the late
              19th and early 20th centuries. Scholars like Maharshi Dayanand
              Saraswati and Swami Dayananda Saraswati played a crucial role in
              promoting Ayurvedic education and practices.
            </p>
          </div>
          <div className="textCards" data-aos="zoom-in-right">
            <h2>Global Recognition and Integration</h2>
            <p>
              In recent decades, Ayurveda has gained international recognition,
              with practitioners and enthusiasts around the world. Ayurvedic
              principles, herbal remedies, and lifestyle practices have been
              integrated into holistic healthcare approaches.
            </p>
          </div>
        </div>
      </div>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}
