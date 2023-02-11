import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Chart from './Chart';
import ArrivalChart from './arrivalChart';
import Statistics from './Statistics';
import Countdown from './Countdown';
import Attending from './Attending';

export default function DashboardData({dashboard}) {
  const guests = dashboard?.attending
  return (
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 , height: '500px'}}>
            <Grid container spacing={3}>
              {/* Chart */}
              <Grid item xs={12} md={6} lg={3}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 300,
                  }}
                >
                  <Chart dashboard={dashboard}/>
                </Paper>
              </Grid>
              <Grid item xs={12} md={4} lg={2}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 300,
                  }}
                >
                  <Countdown />
                </Paper>
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 300,
                  }}
                >
                  <ArrivalChart dashboard={dashboard}/>
                </Paper>
              </Grid>

              {/* Recent Deposits */}
              <Grid item xs={12} md={3} lg={3}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 300,
                  }}
                >
                  <Statistics dashboard={dashboard} />
                </Paper>
              </Grid>
              {/* Recent Orders */}
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', overflow: 'scroll' }}>
                  <Attending dashboard={dashboard} />
                </Paper>
              </Grid>
            </Grid>
          </Container>
    );
  }
  
