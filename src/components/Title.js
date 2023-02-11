/** @format */

import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';

function Title(props) {
	return (
		<Typography
			component='h2'
			variant='h6'
			color='#000'
			gutterBottom
			sx={{
				fontFamily: 'Mulish',
				fontSize: '16px',
				fontWeight: '700',
				margin: '10px 0px',
			}}
		>
			{props.children}
		</Typography>
	);
}

Title.propTypes = {
	children: PropTypes.node,
};

export default Title;
