import  { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useQuiz } from "../contexts/quizContext";
import "../Pages/questionpage/questionpage.css";

export default function Questions() {
  const { quizState, quizDispatch } = useQuiz();
  const { activeQuestion, activeQuiz } = quizState;
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const optionsArray = activeQuiz[activeQuestion]?.options;
  const navigate = useNavigate();

  useEffect(() => {
    if (activeQuestion > 4) {
      navigate("/results");
    }
  }, [activeQuestion])
  
  

  const onNextClickHandler = () => {
    quizDispatch({
      type: "SET_ACTIVE_QUESTION",
      payload: activeQuestion + 1,
    });
    quizDispatch({
      type: "SET_ANSWERS",
      payload: selectedAnswer,
    });
    setSelectedAnswer("");
    if (activeQuestion === 4) {
    }
  };

  const onQuitClickHandler = () => {
    quizDispatch({
      type: "SET_ACTIVE_QUESTION",
      payload: -1,
    });
    quizDispatch({
      type: "RESET_ANSWERS",
    });
  };

  return (
    <div>
      {activeQuestion <= 4 && (
        <>
          <nav>
            <h1 className="nav-header center margin-top">WorldCup Quiz</h1>
          </nav>

          <main>
            <div className="question-container margin-top-xl">
              <div className="question-container-header">
                <div className="question-number text-gray">
                  Question:
                  <span className="bold text-white">{activeQuestion + 1}</span>
                </div>
                <div className="score text-gray">
                  Score: <span className="bold text-white"> 0 </span>
                </div>
              </div>

              <div className="question text-white  margin-top-xl">
                {activeQuiz[activeQuestion]?.Statement}
              </div>

              <div className="question-options-container margin-top">
                {optionsArray.map((option, index) => (
                  <label
                    className={
                      selectedAnswer === option
                        ? "option-label active-option"
                        : "option-label"
                    }
                    key={index}
                  >
                    <input
                      onClick={() => setSelectedAnswer(option)}
                      className="option"
                      type="radio"
                      name="option"
                    />

                    {option}
                  </label>
                ))}
              </div>

              <div className="footer margin-top-xl">
                <Link to="/">
                  <button onClick={onQuitClickHandler} className="quit-btn">
                    Quit Game
                  </button>
                </Link>

                <button onClick={onNextClickHandler} className="next-btn">
                  {activeQuestion === 4 ? "Submit" : `Next >>`}
                </button>
              </div>
            </div>
          </main>
        </>
      )}
    </div>
  );
}
