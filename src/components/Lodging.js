import * as React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';

export default function Lodging({dashboard}) {
  const lodgings = dashboard?.lodgings
  // console.log(lodgings[0].occupants)
  // console.log(lodgings[0])
  console.log(dashboard)
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 , height: '200px'}}>
      <Grid container spacing={3}>
        {/* Chart */}
        {lodgings?.map((lodging) => (
          <Grid item xs={12} md={6} lg={3}>
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: 410,
                overflowY: 'scroll'
              }}
            >
              <Title>{lodging.name}</Title>
                <Table size="small" >
                  {/* <TableHead>
                    <TableRow>
                    <TableCell align="center">ID</TableCell>
                    <TableCell align="center">Name</TableCell>
                    </TableRow>
                  </TableHead> */}
                  <TableBody>
                    {lodging?.occupants.map((occupant, index) => (
                      <TableRow key={index} >
                        <TableCell align="center" sx={occupant==='Spot Available' && {color: 'lightgrey'}} >{index + 1}</TableCell>
                        <TableCell align="center" sx={occupant==='Spot Available' && {color: 'lightgrey'}}>{`${occupant}`}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
