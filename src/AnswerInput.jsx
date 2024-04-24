import React, { useState } from 'react';
import { Grid, TextField, Button, Box} from '@material-ui/core';

import CorrectAnswers from './CorrectAnswers';


function AnswerInput({ question, onNextQuestion }) {
  const [userAnswers, setUserAnswers] = useState({
    name: '',
    author: '',
    date: '',
    context: '',
    place: ''
  });

  const [showCorrectAnswers, setShowCorrectAnswers] = useState(false);

  const handleAnswerChange = (event, questionKey) => {
    const updatedAnswers = { ...userAnswers };
    updatedAnswers[questionKey] = event.target.value;
    setUserAnswers(updatedAnswers);
  };

  const handleVerifyAnswer = () => {
    console.log(question)
    // Add logic to handle answer verification (optional)
    setShowCorrectAnswers(true);
  };

  return (
    <Grid container spacing={2}>
      {!showCorrectAnswers && <Box sx={{ width: '75%', margin: 'auto' }}>
          <Grid item xs={12}>
          <TextField
            fullWidth
            label="Nome dell'opera"
            value={userAnswers.name}
            onChange={(event) => handleAnswerChange(event, 'name')}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Autore"
            value={userAnswers.author}
            onChange={(event) => handleAnswerChange(event, 'author')}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Data"
            value={userAnswers.date}
            onChange={(event) => handleAnswerChange(event, 'date')}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Contesto"
            value={userAnswers.context}
            onChange={(event) => handleAnswerChange(event, 'context')}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Posto"
            value={userAnswers.place}
            onChange={(event) => handleAnswerChange(event, 'place')}
          />
        </Grid>
      </Box>}
      {showCorrectAnswers && (
        <CorrectAnswers correctAnswers={question} />
      )}

      <Grid item xs={12}>
        <div className="button-container">
          <Button variant="contained" color="primary" onClick={handleVerifyAnswer}>
            Verifica Risposta
          </Button>
          {showCorrectAnswers && <Button variant="contained" color="secondary" onClick={() => {
              setShowCorrectAnswers(false);
              onNextQuestion();
            }
          }>
            Prossimo Quiz
          </Button>}
        </div>
      </Grid>
    </Grid>
  );
}

export default AnswerInput;
