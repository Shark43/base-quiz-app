
import React from 'react';
import { Typography, Box } from '@material-ui/core';

function CorrectAnswers({ correctAnswers }) {
  return (
    <Box className="correct-answers" sx={{ width: '75%', margin: 'auto' }}>
      <Typography variant="h5">Risposte Corrette:</Typography>
      <ul>
        <li>Nome: {correctAnswers.name}</li>
        <li>Autore: {correctAnswers.author}</li>
        <li>Data: {correctAnswers.date}</li>
        <li>Contesto: {correctAnswers.context}</li>
        <li>Posto: {correctAnswers.place ? correctAnswers.place : '-'}</li>
      </ul>
    </Box>
  );
}

export default CorrectAnswers;