
import { Grid, Checkbox, TextField } from "@mui/material";
import Law from "./Law";

export default function Checker({law:{name, law_number, quantity}, offense}) {

	//const checkbox_size = 
	//console.log(name, law_number, offense)

	return (
		<Grid container spacing={2} alignItems="center">
			{offense ? 
				<Grid item xs={1}>
					<Checkbox />
				</Grid>
				: null}
			<Grid item xs={1}>
				<Checkbox />
			</Grid>
			<Grid item xs={offense ? 10 : quantity ? 8 : 11}>
				<Law law_number={law_number} name={name} />
			</Grid>
			{quantity ? <Grid item xs={3}> <TextField fullWidth variant="outlined" type="number" /></Grid> : null}
		</Grid>
	)
}