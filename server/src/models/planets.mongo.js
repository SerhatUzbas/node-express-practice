import mongoose from 'mongoose'

const planetSchema = new mongoose.Schema({
	kepler_name: { type: String, required: true },
})

export const Planets = mongoose.model('Planets', planetSchema)
