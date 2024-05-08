import React, { useState } from 'react';
import { Grid, TextField, Button, Box} from '@material-ui/core';

import CorrectAnswers from './CorrectAnswers';


function AnswerInput({ question, userAnswers, setUserAnswers }) {

  const handleAnswerChange = (event, questionKey) => {
    const updatedAnswers = { ...userAnswers };
    updatedAnswers[questionKey] = event.target.value;
    setUserAnswers(updatedAnswers);
  };


  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Box sx={{ width: '75%', margin: 'auto' }}>
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
        </Box>
      </Grid>
    </Grid>
  );
}

export default AnswerInput;
