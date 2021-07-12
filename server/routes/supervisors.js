const router = require("express").Router();

let Supervisor = require("../models/supervisor.model");

router.route("/").get((req, res) => {
	Supervisor.find()
		.then((supervisors) => res.json(supervisors))
		.catch((err) => res.status(400).json("Error" + err));
});

module.exports = router;
