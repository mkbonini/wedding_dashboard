/** @format */

import * as React from 'react';
import { PieChart, Pie, Legend, Cell, ResponsiveContainer } from 'recharts';
import Title from './Title';

const COLORS = ['#3366ff', '#000', 'darkgray'];
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

export default function Chart({ dashboard }) {
	const rsvp_data = [
		{ name: 'Yes', value: dashboard?.rsvp_statistics?.yes },
		{ name: 'No', value: dashboard?.rsvp_statistics?.no },
		{ name: 'Pending', value: dashboard?.rsvp_statistics?.pending },
	];
	return (
		<React.Fragment>
			<Title>RSVP Responses</Title>
			<ResponsiveContainer>
				<PieChart width={400} height={110}>
					<Pie
						data={rsvp_data}
						cx='50%'
						cy='50%'
						labelLine={false}
						label={renderCustomizedLabel}
						outerRadius={80}
						fill='#8884d8'
						dataKey='value'
					>
						{rsvp_data.map((entry, index) => (
							<Cell
								key={`cell-${index}`}
								fill={COLORS[index % COLORS.length]}
							/>
						))}
					</Pie>
					<Legend layout='horizontal' verticalAlign='bottom' align='center' />
				</PieChart>
			</ResponsiveContainer>
		</React.Fragment>
	);
}
