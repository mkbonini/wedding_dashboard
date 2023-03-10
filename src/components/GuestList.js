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
	const guests = dashboard?.guests;
	return (
		<Grid item xs={12}>
			<Paper
				sx={{
					padding: '2rem',
					display: 'flex',
					flexDirection: 'column',
					overflow: 'scroll',
				}}
			>
				<Title>Guests Invited</Title>
				<Table size='small'>
					<TableHead>
						<TableRow>
							<TableCell sx={{ fontWeight: '900' }} align='center'>
								ID
							</TableCell>
							<TableCell sx={{ fontWeight: '900' }} align='center'>
								Name
							</TableCell>
							<TableCell sx={{ fontWeight: '900' }} align='center'>
								RSVP
							</TableCell>
							<TableCell sx={{ fontWeight: '900' }} align='center'>
								Email
							</TableCell>
							<TableCell sx={{ fontWeight: '900' }} align='center'>
								Arrival Date
							</TableCell>
							<TableCell sx={{ fontWeight: '900' }} align='center'>
								Plus Ones
							</TableCell>
							<TableCell sx={{ fontWeight: '900' }} align='center'>
								Party Count
							</TableCell>
							<TableCell sx={{ fontWeight: '900' }} align='center'>
								Bed Count
							</TableCell>
							<TableCell sx={{ fontWeight: '900' }} align='center'>
								Breakfast
							</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{guests?.map((guest) => (
							<TableRow key={guest.id}>
								<TableCell align='center'>{guest.id}</TableCell>
								<TableCell align='center'>{`${guest.first_name} ${guest.last_name}`}</TableCell>
								<TableCell align='center'>{guest.rsvp}</TableCell>
								<TableCell align='center'>{guest.email}</TableCell>
								<TableCell align='center'>{guest.arrival_date}</TableCell>
								<TableCell align='center'>{guest.plus_one_count}</TableCell>
								<TableCell align='center'>{guest.party_count}</TableCell>
								<TableCell align='center'>{guest.bed_count}</TableCell>
								<TableCell align='center'>{guest.breakfast}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
				{/* <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more orders
      </Link> */}
			</Paper>
		</Grid>
	);
}
