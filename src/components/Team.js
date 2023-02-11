/** @format */

import * as React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Title from './Title';

export default function Team({ dashboard }) {
	return (
		<Container maxWidth='lg' sx={{ mt: 4, mb: 4, height: '200px' }}>
			<Grid container spacing={3}>
				<Paper
					sx={{
						p: 2,
						display: 'flex',
						flexDirection: 'column',
						height: 200,
						overflowY: 'scroll',
						margin: 'auto',
					}}
				>
					<Title>{'Teams have not been created'}</Title>
					<Title>{'check back soon'}</Title>
				</Paper>
			</Grid>
		</Container>
	);
}
