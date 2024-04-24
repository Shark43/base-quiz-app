
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
        <ListItemText
          primary={
            <span style={{ color: correctAnswers.context !== userAnswers.context ? 'red' : 'inherit' }}>
              Contesto: {correctAnswers.context}
            </span>
          }
        />
        <ListItemText
          primary={
            <span style={{ color: correctAnswers.place !== userAnswers.place ? 'red' : 'inherit' }}>
              Posto: {correctAnswers.place}
            </span>
          }
        />
      </ListItem>
    </Box>
  );
}

export default CorrectAnswers;