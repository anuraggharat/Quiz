import React from "react";
import QuestionCard from "./Components/QuestionCard";



const App = () => {
  const startTrivia = async () => {};

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {};

  const nextQuestion = () => {};

  return (
    <div className="App">
      <h1>Quiz</h1>
      <button className="start" onClick={startTrivia}>
        Start Quiz
      </button>
      <p className="score">Score</p>
      <QuestionCard />
      <button className="next" onClick={nextQuestion}>
        Next Question
      </button>
    </div>
  );
};

export default App;
