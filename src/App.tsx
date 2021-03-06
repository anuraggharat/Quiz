import React, { useState, useEffect } from "react";
import { QuestionState, Difficulty, fetchQuizQuestions } from "./API";
import QuestionCard from "./Components/QuestionCard";

import { GlobalStyle, Wrapper, Container } from "./App.styles";

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

const TOTAL_QUESTIONS = 10;

const App = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);
  const [difficulty, setDifficulty] = useState("easy");
  const [count, setCount] = useState(10);

  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);
    const newQuestions = await fetchQuizQuestions(count, difficulty);

    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  };

  console.log(questions);

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      const answer = e.currentTarget.value;
      const correct = questions[number].correct_answer === answer;
      if (correct) {
        setScore((prev) => prev + 1);
      }
      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };
      setUserAnswers((prev) => [...prev, answerObject]);
    }
  };
  console.log(count, difficulty);
  const handleDifficulty = (e: any) => {
    setDifficulty(e.target.value);
  };
  const handleCount = (e: any) => {
    setCount(e.target.value);
  };

  const nextQuestion = () => {
    const nextQuestion = number + 1;
    if (nextQuestion === TOTAL_QUESTIONS) {
      setGameOver(true);
    } else {
      setNumber(nextQuestion);
    }
  };

  return (
    <>
      <GlobalStyle></GlobalStyle>
      <Wrapper>
        <h1>Quiz</h1>
        {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
          <Container>
            <label htmlFor="difficulty">Choose the Difficulty</label>
            <select
              name="difficulty"
              id="difficulty"
              value={difficulty}
              defaultValue={difficulty}
              onChange={(e) => handleDifficulty(e)}
            >
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
            <label htmlFor="difficulty">Choose the Amount</label>
            <select
              name="difficulty"
              id="difficulty"
              defaultValue={count}
              value={count}
              onChange={(e) => handleCount(e)}
            >
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
            </select>
            <button className="start" onClick={startTrivia}>
              Start Quiz
            </button>
          </Container>
        ) : null}

        {!gameOver ? <p className="score">Score: {score}</p> : null}
        {loading ? <p className="loading">loading</p> : null}
        {!loading && !gameOver && (
          <QuestionCard
            questionNr={number + 1}
            totalQuestions={TOTAL_QUESTIONS}
            question={questions[number].question}
            answers={questions[number].answers}
            userAnswer={userAnswers ? userAnswers[number] : undefined}
            callback={checkAnswer}
          />
        )}
        {!gameOver &&
        !loading &&
        userAnswers.length === number + 1 &&
        number !== TOTAL_QUESTIONS - 1 ? (
          <div>
            <button className="next" onClick={nextQuestion}>
              Next Question
            </button>
          </div>
        ) : null}
      </Wrapper>
    </>
  );
};

export default App;
