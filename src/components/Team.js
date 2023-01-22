import * as React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
import Title from './Title';

export default function Team({dashboard}) {
  // const lodgings = dashboard?.lodgings
  // console.log(lodgings[0].occupants)
  // console.log(lodgings[0])
  // console.log(dashboard)
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 , height: '200px'}}>
      <Grid container spacing={3}>
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: 200,
                overflowY: 'scroll',
                margin: 'auto'
              }}
            >
              <Title>{'Teams have not been created'}</Title>
              <Title>{'check back soon'}</Title>
            </Paper>
          </Grid>
    </Container>
  );
}
