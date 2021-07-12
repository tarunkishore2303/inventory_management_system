/* eslint-disable prettier/prettier */
import React from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import LocalGroceryStoreIcon from "@material-ui/icons/LocalGroceryStore";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import Danger from "components/Typography/Danger.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import { dailySalesChart } from "variables/charts.js";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);

export default function Dashboard() {
	const arrayHelper = (array) => {
		const newArray = array.map((element) => {
			return Object.values(element);
		});
		return newArray;
	};
	const classes = useStyles();
	const [managers, setManagers] = React.useState([]);
	const [perishable, setPerishable] = React.useState(0);
	const [nonperishable, setnonPerishable] = React.useState(0);
	const [daily, setDaily] = React.useState(0);
	const [workers, setWorkers] = React.useState(0);
	React.useEffect(() => {
		fetch("http://localhost:5000/managers")
			.then((res) => res.json())
			.then((res) => setManagers(arrayHelper(res)))
			.catch((err) => console.log(err));
	});
	React.useEffect(() => {
		fetch("http://localhost:5000/perishable")
			.then((res) => res.json())
			.then((res) => setPerishable(res.length))
			.catch((err) => console.log(err));
	});
	React.useEffect(() => {
		fetch("http://localhost:5000/nonperishable")
			.then((res) => res.json())
			.then((res) => setnonPerishable(res.length))
			.catch((err) => console.log(err));
	});
	React.useEffect(() => {
		fetch("http://localhost:5000/workers")
			.then((res) => res.json())
			.then((res) => setWorkers(res.length))
			.catch((err) => console.log(err));
	});
	React.useEffect(() => {
		fetch("http://localhost:5000/daily")
			.then((res) => res.json())
			.then((res) => setDaily(res.length))
			.catch((err) => console.log(err));
	});
	return (
		<div>
			<GridContainer>
				<GridItem xs={12} sm={6} md={3}>
					<Card>
						<CardHeader color="warning" stats icon>
							<CardIcon color="warning">
								<LocalGroceryStoreIcon />
							</CardIcon>
							<p className={classes.cardCategory}>Perishable</p>
							<h3 className={classes.cardTitle}>{perishable}</h3>
						</CardHeader>
						<CardFooter stats>
							<div className={classes.stats}>
								<Danger>
									<Warning />
								</Danger>
							</div>
						</CardFooter>
					</Card>
				</GridItem>
				<GridItem xs={12} sm={6} md={3}>
					<Card>
						<CardHeader color="success" stats icon>
							<CardIcon color="success">
								<Store />
							</CardIcon>
							<p className={classes.cardCategory}>
								Daily Ship In/Out
							</p>
							<h3 className={classes.cardTitle}>{daily}</h3>
						</CardHeader>
						<CardFooter stats>
							<div className={classes.stats}>
								<DateRange />
							</div>
						</CardFooter>
					</Card>
				</GridItem>
				<GridItem xs={12} sm={6} md={3}>
					<Card>
						<CardHeader color="danger" stats icon>
							<CardIcon color="danger">
								<PhoneAndroidIcon />
							</CardIcon>
							<p className={classes.cardCategory}>
								Non perishable
							</p>
							<h3 className={classes.cardTitle}>
								{nonperishable}
							</h3>
						</CardHeader>
						<CardFooter stats>
							<div className={classes.stats}>
								<LocalOffer />
							</div>
						</CardFooter>
					</Card>
				</GridItem>
				<GridItem xs={12} sm={6} md={3}>
					<Card>
						<CardHeader color="info" stats icon>
							<CardIcon color="info">
								<Accessibility />
							</CardIcon>
							<p className={classes.cardCategory}>Worker count</p>
							<h3 className={classes.cardTitle}>{workers}</h3>
						</CardHeader>
						<CardFooter stats>
							<div className={classes.stats}>
								<Update />
							</div>
						</CardFooter>
					</Card>
				</GridItem>
			</GridContainer>
			<GridContainer>
				<GridItem xs={12} sm={12} md={4}>
					<Card chart>
						<CardHeader color="success">
							<ChartistGraph
								className="ct-chart"
								data={dailySalesChart.data}
								type="Line"
								options={dailySalesChart.options}
								listener={dailySalesChart.animation}
							/>
						</CardHeader>
						<CardBody>
							<h4 className={classes.cardTitle}>Daily Sales</h4>
							<p className={classes.cardCategory}></p>
						</CardBody>
						<CardFooter chart>
							<div className={classes.stats}>
								<AccessTime /> updated 4 minutes ago
							</div>
						</CardFooter>
					</Card>
				</GridItem>
				<GridItem xs={12} sm={12} md={8}>
					<Card>
						<CardHeader color="warning">
							<h4 className={classes.cardTitleWhite}>
								Employees Stats
							</h4>
							<p className={classes.cardCategoryWhite}></p>
						</CardHeader>
						<CardBody>
							<Table
								tableHeaderColor="warning"
								tableHead={["Name", "Designation", "Mail"]}
								tableData={managers}
							/>
						</CardBody>
					</Card>
				</GridItem>
			</GridContainer>
			<GridContainer></GridContainer>
		</div>
	);
}
