import http from 'http'
import app from './app.js'
import { loadPlanetData } from './models/planets.model.js'
import mongoose from 'mongoose'

const PORT = process.env.PORT || 8000
console.log(process.env.NAME)

const MONGO_URL = 'mongodb+srv://serhatuzbas:QRAvs2rEWEXJQRJE@nasa.ufoaswz.mongodb.net/?retryWrites=true&w=majority'
const server = http.createServer(app)

const startServer = async () => {
	await mongoose.connect(MONGO_URL, {})
	mongoose.connection.on('open', () => console.log('MongoDB connected'))
	await loadPlanetData()
	server.listen(PORT, () => console.log(`${PORT} is active`))
}

startServer()
