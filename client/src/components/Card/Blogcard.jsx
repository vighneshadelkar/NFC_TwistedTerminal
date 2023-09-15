import React from "react";
import "./Blogcard.css";

export default function Blogcard(props) {
  return (
    <>
      <div className="card4" data-aos="zoom-in">
        <div className="card-image">
          <img src={props.image} alt="" className="cardImg" />
        </div>
        {/* <div className="category"> Illustration </div> */}
        <div className="heading">
          {" "}
          Ayurveda, the ancient Indian system of medicine, offers a profound
          approach to holistic well-being. Rooted in a deep understanding
          ofnature's rhythms and the individual's constitution, Ayurveda seeks
          tobalance mind, body, and spirit. Through personalized
          dietaryrecommendations, herbal remedies, and lifestyle practices, it
          empowersindividuals to cultivate health and vitality.
          <div className="author">
            {" "}
            By <span className="name">{props.name}</span> 4 days ago
          </div>
        </div>
      </div>
    </>
  );
}
