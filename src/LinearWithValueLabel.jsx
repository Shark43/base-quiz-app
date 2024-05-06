import * as React from 'react';
import { Typography, Box, LinearProgress } from '@material-ui/core';

function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

export default function LinearWithValueLabel(props) {

  return (
    <Box sx={{ width: '100%' }}>
      <LinearProgressWithLabel value={props.progress} />
    </Box>
  );
}