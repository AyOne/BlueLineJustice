import { Box, Typography, Grid, Divider, TextField, Select, MenuItem } from '@mui/material';
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


	const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString("fr-FR").slice(0, -3))
	console.log(currentTime)

	const formJSON = [
		{
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
			</Grid>
		</Box>
	)
}