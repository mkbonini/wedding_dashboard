/** @format */

import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import {
	BarChart,
	Bar,
	CartesianGrid,
	Tooltip,
	XAxis,
	YAxis,
	ResponsiveContainer,
} from 'recharts';
import Title from './Title';

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({
	cx,
	cy,
	midAngle,
	innerRadius,
	outerRadius,
	percent,
}) => {
	const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
	const x = cx + radius * Math.cos(-midAngle * RADIAN);
	const y = cy + radius * Math.sin(-midAngle * RADIAN);

	return (
		<text
			x={x}
			y={y}
			fill='white'
			textAnchor={x > cx ? 'start' : 'end'}
			dominantBaseline='central'
		>
			{`${(percent * 100).toFixed(0)}%`}
		</text>
	);
};

export default function ArrivalChart({ dashboard }) {
	const theme = useTheme();
	const data = [
		{ name: 'Friday', value: dashboard?.arrival_date_statistics?.friday },
		{ name: 'Saturday', value: dashboard?.arrival_date_statistics?.saturday },
		{ name: 'Pending', value: dashboard?.arrival_date_statistics?.pending },
	];
	return (
		<React.Fragment>
			<Title>Arrival Date Responses</Title>
			<ResponsiveContainer>
				<BarChart
					width={400}
					height={300}
					data={data}
					margin={{
						top: 5,
						right: 30,
						left: 20,
						bottom: 5,
					}}
				>
					<CartesianGrid strokeDasharray='3 3' />
					<XAxis dataKey='name' />
					<YAxis />
					<Tooltip />
					<Bar dataKey='value' fill='#3366ff' />
				</BarChart>
			</ResponsiveContainer>
		</React.Fragment>
	);
}
