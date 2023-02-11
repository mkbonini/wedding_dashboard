/** @format */

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Chart from './Chart';
import ArrivalChart from './ArrivalChart';
import Statistics from './Statistics';
import Attending from './Attending';

export default function DashboardData({ dashboard }) {
	return (
		<Container maxWidth='lg' sx={{ mt: 4, mb: 4, height: '500px' }}>
			<Grid container spacing={3}>
				<Statistics dashboard={dashboard} />
				<Grid item xs={12} md={12} lg={5}>
					<Paper
						sx={{
							p: 2,
							display: 'flex',
							flexDirection: 'column',
							height: 300,
						}}
					>
						<Chart dashboard={dashboard} />
					</Paper>
				</Grid>
				<Grid item xs={12} md={12} lg={7}>
					<Paper
						sx={{
							p: 2,
							display: 'flex',
							flexDirection: 'column',
							height: 300,
						}}
					>
						<ArrivalChart dashboard={dashboard} />
					</Paper>
				</Grid>
				<Grid item xs={12}>
					<Paper
						sx={{
							p: 2,
							display: 'flex',
							flexDirection: 'column',
							overflow: 'scroll',
							marginBottom: '4rem',
						}}
					>
						<Attending dashboard={dashboard} />
					</Paper>
				</Grid>
			</Grid>
		</Container>
	);
}
