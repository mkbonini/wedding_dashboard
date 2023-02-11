/** @format */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashboardData from '../DashboardData';
import GuestList from '../guestList';
import CommentCard from '../CommentCard';
import AllergyCard from '../AllergyCard';
import Lodging from '../Lodging';
import Team from '../Team';

export default function RouteSwitch({ dashboard }) {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<DashboardData dashboard={dashboard} />} />

				<Route path='/guests' element={<GuestList dashboard={dashboard} />} />

				<Route path='/lodgings' element={<Lodging dashboard={dashboard} />} />

				<Route path='/teams' element={<Team dashboard={dashboard} />} />

				<Route
					path='/comments'
					element={<CommentCard dashboard={dashboard} />}
				/>

				<Route
					path='/allergies'
					element={<AllergyCard dashboard={dashboard} />}
				/>
			</Routes>
		</BrowserRouter>
	);
}
