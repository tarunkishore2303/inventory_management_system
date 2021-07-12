const router = require("express").Router();

let NonPerishable = require("../models/nonperishable.model");

router.route("/").get((req, res) => {
	NonPerishable.find()
		.then((perishable) => res.json(perishable))
		.catch((err) => res.status(400).json("Error" + err));
});

router.route("/add").post((req, res) => {
	const { name, type, des } = req.body;
	const newNonPerishable = new NonPerishable({ name, type, des });
	newNonPerishable
		.save()
		.then(() => res.json("Item added"))
		.catch((err) => res.status(400).json("Error" + err));
});

module.exports = router;
