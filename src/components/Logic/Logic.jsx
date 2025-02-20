import React, { useState, useEffect } from "react";
import { mcq_questions } from "../../questions";
import Box from "../Box/Box";
import ScoreBoard from "../ScoreBoard/ScoreBoard";

const Logic = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [showScoreBoard, setShowScoreBoard] = useState(false); // ✅ State to show scoreboard

  useEffect(() => {
    setQuestions(mcq_questions);
  }, []);

  const moveToNextQuestion = () => {
    if (currentQuestionIdx < questions.length - 1) {
      setCurrentQuestionIdx(currentQuestionIdx + 1);
    } else {
      setShowScoreBoard(true); // ✅ Show scoreboard after last question
    }
  };

  const updateScore = () => {
    setScore((prevScore) => prevScore + 10);
  };

  return (
    <>
     

      {showScoreBoard ? ( 
        <ScoreBoard score={score} total={questions.length * 10} />
      ) : (
        questions.length > 0 && (
          <Box
            score={score}
            key={currentQuestionIdx}
            ques={questions[currentQuestionIdx].question}
            correct={questions[currentQuestionIdx].correct}
            options={questions[currentQuestionIdx].options}
            moveToNextQuestion={moveToNextQuestion}
            updateScore={updateScore}
          />
        )
      )}
    </>
  );
};

export default Logic;
