/** @format */

import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Title from './Title';
import Countdown from './Countdown';
import styled from 'styled-components';

export const StatisticsContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;

	&.mt {
		margin-top: 10px;
	}
`;

export default function Statistics({ dashboard }) {
	const totalGuests = dashboard?.rsvp_statistics?.total;
	const breakfast = dashboard?.breakfast_statistics?.yes;
	const dodgeball = dashboard?.dodge_ball_statistics?.yes;
	const onsite = dashboard?.lodging_statistics?.onsite;
	return (
		<React.Fragment>
			<Grid item xs={12} md={6} lg={2.6}>
				<Paper
					sx={{
						p: 2,
						display: 'flex',
						flexDirection: 'column',
						height: 130,
					}}
				>
					<Countdown />
				</Paper>
			</Grid>
			<Grid item xs={12} md={6} lg={2.3}>
				<Paper
					sx={{
						p: 2,
						display: 'flex',
						flexDirection: 'column',
						height: 130,
					}}
				>
					<Title>Total Guests</Title>
					<Typography component='p' sx={{ fontSize: '25px' }}>
						{totalGuests}
					</Typography>
				</Paper>
			</Grid>
			<Grid item xs={12} md={6} lg={2.3}>
				<Paper
					sx={{
						p: 2,
						display: 'flex',
						flexDirection: 'column',
						height: 130,
					}}
				>
					<Title>Breakfast</Title>
					<Typography component='p' sx={{ fontSize: '25px' }}>
						{breakfast}
					</Typography>
				</Paper>
			</Grid>
			<Grid item xs={12} md={6} lg={2.5}>
				<Paper
					sx={{
						p: 2,
						display: 'flex',
						flexDirection: 'column',
						height: 130,
					}}
				>
					<Title>Playing Dodgeball</Title>
					<Typography component='p' sx={{ fontSize: '25px' }}>
						{dodgeball}
					</Typography>
				</Paper>
			</Grid>
			<Grid item xs={12} md={6} lg={2.3}>
				<Paper
					sx={{
						p: 2,
						display: 'flex',
						flexDirection: 'column',
						height: 130,
					}}
				>
					<Title>Lodging Onsite</Title>
					<Typography component='p' sx={{ fontSize: '25px' }}>
						{onsite}
					</Typography>
				</Paper>
			</Grid>
		</React.Fragment>
	);
}
