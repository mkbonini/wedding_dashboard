import * as React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Title from './Title';
import Typography from "@mui/material/Typography";

function preventDefault(event) {
  event.preventDefault();
}

export default function AllergyCard({dashboard}) {
  const diets = dashboard?.diets
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 , height: '200px'}}>
      <Grid container spacing={3}>
        {/* Chart */}
        {diets?.map((diet) => (
          <Grid item xs={12} md={6} lg={3}>
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: 200,
              }}
            >
              <Title>{diet.name} says:</Title>
              <Typography component="p" variant="p">
                {diet.diet}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
