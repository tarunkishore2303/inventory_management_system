const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const nonperishableSchema = new Schema({
	name: {
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

const NonPerishable = mongoose.model(
	"NonPerishable",
	nonperishableSchema,
	"nonperishable"
);

module.exports = NonPerishable;
