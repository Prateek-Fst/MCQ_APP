import React from 'react';
import styles from "./Question.module.css"

const Question = ({ question, onAnswerOptionClick }) => {
  return (
    <div className={styles.questionContainer}>
      <h2>{question.question}</h2>
      <div className={styles.options}>
        {question.options.map((option) => (
          <button
            key={option}
            onClick={() => onAnswerOptionClick(option === question.answer)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;