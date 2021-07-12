const router = require("express").Router();

let Worker = require("../models/worker.model");

router.route("/").get((req, res) => {
	Worker.find()
		.then((workers) => res.json(workers))
		.catch((err) => res.status(400).json("Error" + err));
});

module.exports = router;
