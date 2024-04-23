import React, { useState } from 'react';
import { Typography } from '@material-ui/core';
import './App.css';
import QuestionContainer from './QuestionContainer';

const questions = [
  {
    'name': 'nome',
    'author': 'autore',
    'date': 'data',
    'context': 'contesto',
    'image': 'https://martinaway.com/wp-content/uploads/2022/03/Musei-a-Torino.jpg'
  },
  {
    'name': 'nome 2',
    'author': 'autore 2',
    'date': 'data',
    'context': 'contesto',
    'image': 'https://martinaway.com/wp-content/uploads/2022/03/Musei-a-Torino.jpg'
  }
];

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleNextQuestion = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      alert('Quiz completato!'); // Add logic to handle quiz completion
    }
  };

  return (
    <div className="App">
      <Typography variant="h1">Quiz App - Arte</Typography>

      {questions[currentQuestion] && (
        <QuestionContainer
          question={questions[currentQuestion]}
          onNextQuestion={handleNextQuestion}
        />
      )}
    </div>
  );
}

export default App;
