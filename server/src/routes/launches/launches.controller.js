import { abortLaunchById, addNewLaunch, existLaunchWithId, getAllLaunchesFromModal } from '../../models/launches.model.js'

export function httpGetAllLaunches(req, res) {
	return res.status(200).json(getAllLaunchesFromModal())
}

export const httpAddNewLaunch = (req, res) => {
	const launch = req.body

	if (!launch.mission || !launch.rocket || !launch.launchDate || !launch.target) {
		return res.status(400).json({
			error: 'Missing required asdasd',
		})
	}

	launch.launchDate = new Date(launch.launchDate)
	// if (isNan(launch.launchDate)) {
	// 	return res.status(400).json({ error: 'Invalid Date' })
	// }
	addNewLaunch(launch)
	return res.status(201).json(launch)
}

export const httpAbortLaunch = (req, res) => {
	const launchId = Number(req.params.id)
	console.log(launchId)

	if (!existLaunchWithId(launchId)) {
		return res.status(404).json({ error: 'Launch not found' })
	}

	const aborted = abortLaunchById(launchId)
	return res.status(200).json(aborted)
}
