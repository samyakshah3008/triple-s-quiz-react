import React from "react";
import { Link, useParams } from "react-router-dom";
import { useQuiz } from "../../contexts/quizContext";
import { getQuiz } from "../../services/dataService";
import QuestionPage from "../questionpage/QuestionPage";
import "./rulepage.css";

export default function RulePage() {
  const params = useParams();

  const { quizDispatch, quizState } = useQuiz();

  const onStartClickHandler = async () => {
    const response = await getQuiz(params.quizId || "");
    quizDispatch({ type: "SET_CATEGORY", payload: params.quizId || "" });
    quizDispatch({ type: "SET_ACTIVE_QUESTION", payload: 0 });
    quizDispatch({
      type: "SET_ACTIVE_QUIZ",
      payload: response?.questions,
    });
    quizDispatch({
      type: "SET_ACTIVE_QUIZ_ANSWERS",
      payload: response?.answers,
    });
    quizDispatch({
      type: "SET_CATEGORY_NAME",
      payload: response?.categoryName,
    });
    // console.log(response);
  };

  // console.log(quizState.activeQuestion);

  // onstart function
  // active quiz object(store it in context)
  // active question 0

  return (
    <div>
      {quizState.activeQuestion === -1 ? (
        <>
          <nav>
            <h1 className="nav-header center margin-top">Quiz Rules</h1>
          </nav>
          <main>
            <div className="center">
              <Link to="/">
                <button className="go-back-btn margin-top">Go Back</button>
              </Link>
            </div>

            <div className="rule-book-container margin-top">
              <div className="rule">This quiz is of level: Medium</div>
              <div className="rule">There are a total of 5 questions</div>
              <div className="rule">Each question is of 20 points.</div>
              <div className="rule">
                You cannot select multiple answers for one question.
              </div>
              <div className="rule">
                You cannot go back to the previous question
              </div>
              <button
                onClick={onStartClickHandler}
                className="start-quiz-btn margin-top"
              >
                Start Quiz
              </button>
            </div>
          </main>
        </>
      ) : (
        <QuestionPage />
      )}
    </div>
  );
}
