import { Box, Typography, Grid } from '@mui/material';
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
			<Typography variant="h3">LawyerCall</Typography>
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
		</Box>
	)
}