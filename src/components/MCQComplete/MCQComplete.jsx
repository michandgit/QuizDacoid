import React from "react";
import "./MCQComplete.css";

const MCQComplete = ({ proceedToNext }) => {
  return (
    <div className="mcq-complete-container">
      <h2 className="fade-in">You have completed the MCQs!</h2>
      <p>Get ready for the Integer-Based Questions.</p>
      <button onClick={proceedToNext} className="next-btn">Proceed</button>
    </div>
  );
};

export default MCQComplete;
