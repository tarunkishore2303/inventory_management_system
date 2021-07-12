const router = require("express").Router();

let Manager = require("../models/manager.model");

router.route("/").get((req, res) => {
	Manager.find()
		.then((managers) => res.json(managers))
		.catch((err) => res.status(400).json("Error" + err));
});

module.exports = router;
