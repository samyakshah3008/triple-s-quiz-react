import React from "react";
import { Link } from "react-router-dom";
// import image1 from "../Assets/ICC-Cricket-World-Cup-trophy.jpg";
// import image2 from "../Assets/ipl-theme.jpg";
// import image3 from "../Assets/rcb-logo.png";
import { useCategory } from "../contexts/categoryContext";

export default function Card() {
  const { categories } = useCategory();
  console.log(categories);
  return (
    <div>
      <div className="quiz-list-container margin-top-xl">
        {categories.map((category) => (
          <div className="card">
            <img
              src={category.img.src}
              alt={category.img.altText}
              className="card-img"
            />

            <div className="card-content">
              <div className="card-header margin-top center">
                {category.categoryName}
              </div>

              <div className="card-instruction margin-top text-gray center">
                {category.description}
              </div>

              <Link to={`/quiz/${category._id}`}>
                <button className="playnow-btn margin-top">Play now</button>
              </Link>
            </div>
          </div>
        ))}

        {/* <div className="card">
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
        </div> */}
      </div>
    </div>
  );
}
