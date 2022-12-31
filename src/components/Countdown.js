import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Title from './Title';

function showRemaining() {
  var _second = 1000;
  var _minute = _second * 60;
  var _hour = _minute * 60;
  var _day = _hour * 24;
  var end = new Date('07/21/2023 4:0 PM');
	var now = new Date();
	var distance = end - now;
	if (distance < 0) {
		var days = '0';
		return days;
	}
  var days = Math.floor(distance / _day);
  return days;
}

export default function Countdown() {
  const today = new Date();
  // let date = today.to_string()
  return (
    <React.Fragment>
      <Box sx={{mt:0}}>
        <Title>Days Till Wedding</Title>
        <Typography component="p" variant="h2" mt={7}>
            {showRemaining()}
        </Typography>
        <Typography color="text.secondary" sx={{ flex: 1 }}>
          {/* {date} */}
        </Typography>
      </Box>
    </React.Fragment>
  );
}
