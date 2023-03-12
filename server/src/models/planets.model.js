import fs from 'fs'
import path, { dirname } from 'path'
import { parse } from 'csv-parse'
import { fileURLToPath } from 'url'
import { Planets } from './planets.mongo.js'

const __dirname = dirname(fileURLToPath(import.meta.url))

// const habitablePlanets = []

function isHabitablePlanet(planet) {
	return planet['koi_disposition'] === 'CONFIRMED' && planet['koi_insol'] > 0.36 && planet['koi_insol'] < 1.11 && planet['koi_prad'] < 1.6
}

export const loadPlanetData = () =>
	new Promise((resolve, reject) => {
		fs.createReadStream(path.join(__dirname, '..', '..', 'data', 'kepler_data.csv'))
			.pipe(
				parse({
					comment: '#',
					columns: true,
				})
			)
			.on('data', async (data) => {
				if (isHabitablePlanet(data)) {
					await savePlanet(data)
				}
			})
			.on('error', (err) => {
				// console.log(err)
				reject(err)
			})
			.on('end', async () => {
				const planetsFounded = (await getAllPlanetsFromModel()).length
				console.log(`${planetsFounded} habitable planets found in universe`)
				// console.log(await getAllPlanetsFromModel())

				resolve()
			})
	})

export const getAllPlanetsFromModel = async () => {
	return await Planets.find({})
}

const savePlanet = async (planet) => {
	try {
		await Planets.updateOne({ kepler_name: planet.kepler_name }, { kepler_name: planet.kepler_name }, { upsert: true })
	} catch (error) {
		console.error('Cant get planet data')
	}
}
