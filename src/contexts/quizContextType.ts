export type QuestionAnswerObj = {
    statement: string;
    options: Array<string>;
};

export type QuizQuestionAndAnswers = Array<QuestionAnswerObj>


export type QuizType = {
    category: string,
    categoryName: string,
    activeQuestion: number,
    selectedAnswers: Array<string>,
    score: number,
    activeQuiz: QuizQuestionAndAnswers,
    activeQuizAnswers: Array<string>,
}

export type QuizActionType =
  | {
      type: "SET_CATEGORY";
      payload: string;
    }
  | {
      type: "SET_CATEGORY_NAME";
      payload: string;
    }
  | {
      type: "SET_ACTIVE_QUIZ";
      payload: QuizQuestionAndAnswers;
    }
  | {
      type: "SET_ANSWERS";
      payload: string;
    }
  | {
      type: "SET_SCORE";
      payload: number;
    }
  | {
      type: "SET_ACTIVE_QUESTION";
      payload: number;
    }
  | {
      type: "SET_ACTIVE_QUIZ_ANSWERS";
      payload: Array<string>;
    }
  | {
      type: "RESET_ANSWERS";
    };

export type QuizContextTypes = {
    quizState: QuizType;
    quizDispatch: (value: QuizActionType) => void;
    initialQuizState: QuizType;
}