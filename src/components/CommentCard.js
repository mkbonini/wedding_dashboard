/** @format */

import * as React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Title from './Title';
import Typography from '@mui/material/Typography';

export default function CommentCard({ dashboard }) {
	const comments = dashboard?.comments.filter(
		(comment) => comment.comment !== ''
	);
	return (
		<Container maxWidth='lg' sx={{ mt: 4, mb: 4 }}>
			<Grid container spacing={3}>
				{comments?.map((comment) => (
					<Grid item xs={12} md={12} lg={4}>
						<Paper
							sx={{
								p: 2,
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'start',
								textAlign: 'start',
								height: 150,
							}}
						>
							<Title>{comment.name} says:</Title>
							<Typography component='p' variant='p'>
								{comment.comment}
							</Typography>
						</Paper>
					</Grid>
				))}
			</Grid>
		</Container>
	);
}
