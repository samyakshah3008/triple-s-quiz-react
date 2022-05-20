import React from "react";
import image1 from "../Assets/ICC-Cricket-World-Cup-trophy.jpg";
import image2 from "../Assets/ipl-theme.jpg";
import image3 from "../Assets/rcb-logo.png";

export default function Card() {
  return (
    <div>
      <div className="quiz-list-container margin-top-xl">
        <div className="card">
          <img src={image1} alt="icc-worldcup-trophy" className="card-img" />

          <div className="card-content">
            <div className="card-header margin-top center">WorldCup Quiz</div>

            <div className="card-instruction margin-top text-gray center">
              Take this quiz to test yourself how well you know about WorldCup
            </div>

            <button className="playnow-btn margin-top">Play now</button>
          </div>
        </div>

        <div className="card">
          <img src={image2} alt="icc-worldcup-trophy" className="card-img" />
          <div className="card-content">
            <div className="card-header margin-top center">IPL Quiz</div>

            <div className="card-instruction margin-top text-gray center">
              Take this quiz to test yourself how well you know about IPL
            </div>

            <button className="playnow-btn margin-top">Play now</button>
          </div>
        </div>

        <div className="card">
          <img src={image3} alt="icc-worldcup-trophy" className="card-img" />
          <div className="card-content">
            <div className="card-header margin-top center">RCB Fan Quiz</div>

            <div className="card-instruction margin-top text-gray center">
              Take this quiz to test yourself how well you know about RCB
            </div>
            <button className="playnow-btn margin-top">Play now</button>
          </div>
        </div>
      </div>
    </div>
  );
}
