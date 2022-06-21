import { Link } from "react-router-dom";
import { useCategory } from "../contexts/categoryContext";

export default function Card() {
  const { categories } = useCategory();
  return (
    <div>
      <div className="quiz-list-container margin-top-xl">
        {categories.map((category: any) => (
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
      </div>
    </div>
  );
}
