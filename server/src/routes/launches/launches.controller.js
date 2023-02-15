import { launches } from '../../models/launches.model.js'

export const getAllLaunches = (req, res) => {
	// console.log(launches.values)

	return res.status(200).json(Array.from(launches.values()))
}
