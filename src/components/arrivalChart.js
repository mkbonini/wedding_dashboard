import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { BarChart, Bar, CartesianGrid, Tooltip, PieChart, Pie, Legend, Sector, Cell, LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Title from './Title';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];
const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index, rsvp_data }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};


export default function ArrivalChart({dashboard}) {
  const theme = useTheme();
  const data = [
    {name: "Fri.", value: dashboard?.arrival_date_statistics?.friday},
    {name: "Sat.", value: dashboard?.arrival_date_statistics?.saturday},
    {name: "pending", value: dashboard?.arrival_date_statistics?.pending},
  ];
  return (
    <React.Fragment>
      <Title>Arrival Date Responses</Title>
      <ResponsiveContainer>
        <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            {/* <Legend layout="horizontal" verticalAlign="bottom" align="center" /> */}
            <Bar dataKey="value" fill="#8884d8" />
          </BarChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}
