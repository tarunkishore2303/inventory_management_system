const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const perishableRouter = require("./routes/perishable");
const nonperishableRouter = require("./routes/nonperishable");
const managerRouter = require("./routes/managers");
const dailyRouter = require("./routes/daily");
const supervisorRouter = require("./routes/supervisors");
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017", {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
	console.log("MongoDB connected !");
});

app.use("/managers", managerRouter);
app.use("/perishable", perishableRouter);
app.use("/nonperishable", nonperishableRouter);
app.use("/daily", dailyRouter);
app.use("/supervisor", supervisorRouter);
app.use("/workers", supervisorRouter);

app.listen(5000, () => {
	console.log("listening");
});
