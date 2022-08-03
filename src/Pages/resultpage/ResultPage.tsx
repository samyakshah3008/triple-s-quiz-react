import  { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useQuiz } from "../../contexts/quizContext";
import "./resultpage.css";

export default function ResultPage() {
  const { quizState, quizDispatch } = useQuiz();
  const [currScore, setCurrScore] = useState(0);
  const { selectedAnswers, activeQuiz, activeQuizAnswers } = quizState;
  const getclassName = (currOption: string, index: number) => {
    if (activeQuizAnswers[index] === currOption) return "correct";
    if (selectedAnswers[index] === currOption) return "wrong";
    return "";
  };

  useEffect(() => {
    let innerCurrScore = 0;
    for (let i = 0; i < activeQuizAnswers.length; i++)
      if (activeQuizAnswers[i] === selectedAnswers[i]) innerCurrScore += 20;
    setCurrScore(innerCurrScore);
  }, []);

  return (
    <div>
      <nav>
        <h1 className="nav-header center margin-top">Results</h1>
        <div className="nav-header center margin-top-xl">
          Final Score: {currScore} /100
        </div>
        <hr style={{ marginTop: "30px", width: "600px", margin: "auto" }} />
      </nav>

      <main>
        <div className="question-container margin-top-xl">
          {activeQuiz.map((quiz, index) => (
            <>
              <div className="question text-white margin-top">
                {quiz.Statement}
              </div>
              <div className="question-options-container margin-top">
                {quiz.options.map((option) => (
                  <button
                    className={`options ${getclassName(option, index)}`}
                    name="option"
                    key={option}
                  >
                    {option}
                  </button>
                ))}
              </div>
              <hr style={{ marginTop: "30px" }} />
            </>
          ))}

          <div className="footer margin-top-xl margin-bottom-xl">
            <NavLink to="/">
              <button onClick={() => quizDispatch({type: "RESET_ANSWERS"})} className="home-btn bold">Play more</button>
            </NavLink>
            <button className="twitter-btn bold">Twitter</button>
            <button className="github-btn bold">Github</button>
            <button className="linkedin-btn bold">Linkedin</button>
          </div>
        </div>
      </main>
    </div>
  );
}
