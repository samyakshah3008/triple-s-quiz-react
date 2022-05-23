import React, { useState } from "react";
import { useQuiz } from "../../contexts/quizContext";

export default function ResultPage() {
  const { quizState, quizDispatch } = useQuiz();
  const [currScore, setCurrScore] = useState(0);
  const { selectedAnswers, activeQuiz, activeQuizAnswers } = quizState;
  const getClassName = (currOption, index) => {
    if (activeQuizAnswers[index] === currOption) return "correct";
    if (selectedAnswers[index] === currOption) return "wrong";
    return "";
  };

  return (
    <div>
      <nav>
        <h1 class="nav-header center margin-top">Results</h1>
        <div class="nav-header center margin-top-xl">Final Score: 20/50</div>
      </nav>

      <main>
        <div class="question-container margin-top-xl">
          <div class="question text-white  margin-top">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            aspernatur laudantium excepturi velit maiores quia non rem placeat
            ad esse?
          </div>

          {quiz.options.map((option) => (
            <button
              type="radio"
              className={`option ${getClassName(option, index)}`}
              name="option"
            >
              {option}
            </button>
          ))}

          <div class="footer margin-top-xl margin-bottom-xl">
            <button class="home-btn bold">Play more</button>
            <button class="twitter-btn bold">Twitter</button>
            <button class="github-btn bold">Github</button>
            <button class="linkedin-btn bold">Linkedin</button>
          </div>
        </div>
      </main>
    </div>
  );
}
