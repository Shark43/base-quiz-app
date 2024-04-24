
import React from 'react';
import { Typography, Box, ListItem, ListItemText } from '@material-ui/core';

function CorrectAnswers({ correctAnswers, userAnswers }) {
  return (
    <Box className="correct-answers" sx={{ width: '75%', margin: 'auto' }}>
      <Typography variant="h5">Risposte Corrette:</Typography>
        <ListItem>
          <ListItemText
            primary={
              <span style={{ color: correctAnswers.name !== userAnswers.name ? 'red' : 'inherit' }}>
                Nome: {correctAnswers.name}
              </span>
            }
          />
          <ListItemText
            primary={
              <span style={{ color: correctAnswers.author !== userAnswers.author ? 'red' : 'inherit' }}>
                Autore: {correctAnswers.author}
              </span>
            }
          />
          <ListItemText
            primary={
              <span style={{ color: correctAnswers.date !== userAnswers.date ? 'red' : 'inherit' }}>
                Data: {correctAnswers.date}
              </span>
            }
          />
      </ListItem>
      <ul>
        <li color='red'>Nome: {correctAnswers.name}</li>
        <li>Autore: {correctAnswers.author}</li>
        <li>Data: {correctAnswers.date}</li>
        <li>Contesto: {correctAnswers.context}</li>
        <li>Posto: {correctAnswers.place ? correctAnswers.place : '-'}</li>
      </ul>
    </Box>
  );
}

export default CorrectAnswers;