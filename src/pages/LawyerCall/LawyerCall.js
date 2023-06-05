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

	const [recapOpen, setRecapOpen] = useState(false)

	const formFields = {
		callMatricule:{
			enable:true,
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
		arrestMatricule:{
			enable:true,
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
		offenderName:{
			enable:true,
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
		callTime:{
			enable:true,
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
		arrestTime:{
			enable:true,
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
		mirandaTime:{
			enable:true,
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
		detentionTime:{
			enable:true,
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
		detentionPlace:{
			enable:true,
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
		lawyer:{
			enable:true,
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
	}


	const [formValues, setFormValues] = useState({})
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
		

	const initDefaultFormValues = () => {
		const formValuesTemp = {}
		Object.keys(formFields).forEach((form_key) => {
			const form_field = formFields[form_key]
			let defaultValue = form_field.types.map((type) => {
				if (type.type === "text") return;
				if (type.type === "select") return type.values[type.defaultValue]
				else if (type.type === "textField") return type.defaultValue
				else if (type.type === "timeField") return currentTime
				else return ""
			})
			formValuesTemp[form_key] = defaultValue
		})
		setFormValues(formValuesTemp)
	}

	const initDefaultOffensesValues = () => {
		//console.log("Initialisation de ses morts")
		const offensesTemp = {}
		Object.keys(offensesJSON).forEach((key) => {
			const category = offensesJSON[key]
			for (let i = 0; i < category.laws.length; i++) {
				const law = category.laws[i];
				offensesTemp[law.law_number] = {enable:false, quantity:0, accomplice:false}
			}
		})
		setOffenses(offensesTemp)
	}

	const renderFormValues = (values) => {
		//console.log("Initialisation de ses morts mais pour la forme")
		console.log(values)
		let formattedValues = ""
		values.forEach((value, index) => {
			if (index === 0) return;
			formattedValues += value
			if (index !== values.length - 1) formattedValues += " "
		})
		return formattedValues
	}

	const renderOffense = (law_number, ) => {
		// I need a reference to the offense object but I can't get the law
		// with only the law number :( I'll find a way later
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
									Object.keys(formValues).map((key, index) => {
										//console.log(key, formValues[key])
										return (
											<Typography variant="h6" key={index}>{key} : {renderFormValues(formValues[key])}</Typography>
										)
									})
								}
								<Divider/>
								{
									Object.keys(offenses).map((key, index) => {
										if (!offenses[key].enable) return;
										return (
											<Typography variant="h6" key={index}>{key} : {offenses[key].enable ? "true" : "false"} {offenses[key].quantity} {offenses[key].accomplice ? "true" : "false"}</Typography>
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
					Object.keys(formFields).map((form_key, index) => {
						const form = formFields[form_key]
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
									<Category category={offensesJSON[key]} update={updateOffense} offenses={offenses} />
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
					<Button variant="contained" color="primary" fullWidth>Recherche</Button>
				</Grid>
				<Grid item xs={8}/>
				<Grid item xs={2}>
					<Button variant="contained" color="primary" fullWidth onClick={() => {setRecapOpen(true)}}>Recap</Button>
				</Grid>

			</Grid>
		</Box>
	)
}