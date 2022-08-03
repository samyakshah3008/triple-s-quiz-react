import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { CategoryProvider } from "./contexts/categoryContext";
import { QuizProvider } from "./contexts/quizContext";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CategoryProvider>
        <QuizProvider>
          <App />
        </QuizProvider>
      </CategoryProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
