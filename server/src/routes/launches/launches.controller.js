import { addNewLaunch, getAllLaunchesFromModal } from '../../models/launches.model.js'

export function httpGetAllLaunches(req, res) {
	return res.status(200).json(getAllLaunchesFromModal())
}

export const httpAddNewLaunch = (req, res) => {
	const launch = req.body

	if (!launch.mission || !launch.rocket || !launch.launchDate || !launch.destination) {
		return res.status(400).json({
			error: 'Missing required property',
		})
	}

	launch.launchDate = new Date(launch.launchDate)
	// if (isNan(launch.launchDate)) {
	// 	return res.status(400).json({ error: 'Invalid Date' })
	// }
	addNewLaunch(launch)
	return res.status(201).json(launch)
}
