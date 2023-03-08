const launches = new Map()

let latestFlightNumber = 100

const launch = {
	flightNumber: 33,
	mission: 'Kepler XX',
	rocket: 'Explorer XX',
	launchDate: new Date('November 28,1993'),
	target: 'Kepler-442 b',
	customer: ['SU', 'ISU'],
	upcoming: true,
	success: true,
}

launches.set(launch.flightNumber, launch)
// console.log(launches.get(33))

export const getAllLaunchesFromModal = () => {
	return Array.from(launches.values())
}

export const addNewLaunch = (launch) => {
	latestFlightNumber++
	launches.set(latestFlightNumber, { ...launch, flightNumber: latestFlightNumber, customers: ['SU', 'ISU'], upcoming: true, success: true })
}

export const existLaunchWithId = (launchId) => {
	return launches.has(launchId)
}

export const abortLaunchById = (launchId) => {
	const aborted = launches.get(launchId)
	console.log('kakakakakakak')
	aborted.upcoming = false
	aborted.success = false
	return aborted
}
