/** @format */

export async function getDashboard() {
	try {
		const response = await fetch(
			'https://mm-wedding-backend.herokuapp.com/dashboard',
			{
				method: 'GET',
				mode: 'cors',
				headers: {
					'Content-Type': 'application/json',
					'Access-Control-Allow-Origin': '*',
					accept: 'application/json',
					X_API_KEY: `${process.env.REACT_APP_API_KEY}`,
				},
			}
		);

		if (!response.ok) {
			throw new Error(`Error! status: ${response.status}`);
		}

		const result = await response.json();
		return result;
	} catch (err) {
		console.log(err);
	}
}
