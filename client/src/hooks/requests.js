const API = 'http://localhost:8000'

async function httpGetPlanets() {
	const response = await fetch(`${API}/planets`)
	return response.json()
}

async function httpGetLaunches() {
	const response = await fetch(`${API}/launches`)
	const fetched = response.json()
	return fetched.sort((a, b) => a.flightNumber - b.flightNumber)
}

async function httpSubmitLaunch(launch) {
	// TODO: Once API is ready.
	// Submit given launch data to launch system.
}

async function httpAbortLaunch(id) {
	// TODO: Once API is ready.
	// Delete launch with given ID.
}

export { httpGetPlanets, httpGetLaunches, httpSubmitLaunch, httpAbortLaunch }
