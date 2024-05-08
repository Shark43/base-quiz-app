
import React from 'react';
import { Typography, Box, ListItem, ListItemText } from '@material-ui/core';

function CorrectAnswers({ correctAnswers, userAnswers }) {
  return (
    <Box className="correct-answers" sx={{ width: '100%'}}>
      <Typography variant="h5">Risposte Corrette:</Typography>
      <Box className='vertical-list-item'>
        <ListItem disableGutters> {/* Disable default padding */}
          <ListItemText
            primary={
              <span style={{ color: correctAnswers.name !== userAnswers.name ? 'red' : 'black' }}>
                Nome: {userAnswers.name} - {correctAnswers.name}
              </span>
            }
          />
        </ListItem>
        <ListItem disableGutters>
          <ListItemText
            primary={
              <span style={{ color: correctAnswers.author !== userAnswers.author ? 'red' : 'black' }}>
                Autore: {userAnswers.author} - {correctAnswers.author}
              </span>
            }
          />
        </ListItem>
        <ListItem disableGutters>
          <ListItemText
            primary={
              <span style={{ color: correctAnswers.date !== userAnswers.date ? 'red' : 'black' }}>
                Data: {userAnswers.date} - {correctAnswers.date}
              </span>
            }
          />
        </ListItem>
        <ListItem disableGutters>
          <ListItemText
            primary={
              <span style={{ color: correctAnswers.context !== userAnswers.context ? 'red' : 'black' }}>
                Contesto: {userAnswers.context} - {correctAnswers.context}
              </span>
            }
          />
        </ListItem>
        <ListItem disableGutters>
          <ListItemText
            primary={
              <span style={{ color: correctAnswers.place !== userAnswers.place ? 'red' : 'black' }}>
                Posto:  {userAnswers.place} - {correctAnswers.place}
              </span>
            }
          />
        </ListItem>
      </Box>
    </Box>
  );
}

export default CorrectAnswers;