import express from 'express'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'
import cors from 'cors'
import planetsRouter from './routes/planets/planets.router.js'
import morgan from 'morgan'
import launchesRouter from './routes/launches/launches.router.js'
// import { loadPlanetData } from './models/planets.model.js'

const app = express()
const __dirname = dirname(fileURLToPath(import.meta.url))

app.use(
	cors({
		origin: 'http://localhost:3000',
	})
)
// await loadPlanetData()

app.use(morgan('combined'))
app.use(express.static(path.join(__dirname, '..', 'public')))
app.use(express.json())
app.use('/launches', launchesRouter)
app.use('/planets', planetsRouter)
app.get('/*', (req, res) => res.sendFile(path.join(__dirname, '..', 'public', 'index.html')))
export default app
