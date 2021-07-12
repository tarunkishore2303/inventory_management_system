const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const managerSchema = new Schema({
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

const Manager = mongoose.model("Manager", managerSchema, "managers");

module.exports = Manager;
