const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const supervisorSchema = new Schema({
	name: {
		type: String,
	},
	Dob: {
		type: Date,
	},
	Designation: {
		type: String,
	},
	mail: {
		type: String,
	},
});

const Supervisor = mongoose.model(
	"Supervisor",
	supervisorSchema,
	"supervisors"
);

module.exports = Supervisor;
