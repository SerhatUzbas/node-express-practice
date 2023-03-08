const API = 'http://localhost:8000'

async function httpGetPlanets() {
	const response = await fetch(`${API}/planets`)
	return response.json()
}

async function httpGetLaunches() {
	const response = await fetch(`${API}/launches`)
	const fetched = response.json()
	return fetched
}

async function httpSubmitLaunch(launch) {
	try {
		return await fetch(`${API}/launches`, { method: 'post', body: JSON.stringify(launch), headers: { 'Content-Type': 'application/json' } })
	} catch (error) {
		return console.error(error)
	}
}

async function httpAbortLaunch(id) {
	try {
		return await fetch(`${API}/launches/${id}`, { method: 'delete' })
	} catch (error) {
		console.log(error)
	}
}

export { httpGetPlanets, httpGetLaunches, httpSubmitLaunch, httpAbortLaunch }
