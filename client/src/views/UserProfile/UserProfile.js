/* eslint-disable prettier/prettier */
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import DateFnsUtils from "@date-io/date-fns";
import {
	MuiPickersUtilsProvider,
	KeyboardDatePicker,
} from "@material-ui/pickers";
import TextField from "@material-ui/core/TextField";
import axios from "axios";

// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

const styles = {
	cardCategoryWhite: {
		color: "rgba(255,255,255,.62)",
		margin: "0",
		fontSize: "14px",
		marginTop: "0",
		marginBottom: "0",
	},
	cardTitleWhite: {
		color: "#FFFFFF",
		marginTop: "0px",
		minHeight: "auto",
		fontWeight: "300",
		fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
		marginBottom: "3px",
		textDecoration: "none",
	},
	selectInput: {
		marginTop: "2.5rem",
	},
};

const useStyles = makeStyles(styles);

export default function UserProfile() {
	const [dept, setDept] = React.useState("perishable");
	const [name, setName] = React.useState("");
	const [desc, setDesc] = React.useState("");
	const classes = useStyles();
	const [selectedDate, setSelectedDate] = React.useState(new Date());

	// Event handlers
	const handleDateChange = (date) => {
		setSelectedDate(date);
	};
	const handleDeptChange = (event) => {
		setDept(event.target.value);
	};

	const handleNameChange = (event) => {
		setName(event.target.value);
	};

	const handleDescChange = (event) => {
		setDesc(event.target.value);
	};

	const postData = async (url = "", data) => {
		const response = await axios.post(url, data);

		return response;
	};
	const handleSubmit = () => {
		const data = {
			name: name,
			DoE: Date.parse(selectedDate),
			type: dept,
			des: desc,
		};
		postData(`http://localhost:5000/${dept}/add`, data)
			.then((res) => console.log(res.data))
			.catch((err) => console.log(err));
	};

	return (
		<div>
			<GridContainer>
				<GridItem xs={12} sm={12} md={8}>
					<Card>
						<CardHeader color="primary">
							<h4 className={classes.cardTitleWhite}>
								Edit Profile
							</h4>
							<p className={classes.cardCategoryWhite}>
								Complete your profile
							</p>
						</CardHeader>
						<CardBody>
							<GridContainer>
								<GridItem xs={12} sm={12} md={6}>
									<TextField
										id="standard-basic"
										label="Product Name"
										value={name}
										onChange={handleNameChange}
									/>
								</GridItem>
								<GridItem xs={12} sm={12} md={6}>
									<Select
										value={dept}
										onChange={handleDeptChange}
										className={classes.selectInput}
									>
										<MenuItem value="perishable">
											Perishable
										</MenuItem>
										<MenuItem value="nonperishable">
											Non perishable
										</MenuItem>
										<MenuItem value="daily">
											Daily Ship In/Out
										</MenuItem>
									</Select>
								</GridItem>
							</GridContainer>
							<GridContainer>
								<GridItem xs={12} sm={12} md={6}>
									<MuiPickersUtilsProvider
										utils={DateFnsUtils}
									>
										<KeyboardDatePicker
											disableToolbar
											variant="inline"
											format="dd/MM/yyyy"
											margin="normal"
											id="date-picker-inline"
											label="Expiry date"
											value={selectedDate}
											onChange={handleDateChange}
											disabled={
												dept != "perishable"
													? true
													: false
											}
											KeyboardButtonProps={{
												"aria-label": "change date",
											}}
										/>
									</MuiPickersUtilsProvider>
								</GridItem>
							</GridContainer>
							<GridContainer>
								<GridItem xs={12} sm={12} md={12}>
									<TextField
										id="standard-basic"
										label="Product Description"
										size="medium"
										value={desc}
										onChange={handleDescChange}
									/>
								</GridItem>
							</GridContainer>
						</CardBody>
						<CardFooter>
							<Button
								color="primary"
								onClick={() => handleSubmit()}
							>
								Update Profile
							</Button>
						</CardFooter>
					</Card>
				</GridItem>
			</GridContainer>
		</div>
	);
}
