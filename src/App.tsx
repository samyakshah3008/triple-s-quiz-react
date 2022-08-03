import { Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./Pages/landingpage/LandingPage";
import ResultPage from "./Pages/resultpage/ResultPage";
import RulePage from "./Pages/rulepage/RulePage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/quiz/:quizId" element={<RulePage />} />
        <Route path="/results" element={<ResultPage />} />
      </Routes>
    </div>
  );
}

export default App;
