export const launches = new Map()

const launch = {
	flightNumber: 33,
	mission: 'Kepler XX',
	rocket: 'Explorer XX',
	launchDate: new Date('November 28,1993'),
	destination: 'Kepler-442 b',
	customer: ['SU', 'ISU'],
	upcoming: true,
	success: true,
}

launches.set(launch.flightNumber, launch)
// console.log(launches.get(33))
