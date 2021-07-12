const router = require("express").Router();

let Daily = require("../models/daily.model");

router.route("/").get((req, res) => {
	Daily.find()
		.then((daily) => res.json(daily))
		.catch((err) => res.status(400).json("Error" + err));
});

router.route("/add").post((req, res) => {
	var { name, DoE, type, des } = req.body;
	let newDoE = Date.parse(DoE);
	const newDaily = new Perishable({ name, newDoE, type, des });
	newDaily
		.save()
		.then(() => res.json("Item added"))
		.catch((err) => res.status(400).json("Error" + err));
});

module.exports = router;
