import React, { useState } from 'react';
import Question from './components/Question';
import Score from './components/Score';

const questions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Lisbon"],
    answer: "Paris"
  },
  {
    question: "What is the capital of India'?",
    options: ["New Delhi", "New York", "Tokyo", "Tehran"],
    answer: "New Delhi"
  },
  {
    question: "What is the capital of China'?",
    options: ["Beijing", "New York", "Tokyo", "Tehran"],
    answer: "Beijing"
  },
  // Add more questions as needed
];

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="app">
      {showScore ? (
        <Score score={score} total={questions.length} />
      ) : (
        <Question 
          question={questions[currentQuestion]} 
          onAnswerOptionClick={handleAnswerOptionClick} 
        />
      )}
    </div>
  );
};

export default App;
