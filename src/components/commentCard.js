import * as React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Title from './Title';
import Typography from "@mui/material/Typography";

function preventDefault(event) {
  event.preventDefault();
}

export default function CommentCard({dashboard}) {
  const comments = dashboard?.comments
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 , height: '200px'}}>
      <Grid container spacing={3}>
        {/* Chart */}
        {comments?.map((comment) => (
          <Grid item xs={12} md={6} lg={3}>
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: 200,
              }}
            >
              <Title>{comment.name} says:</Title>
              <Typography component="p" variant="p">
                {comment.comment}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
