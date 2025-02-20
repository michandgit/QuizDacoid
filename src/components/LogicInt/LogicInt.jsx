import React, { useState, useEffect } from "react";
import { integerType } from "../../questions";
import Box from "../Box/Box";
import ScoreBoard from "../ScoreBoard/ScoreBoard";

const LogicInt = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [showScoreBoard, setShowScoreBoard] = useState(false); 

  useEffect(() => {
    setQuestions(integerType);
  }, []);

  const moveToNextQuestion = () => {
    if (currentQuestionIdx < questions.length - 1) {
      setCurrentQuestionIdx(currentQuestionIdx + 1);
    } else {
      setShowScoreBoard(true); 
    }
  };

  const updateScore = () => {
    setScore((prevScore) => prevScore + 10);
  };

  return (
    <>
     

      {showScoreBoard ? ( 
        <ScoreBoard score={score} total={questions.length * 10} End={true} />
      ) : (
        questions.length > 0 && (
          <Box
            score={score}
            key={currentQuestionIdx}
            ques={questions[currentQuestionIdx].question}
            correct={questions[currentQuestionIdx].correct}
            moveToNextQuestion={moveToNextQuestion}
            updateScore={updateScore}
          />
        )
      )}
    </>
  );
};

export default LogicInt;
