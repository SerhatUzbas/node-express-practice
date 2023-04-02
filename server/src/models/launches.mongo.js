import mongoose from 'mongoose'

const launchesSchema = new mongoose.Schema({
	flightNumber: { type: Number, required: true },
	launchDate: { type: Date },
	missions: { type: String, required: true },
	rocket: { type: String, required: true },
	target: { type: String, required: true },
	upcoming: { type: Boolean, required: true },
	success: { type: Boolean, required: true, default: true },
	customers: { type: [String] },
})

export const Launches = mongoose.model('Launch', launchesSchema)
