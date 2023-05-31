
import { Grid, Checkbox } from "@mui/material";
import Law from "./Law";

export default function Checker({law:{name, law_number}, offence}) {

	//const checkbox_size = 
	console.log(name, law_number, offence)

	return (
		<Grid container spacing={2}>
			{offence ? 
				<Grid item xs={1}>
					<Checkbox />
				</Grid>
				: null}
			<Grid item xs={1}>
				<Checkbox />
			</Grid>
			<Grid item xs={offence ? 10 : 11}>
				<Law law_number={law_number} name={name} />
			</Grid>
		</Grid>
	)
}