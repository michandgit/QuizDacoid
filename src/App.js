import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Play from "./components/Play/Play";
import Logic from "./components/Logic/Logic";
import QuizTitle from "./components/QuizTitle/QuizTitle";
import LogicInt from "./components/LogicInt/LogicInt";

const AppContent = () => {
  const location = useLocation();

  useEffect(() => {
    const rootElement = document.getElementById("root");

    if (location.pathname === "/mcq" || location.pathname === "/intbased") {
      rootElement.classList.add("hide-bg");
    } else {
      rootElement.classList.remove("hide-bg");
    }
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<Play />} />
      <Route path="/mcq" element={<QuizTitle />} />
      <Route path="/intbased" element={<QuizTitle title="Integer Based Questions" />} />
      <Route path="/quiz" element={<Logic />} />
      <Route path="/int_quiz" element={<LogicInt />} />
    </Routes>
  );
};

const App = () => (
  <BrowserRouter>
    <AppContent />
  </BrowserRouter>
);

export default App;
