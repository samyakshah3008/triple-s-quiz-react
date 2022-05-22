import { Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./Pages/landingpage/LandingPage";
import RulePage from "./Pages/rulepage/RulePage";

function App() {
  return (
    <div classNameName="App">
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/quiz/:quizId" element={<RulePage />} />
      </Routes>
    </div>
  );
}

export default App;
