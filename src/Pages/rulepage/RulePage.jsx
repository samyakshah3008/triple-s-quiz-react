import React from "react";
import { useParams } from "react-router-dom";
import "./rulepage.css";

export default function RulePage() {
  const params = useParams();
  // onstart function
  // active quiz object(store it in context)
  // active question 0

  return (
    <div>
      <nav>
        <h1 className="nav-header center margin-top">Quiz Rules</h1>
      </nav>

      <main>
        <div className="center">
          <button className="go-back-btn margin-top">Go Back</button>
        </div>

        <div className="rule-book-container margin-top">
          <div className="rule">This quiz is of level: Medium</div>
          <div className="rule">There are a total of 5 questions</div>
          <div className="rule">Each question is of 10 points.</div>
          <div className="rule">
            You get 30 seconds to answer each question.
          </div>
          <div className="rule">
            Score 70% or above to unlock the next level
          </div>
          <button className="start-quiz-btn margin-top">Start Quiz</button>
        </div>
      </main>
    </div>
  );
}
