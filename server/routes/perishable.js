const router = require("express").Router();

let Perishable = require("../models/perishable.model");

router.route("/").get((req, res) => {
	Perishable.find()
		.then((perishable) => res.json(perishable))
		.catch((err) => res.status(400).json("Error" + err));
});

router.route("/add").post((req, res) => {
	const { name, DoE, type, des } = req.body;
	let newDoE = Date.parse(DoE);

	const newPerishable = new Perishable({ name, newDoE, type, des });
	newPerishable
		.save()
		.then(() => res.json(`Item added ${req.body}`))
		.catch((err) => res.status(400).json("Error" + err));
});

module.exports = router;
