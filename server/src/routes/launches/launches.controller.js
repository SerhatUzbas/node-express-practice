import { getAllLaunchesFromModal } from '../../models/launches.model.js'

export function httpGetAllLaunches(req, res) {
	return res.status(200).json(getAllLaunchesFromModal())
}
