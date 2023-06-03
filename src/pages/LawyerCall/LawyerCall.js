import { Box, Typography, Grid, Divider, TextField, Select, MenuItem, Button, Dialog, DialogTitle, DialogContent, Paper } from '@mui/material';
import offensesJSON from "../../assets/offenses.json";
import Category from "./components/Category.js";
import { useState, useEffect } from "react";

export default function LawerCall(props) {

	const matriculePrefix = [
		"E",
		"D",
		"Marshal",
		"_",
	]

	const city = [
		"Los Santos",
		"Sandy Shores",
		"Paleto",
		"Roxwood Country",
	]

	const lawyers = [
		"Phoenix Wright",
		"Mia Fey",
		"Samuel Rosenberg",
	]
			
	const currentTime = new Date().toLocaleTimeString("fr-FR").slice(0, -3)

	//const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString("fr-FR").slice(0, -3))
	const [recapOpen, setRecapOpen] = useState(false)
	//console.log(currentTime)

	const formFields = [
		{
			enable:true,
			name:"CallMatricule",
			types:[
				{
					type:"text",
					label:"matricule de l'agent réalisant l'appel : ",
					required:true,
					size:7
				},
				{
					type:"select",
					label:"matriculePrefix",
					values:matriculePrefix,
					defaultValue:2,
					required:true,
					size:1,
				},
				{
					type:"textField",
					label:"matriculeSuffix",
					defaultValue:"Dick Tektiv",
					required:true,
					size:4,
				}
			]
		},
		{
			enable:true,
			name: "ArrestMatricule",
			types:[
				{
					type:"text",
					label:"matricule de l'agent en charge de l'arrestation : ",
					required:true,
					size:7
				},
				{
					type:"select",
					label:"matriculePrefix",
					values:matriculePrefix,
					defaultValue:2,
					required:true,
					size:1,
				},
				{
					type:"textField",
					label:"matriculeSuffix",
					defaultValue:"Dick Tektiv",
					required:true,
					size:4,
				}
			]
		},
		{
			enable:true,
			name: "offenderName",
			types:[
				{
					type:"text",
					label:"Nom et prénom du contrevenant : ",
					required:true,
					size:7,
				},
				{
					type:"textField",
					label:"Name",
					defaultValue:"Paul Defès",
					required:true,
					size:5,
				}
			]
		},
		{
			enable:true,
			name: "LawyerTime",
			types:[
				{
					type:"text",
					label:"Heure de la demande du contrevenant de l'appel avocat :",
					required:true,
					size:7,
				},
				{
					type:"timeField",
					label:"Time",
					defaultValue:currentTime,
					required:true,
					size:5,
				}
			]
		},
		{
			enable:true,
			name: "ArrestTime",
			types:[
				{
					type:"text",
					label:"Heure de l'arrestation : ",
					required:true,
					size:7,
				},
				{
					type:"timeField",
					label:"Time",
					defaultValue:currentTime,
					required:true,
					size:5,
				}
			]
		},
		{
			enable:true,
			name: "MirandaTime",
			types:[
				{
					type:"text",
					label:"Heure de lecture des droits miranda : ",
					require:true,
					size:7
				},
				{
					type:"timeField",
					label:"Time",
					defaultValue:currentTime,
					required:true,
					size:5,
				}
			]
		},
		{
			enable:true,
			name: "DetentionTime",
			types:[
				{
					type:"text",
					label:"Heure de mise en garde a vue : ",
					required:true,
					size:7,
				},
				{
					type:"timeField",
					label:"Time",
					defaultValue:currentTime,
					required:true,
					size:5,
				}
			]
		},
		{
			enable:true,
			name: "DetentionPlace",
			types:[
				{
					type:"text",
					label:"Lieu de la mise en garde a vue : ",
					required:true,
					size:7,
				},
				{
					type:"select",
					label:"City",
					values:city,
					defaultValue:0,
					required:true,
					size:5,
				}
			]
		},
		{
			enable:true,
			name: "Lawyer",
			types:[
				{
					type:"text",
					label:"Avocat demander par le contrevenant : ",
					required:true,
					size:7,
				},
				{
					type:"select",
					label:"Lawyer",
					values:lawyers,
					defaultValue:0,
					required:true,
					size:5,
				}
			]
		},
	]


	const [formValues, setFormValues] = useState([])
	const [offenses, setOffenses] = useState({})






	const updateOffense = (law_number, state = undefined) => {
		const offensesTemp = offenses
		if (state !== undefined) {
			offensesTemp[law_number] = state
		}else{
			offensesTemp[law_number].enable = !offensesTemp[law_number].enable
		}
		setOffenses(offensesTemp)
	}

	const updateForm = (form_field, value) => {
		const formValuesTemp = formValues
		formValuesTemp[form_field] = value
		setFormValues(formValuesTemp)
	}




	/*
	const saveToLocal = () => {
		const defaultValue = JSON.stringify({enable:false, quantity:0, accomplice:false})
		Object.keys(offensesJSON).forEach((key) => {
			const category = offensesJSON[key]
			for (let i = 0; i < category.laws.length; i++) {
				const law = category.laws[i];
				if (offenses[law.name] === undefined) offenses[law.name] = defaultValue;
				else localStorage.setItem(law.law_number, JSON.stringify(offenses[law.name]))
			}
		})
	}

	const loadFromLocal = () => {
		const offensesTemp = {}
		Object.keys(offensesJSON).forEach((key) => {
			const category = offensesJSON[key]
			for (let i = 0; i < category.laws.length; i++) {
				const law = category.laws[i];
				offensesTemp[law.name] = JSON.parse(localStorage.getItem(law.law_number)) || {enable:false, quantity:0}
			}
		})
		setOffenses(offensesTemp)
	}
	

	const printLocal = () => {
		console.log("printLocal");
		Object.keys(offensesJSON).forEach((key) => {
			const category = offensesJSON[key]
			for (let i = 0; i < category.laws.length; i++) {
				const law = category.laws[i];
				console.log(law.law_number, JSON.parse(localStorage.getItem(law.law_number)))
			}
		})
	}

	const printOffenses = () => {
		console.log("printOffenses");
		Object.keys(offensesJSON).forEach((key) => {
			const category = offensesJSON[key]
			for (let i = 0; i < category.laws.length; i++) {
				const law = category.laws[i];
				console.log(law.law_number, offenses[law.name])
			}
		})
	}

	*/
		

	const initDefaultFormValues = () => {
		const formValuesTemp = []
		formFields.forEach((form_field) => {
			formValuesTemp[form_field.name] = ""
		})
		setFormValues(formValuesTemp)
	}

	const initDefaultOffensesValues = () => {
		const offensesTemp = {}
		Object.keys(offensesJSON).forEach((key) => {
			const category = offensesJSON[key]
			for (let i = 0; i < category.laws.length; i++) {
				const law = category.laws[i];
				offensesTemp[law.name] = {enable:false, quantity:0, accomplice:false}
			}
		})
		setOffenses(offensesTemp)
	}



	useEffect(() => {
		initDefaultFormValues();
		initDefaultOffensesValues();

		async function fetchData() {
			// call for the database to get :
			// - the list of all the laws
			// - the list of all the lawyers
			// - the list of all the cities
			// - the list of all the matricule prefix
			// - the list of all the form fields
		}
		
		
		
		fetchData().then(() => {
			// build the values of the form and laws
			
			// load the local storage into the form or create it if it doesn't exist
			//loadFromLocal();

			// save the form into the local storage
			//saveToLocal();
		})
	}, [])





	return (
		<Box sx={{
			display:"flex",
			alignItems:"center",
			justifyContent:"center",
			align:"center",
			maxWidth:"80%",
			margin:"5% auto 5% auto"
		}}>



			
			<Dialog open={recapOpen} onClose={() => setRecapOpen(false)} PaperProps={{style:{maxWidth:"calc(70% - 64px)", backgroundColor:'#FF000000', boxShadow: 'none', backgroundImage:'none'}}}>
				<Grid container spacing={5}>
					<Grid item xs={6}>
						<Paper>
							<Divider role="presentation">
								<DialogTitle>Recapitulatif #1</DialogTitle>
							</Divider>
							<DialogContent>
								{
									formValues.map((value, index) => {
										console.log(value, index)
										return (
											<Typography variant="h6" key={index}>{formValues[index]}</Typography>
										)
									})
								}
							</DialogContent>
						</Paper>
					</Grid>
					<Grid item xs={6}>
						<Paper>
							<Divider role="presentation">
								<DialogTitle>Recapitulatif #1</DialogTitle>
							</Divider>
							<DialogContent>
								<Typography variant="h6">Iamque lituis cladium concrepantibus internarum non celate ut antea turbidum saeviebat ingenium a veri consideratione detortum et nullo inpositorum vel conpositorum fidem sollemniter inquirente nec discernente a societate noxiorum insontes velut exturbatum e iudiciis fas omne discessit, et causarum legitima silente defensione carnifex rapinarum sequester et obductio capitum et bonorum ubique multatio versabatur per orientales provincias, quas recensere puto nunc oportunum absque Mesopotamia digesta, cum bella Parthica dicerentur, et Aegypto, quam necessario aliud reieci ad tempus.</Typography>
							</DialogContent>
						</Paper>
					</Grid>
					<Grid item xs={6}>
						<Paper>
							<Divider role="presentation">
								<DialogTitle>Recapitulatif #1</DialogTitle>
							</Divider>
							<DialogContent>
								<Typography variant="h6">Iamque lituis cladium concrepantibus internarum non celate ut antea turbidum saeviebat ingenium a veri consideratione detortum et nullo inpositorum vel conpositorum fidem sollemniter inquirente nec discernente a societate noxiorum insontes velut exturbatum e iudiciis fas omne discessit, et causarum legitima silente defensione carnifex rapinarum sequester et obductio capitum et bonorum ubique multatio versabatur per orientales provincias, quas recensere puto nunc oportunum absque Mesopotamia digesta, cum bella Parthica dicerentur, et Aegypto, quam necessario aliud reieci ad tempus.</Typography>
							</DialogContent>
						</Paper>
					</Grid>
					<Grid item xs={6}>
						<Paper>
							<Divider role="presentation">
								<DialogTitle>Recapitulatif #1</DialogTitle>
							</Divider>
							<DialogContent>
								<Typography variant="h6">Iamque lituis cladium concrepantibus internarum non celate ut antea turbidum saeviebat ingenium a veri consideratione detortum et nullo inpositorum vel conpositorum fidem sollemniter inquirente nec discernente a societate noxiorum insontes velut exturbatum e iudiciis fas omne discessit, et causarum legitima silente defensione carnifex rapinarum sequester et obductio capitum et bonorum ubique multatio versabatur per orientales provincias, quas recensere puto nunc oportunum absque Mesopotamia digesta, cum bella Parthica dicerentur, et Aegypto, quam necessario aliud reieci ad tempus.</Typography>
							</DialogContent>
						</Paper>
					</Grid>
				</Grid>
			</Dialog>





















			<Grid container spacing={2} alignItems="center">
				<Grid item xs={12}>
					<Divider role="presentation">
						<Typography variant="h3">
							Appel Avocat
						</Typography>
					</Divider>
				</Grid>
				
				{
					formFields.map((form, index) => {
						return (
							<Grid item xs={12} key={index}>
								<Grid container spacing={2} alignItems="center">
									{
										form.types.map((type, index) => {
											return (
												<Grid item xs={type.size} key={index}>
													{
														type.type === "text" ?
															<Typography variant="h5">{type.label}</Typography>
														: type.type === "select" ?
															<Select defaultValue={type.values[type.defaultValue]} fullWidth={true} onChange={(e) => {updateForm(form.name, e.target.value)}}>
																{
																	type.values.map((value, index) => {
																		return (
																			<MenuItem value={value} key={index}>{value}</MenuItem>
																		)
																	})
																}
															</Select>
														: type.type === "textField" ?
															<TextField defaultValue={type.defaultValue} fullWidth onChange={(e) => {updateForm(form.name, e.target.value)}}/>
														: type.type === "timeField" ?
															<TextField defaultValue={currentTime} fullWidth type="time" onChange={(e) => {updateForm(form.name, e.target.value)}}/>
														: null
													}
												</Grid>
											)
										})
									}
								</Grid>
							</Grid>
						)
					})
				}






				<Grid item xs={12}>
					<Divider />
				</Grid>
				<Grid item xs={12}>
					<Grid container spacing={2}>
					{
						Object.keys(offensesJSON).map((key) => {
							return (
								<Grid item xs={4} key={key}>
									<Category category={offensesJSON[key]} update={updateOffense} />
								</Grid>
							)
						})
					}
					</Grid>
				</Grid>
				<Grid item xs={12}>
					<Divider />
				</Grid>
				<Grid item xs={2}>
					<Button variant="contained" color="primary" fullWidth>Reset</Button>
				</Grid>
				<Grid item xs={8}/>
				<Grid item xs={2}>
					<Button variant="contained" color="primary" fullWidth onClick={() => {console.log("click");setRecapOpen(true)}}>Recap</Button>
				</Grid>

			</Grid>
		</Box>
	)
}