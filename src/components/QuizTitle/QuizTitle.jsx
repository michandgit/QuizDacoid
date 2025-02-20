import React, { useEffect } from "react";
import { motion } from "framer-motion";
import "./QuizTitle.css";
import { useNavigate } from "react-router-dom";

const QuizTitle = ({ title }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate(title ? "/int_quiz" : "/quiz");
    }, 3000);

    return () => clearTimeout(timer); 
  }, [navigate, title]);

  return (
    <motion.div
      className="quiz-title"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h2>{title ? title : "Multiple Choice Questions"}</h2>
    </motion.div>
  );
};

export default QuizTitle;
