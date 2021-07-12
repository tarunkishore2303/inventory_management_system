const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workerSchema = new Schema({
	name: {
		type: String,
	},
	Dob: {
		type: String,
	},
	Designation: {
		type: String,
	},
	mail: {
		type: String,
	},
});

const Worker = mongoose.model("Worker", workerSchema, "workers");

module.exports = Worker;
