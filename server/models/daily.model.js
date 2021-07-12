const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const dailySchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	DoE: {
		type: String,
		require: true,
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

const DailyShip = mongoose.model("DailyShip", dailySchema, "daily");

module.exports = DailyShip;
