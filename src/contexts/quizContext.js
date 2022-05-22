import { createContext, useContext, useReducer, useState } from "react";

const QuizContext = createContext({});

const QuizProvider = ({ children }) => {
  const initialQuizState = {
    category: "",
    categoryName: "",
    activeQuestion: -1,
    selectedAnswers: [],
    score: 0,
    activeQuiz: [],
    activeQuizAnswers: [],
  };

  const quizReducer = (state, action) => {
    switch (action.type) {
      case "SET_CATEGORY":
        return {
          ...state,
          category: action.payload,
        };
      case "SET_CATEGORY_NAME":
        return {
          ...state,
          categoryName: action.payload,
        };
      case "SET_ANSWERS":
        return {
          ...state,
          selectedAnswers: [...state.selectedAnswers, action.payload],
        };
      case "SET_SCORE":
        return {
          ...state,
          score: action.payload,
        };
      case "SET_ACTIVE_QUESTION":
        return {
          ...state,
          activeQuestion: action.payload,
        };
      case "SET_ACTIVE_QUIZ":
        return {
          ...state,
          activeQuiz: action.payload,
        };
      case "SET_ACTIVE_QUIZ_ANSWERS":
        return {
          ...state,
          activeQuizAnswers: action.payload,
        };
      case "RESET_ANSWERS":
        return {
          ...state,
          selectedAnswers: [],
        };
      default:
        return { ...state };
    }
  };
  const [quizState, quizDispatch] = useReducer(quizReducer, initialQuizState);
  return (
    <QuizContext.Provider value={{ quizState, quizDispatch, initialQuizState }}>
      {children}
    </QuizContext.Provider>
  );
};

const useQuiz = () => useContext(QuizContext);

export { QuizProvider, useQuiz };
