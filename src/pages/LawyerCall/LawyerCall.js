import { Box, Typography, Grid, Divider, TextField } from '@mui/material';
import offensesJSON from "../../assets/offenses.json";
import Category from "./components/Category.js";

export default function LawerCall(props) {


	






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
				<Grid item xs={3}>
					<Typography variant="h6">matricule de l'agent réalisant l'appel : </Typography>
				</Grid>
				<Grid item xs={9}>
					<TextField fullWidth variant="outlined" />
				</Grid>
				<Grid item xs={3}>
					<Typography variant="h6">matricule de l'agent en charge de l'arrestation : </Typography>
				</Grid>
				<Grid item xs={9}>
					<TextField fullWidth variant="outlined" />
				</Grid>
				<Grid item xs={3}>
					<Typography variant="h6">Nom et prénom du contrevenant : </Typography>
				</Grid>
				<Grid item xs={9}>
					<TextField fullWidth variant="outlined" />
				</Grid>
				<Grid item xs={3}>
					<Typography variant="h6">Heure de la mise en garde a vue : </Typography>
				</Grid>
				<Grid item xs={9}>
					<TextField fullWidth variant="outlined" />
				</Grid>
				<Grid item xs={3}>
					<Typography variant="h6">Heure de la demande du contrevenant de l'appel avocat : </Typography>
				</Grid>
				<Grid item xs={9}>
					<TextField fullWidth variant="outlined" />
				</Grid>
				<Grid item xs={3}>
					<Typography variant="h6">Avocat : </Typography>
				</Grid>
				<Grid item xs={9}>
					<TextField fullWidth variant="outlined" />
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