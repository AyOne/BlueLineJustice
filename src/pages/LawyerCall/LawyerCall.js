import { Box, Typography, Grid, Divider, TextField, Select, MenuItem, Button, Dialog, DialogTitle, DialogContent, Paper } from '@mui/material';
import offensesJSON from "../../assets/offenses.json";
import Category from "./components/Category.js";
import { useState } from "react";

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


	
	const [formValues, setFormValues] = useState({})
			


	const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString("fr-FR").slice(0, -3))
	const [recapOpen, setRecapOpen] = useState(false)
	//console.log(currentTime)

	const formJSON = [
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
					values:["Phoenix Wright", "Mia Fey", "Samuel Rosenberg"],
					defaultValue:0,
					required:true,
					size:5,
				}
			]
		},
	]




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
					formJSON.map((form, index) => {
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
															<Select defaultValue={type.values[type.defaultValue]} fullWidth={true}>
																{
																	type.values.map((value, index) => {
																		return (
																			<MenuItem value={value} key={index}>{value}</MenuItem>
																		)
																	})
																}
															</Select>
														: type.type === "textField" ?
															<TextField defaultValue={type.defaultValue} fullWidth/>
														: type.type === "timeField" ?
															<TextField defaultValue={type.defaultValue} fullWidth type="time" />
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
									<Category category={offensesJSON[key]} />
								</Grid>
							)
						})
					}
					</Grid>
				</Grid>
				<Grid item xs={12}>
					<Divider />
				</Grid>
				<Grid item xs={12}>
					<Button variant="text" color="primary" onClick={() => setRecapOpen(true)}>Envoyer</Button>
				</Grid>

			</Grid>
		</Box>
	)
}