import React, { useState, useEffect } from 'react';
import './Box.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

const Box = ({ moveToNextQuestion, ques, options, correct, updateScore ,score }) => {
  const [timeLeft, setTimeLeft] = useState(30);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [typedAnswer, setTypedAnswer] = useState("");
  const [isCorrect, setIsCorrect] = useState(null);

  useEffect(() => {
    if (timeLeft === 0) {
      moveToNextQuestion();
      return;
    }
    const interval = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timeLeft, moveToNextQuestion]);

  const handleAnswer = (selectedOption) => {
    setSelectedAnswer(selectedOption);
    const correctAnswer = selectedOption === correct;
    setIsCorrect(correctAnswer);
    if (correctAnswer) updateScore();
    setTimeout(moveToNextQuestion, 1000);
  };

  const handleTypedAnswer = () => {
    const correctAnswer = typedAnswer.trim() === correct.toString();
    setIsCorrect(correctAnswer);
    setSelectedAnswer(typedAnswer);
    if (correctAnswer) updateScore();
    setTimeout(moveToNextQuestion, 1000);
  };

  return (
    <div className='container'>
      <div className="timer">
        <h2>Score : {score}</h2>
        <div><FontAwesomeIcon icon={faClock} size="2x" color="white" /> {timeLeft} seconds</div>
      </div>

      <div className="question">{ques}</div>

      <div id="ans" className={options ? "options" : ""}>
        <ul className={options ? "optionsul" : "dashul"}>
          {options ? (
            options.map((option, idx) => (
              <li
                className={`option ${selectedAnswer === option ? (option === correct ? 'correct' : 'incorrect') : ''}`}
                key={idx}
                onClick={() => handleAnswer(option)}
              >
                {option}
              </li>
            ))
          ) : (
            <li className="dash">
              <input
                type="text"
                placeholder="Write your answer here..."
                value={typedAnswer}
                onChange={(e) => setTypedAnswer(e.target.value)}
              />
              <button onClick={handleTypedAnswer}>Submit</button>
            </li>
          )}
        </ul>
      </div>

      {selectedAnswer !== null && (
        <div className={`feedback ${isCorrect ? 'correct' : 'incorrect'}`}>
          {isCorrect ? "Correct!" : "Incorrect!"}
        </div>
      )}
    </div>
  );
};

export default Box;
