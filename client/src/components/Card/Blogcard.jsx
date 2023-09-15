import React from "react";
import Person1 from "../../images/person1.jpg";
import Person2 from "../../images/person2.jpg";
import Person3 from "../../images/person3.jpg";
import "./Blogcard.css";

export default function Blogcard(props) {
  return (
    // <>
      <div className="card4" data-aos="zoom-in">
        <div className="card-image">
            <img src={props.image} alt="" className="cardImg" />
        </div>
        {/* <div className="category"> Illustration </div> */}
        <div className="heading">
          {" "}
          "Ayurveda, the ancient Indian system of medicine, offers a profound
          approach to holistic well-being. Rooted in a deep understanding of
          nature's rhythms and the individual's constitution, Ayurveda seeks to
          balance mind, body, and spirit. Through personalized dietary
          recommendations, herbal remedies, and lifestyle practices, it empowers
          individuals to cultivate health and vitality."
          <div className="author">
            {" "}
            By <span className="name">Abi</span> 4 days ago
          </div>
        </div>
      </div>
    // </>
  );
}
