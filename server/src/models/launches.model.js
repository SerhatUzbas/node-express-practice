import { Launches } from './launches.mongo.js'
import { Planets } from './planets.mongo.js'

const launches = new Map()

const DEFAULT_FLIGHT_NUMBER = 100

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
export const getAllLaunchesFromModal = async () => {
	// return Array.from(launches.values())
	return await Launches.find({}, { _id: 0, __v: 0 })
}

export const scheduleNewLaunch = async (launch) => {
	const newFlightNumber = (await getLatestFilghtNumber()) + 1
	const newLaunch = { ...launch, upcoming: true, success: true, customers: ['ISU', 'SU'], flightNumber: newFlightNumber }
	await saveLaunch(newLaunch)
}

export const getLatestFilghtNumber = async () => {
	const latestLaunch = await Launches.findOne().sort('-flightNumber')
	if (!latestLaunch) return DEFAULT_FLIGHT_NUMBER
	console.log(latestLaunch.flightNumber, 'flightNumber')

	return latestLaunch.flightNumber
}

export const existLaunchWithId = (launchId) => {
	return launches.has(launchId)
}

export const saveLaunch = async (launch) => {
	const planet = Planets.findOne({ kepler_name: launch.target })
	if (!planet) throw new Error('No planets found')
	await Launches.updateOne({ flightNumber: launch.flightNumber }, launch, { upsert: true })
}

export const abortLaunchById = (launchId) => {
	const aborted = launches.get(launchId)
	aborted.upcoming = false
	aborted.success = false
	return aborted
}

saveLaunch(launch)
