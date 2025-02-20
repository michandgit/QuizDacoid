import React from "react";
import "./ScoreBoard.css";
import { useNavigate } from "react-router-dom"



const ScoreBoard = ({ score, total , End}) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/intbased")
  }

  const goHome=()=>{
    navigate("/");
  }
  return (
    <div className="scoreboard-container">
      <h2 className="fade-in">Quiz Completed!</h2>
      <p>Your Score: {score} / {total}</p>
      {End && <button onClick={goHome}>Go Back Home</button>}
      {!End && <p>Next Set ? <button onClick={handleClick}>Proceed</button></p>}
    </div>
  );
};

export default ScoreBoard;
