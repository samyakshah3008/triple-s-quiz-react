import React, { useState } from "react";
import { useQuiz } from "../contexts/quizContext";
import "../Pages/questionpage/questionpage.css";

export default function Questions() {
  const { quizState, quizDispatch } = useQuiz();
  const { activeQuestion, activeQuiz } = quizState;
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const optionsArray = activeQuiz[activeQuestion]?.options;

  if (activeQuestion === 4) {
    navigate("/results");
  }

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
  //   console.log(activeQuestion);
  console.log(quizState);
  console.log(activeQuiz[activeQuestion]?.options);
  console.log(selectedAnswer);
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

                {/* {console.log(quizState.activeQuiz[0].statement)}  */}
              </div>

              <div className="question-options-container margin-top">
                {optionsArray.map((option, index) => (
                  <button
                    onClick={() => setSelectedAnswer(option)}
                    className="option"
                  >
                    {" "}
                    {option}{" "}
                  </button>
                ))}
                {/* <button className="option">Option A</button>
                <button className="option">Option B</button>
                <button className="option">Option C</button> */}
              </div>

              <div className="footer margin-top-xl">
                <button onClick={onQuitClickHandler} className="quit-btn">
                  Quit Game
                </button>

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
