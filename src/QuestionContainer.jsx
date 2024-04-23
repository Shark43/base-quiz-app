import React from 'react';
import { Grid, Paper, Avatar } from '@material-ui/core';
import AnswerInput from './AnswerInput';
import ImageComponent from './ImageComponent';

function QuestionContainer({ question, onNextQuestion }) {
  return (
    <Paper elevation={3} sx={{ padding: '20px' }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <ImageComponent
            imageUrl={question.image}
            altText='Opera darte'
          />
        </Grid>
        <AnswerInput question={question} onNextQuestion={onNextQuestion} />
      </Grid>
    </Paper>
  );
}

export default QuestionContainer;
