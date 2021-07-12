const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const perishableSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	DoE: {
		type: String,
		required: true,
	},
	type: {
		type: String,
		required: true,
	},
	des: {
		type: String,
		required: true,
	},
});

const Perishable = mongoose.model("Perishable", perishableSchema, "perishable");

module.exports = Perishable;
