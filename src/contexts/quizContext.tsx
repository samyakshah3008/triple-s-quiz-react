import React, { createContext, useContext, useReducer } from "react";
import { QuizActionType, QuizContextTypes, QuizType } from "./quizContextType";

const QuizContext = createContext<QuizContextTypes>({} as QuizContextTypes);

const QuizProvider = ({ children }: {children: React.ReactNode}) => {
  const initialQuizState: QuizType = {
    category: "",
    categoryName: "",
    activeQuestion: -1,
    selectedAnswers: [],
    score: 0,
    activeQuiz: [],
    activeQuizAnswers: [],
  };

  const quizReducer = (state: QuizType, action: QuizActionType) : QuizType => {
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
          category: "",
    categoryName: "",
    activeQuestion: -1,
    selectedAnswers: [],
    score: 0,
    activeQuiz: [],
    activeQuizAnswers: [],
        };
      default:
        return { ...state };
    }
  }; 
  const [quizState, quizDispatch] = useReducer(quizReducer, initialQuizState);
  
  return (
    <QuizContext.Provider value={{quizState, quizDispatch, initialQuizState}}>
      {children}
    </QuizContext.Provider>
  )

  }

const useQuiz = () => useContext(QuizContext);

export { QuizProvider, useQuiz };
