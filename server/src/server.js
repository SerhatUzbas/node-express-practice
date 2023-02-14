import http from 'http'
import app from './app.js'
import { loadPlanetData } from './models/planets.model.js'

const PORT = process.env.PORT || 8000
console.log(process.env.NAME)
const server = http.createServer(app)

const startServer = async () => {
	await loadPlanetData()
	server.listen(PORT, () => console.log(`${PORT} is active`))
}

startServer()
