/** @format */

import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import Container from '@mui/material/Container';
import TableBody from '@mui/material/TableBody';
import Typography from '@mui/material/Typography';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';

export default function AllergyCard({ dashboard }) {
	const diets = dashboard?.diets.filter((diet) => diet.diet !== '');
	const keywords = Object.keys(dashboard?.diet_keywords);

	const capitalizeKeyword = (keyword) => {
		return keyword?.charAt(0).toUpperCase() + keyword?.slice(1);
	};

	return (
		<>
			<Container maxWidth='xlg'>
				<Grid
					sx={{ display: 'flex', flexDirection: 'row', marginTop: '1rem' }}
					container
					spacing={1.5}
				>
					{keywords?.map((keyword) => (
						<Grid item xs={12} md={12} lg={1.2}>
							<Paper
								sx={{
									p: 2,
									display: 'flex',
									flexDirection: 'column',
									alignItems: 'center',
									textAlign: 'center',
									height: 120,
								}}
							>
								<Title>{capitalizeKeyword(keyword)}</Title>
								<Typography component='p' variant='p'>
									{dashboard?.diet_keywords[keyword]}
								</Typography>
							</Paper>
						</Grid>
					))}
				</Grid>
			</Container>
			<Grid item xs={12} sx={{ margin: '1rem' }}>
				<Paper
					sx={{
						p: 5,
						display: 'flex',
						flexDirection: 'column',
						overflow: 'scroll',
						marginBottom: '4rem',
					}}
				>
					<Title>Full Diet & Allergen List</Title>
					<Table size='small'>
						<TableHead>
							<TableRow>
								<TableCell sx={{ fontWeight: '900' }} align='center'>
									Name
								</TableCell>
								<TableCell sx={{ fontWeight: '900' }} align='center'>
									Allergy / Diet
								</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{diets?.map((diet) => (
								<TableRow key={diet.id}>
									<TableCell align='center'>{diet.name}</TableCell>
									<TableCell align='center'>{diet.diet}</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</Paper>
			</Grid>
		</>
	);
}
