
import { Grid, Checkbox } from "@mui/material";
import Law from "./Law";

export default function Checker({law:{name, law_number}, offense}) {

	//const checkbox_size = 
	console.log(name, law_number, offense)

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
			<Grid item xs={offense ? 10 : 11}>
				<Law law_number={law_number} name={name} />
			</Grid>
		</Grid>
	)
}