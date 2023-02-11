/** @format */

import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';

export default function GuestList({ dashboard }) {
	const diets = dashboard?.diets.filter((diet) => diet.diet !== '');
	return (
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
	);
}
