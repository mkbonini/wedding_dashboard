import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { PieChart, Pie, Legend, Sector, Cell, LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
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


export default function Chart({dashboard}) {
  // let {rsvp_statistics} = dashboard;
  const theme = useTheme();
  const rsvp_data = [
    {name: "yes", value: dashboard?.rsvp_statistics?.yes},
    {name: "no", value: dashboard?.rsvp_statistics?.no},
    {name: "pending", value: dashboard?.rsvp_statistics?.pending},
  ];
  return (
    <React.Fragment>
      <Title>RSVP Responses</Title>
      <ResponsiveContainer>
        <PieChart width={400} height={110} >
            <Pie
              data={rsvp_data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {rsvp_data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Legend layout="horizontal" verticalAlign="bottom" align="center" />
          </PieChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}
