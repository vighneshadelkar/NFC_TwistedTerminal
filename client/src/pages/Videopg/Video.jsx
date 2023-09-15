import React from "react";
import "./Video.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

export default function Video() {
  return (
    <div className="videoContainer">
      <Navbar />
      <div className="videoWrapper">
        <h2>Videos</h2>
        <div className="videos">
          <div className="video">
            <iframe
              width="350"
              height="315"
              src="https://www.youtube.com/embed/V9ll-bsBRd8?si=kzpxL19qanzocRQw"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div className="video">
            <iframe
              width="350"
              height="315"
              src="https://www.youtube.com/embed/WfN1ZLNzP4A?si=VImLhNhH5NIbOZX5"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div className="video">
            <iframe
              width="350"
              height="315"
              src="https://www.youtube.com/embed/RYInVVx-Qeo?si=OkIQZc2RJDrIKL5g"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div className="video">
            <iframe
              width="350"
              height="315"
              src="https://www.youtube.com/embed/_sZkqnW71Jg?si=h4uoAIYvayM0jPjo"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}
