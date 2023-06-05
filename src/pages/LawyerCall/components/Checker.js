
import { Grid, Checkbox, TextField } from "@mui/material";
import Law from "./Law";
import { useState } from "react";

export default function Checker({law:{name, law_number, quantity}, canBeAccomplice, update, offenses}) {


	const [state, setState] = useState({enable:false, quantity:0, accomplice:true})

	return (
		<Grid container spacing={2} alignItems="center">
			<Grid item xs={1}>
				<Checkbox 	disabled={offenses[law_number] ? offenses[law_number].accomplice : false}
							checked={offenses[law_number] ? offenses[law_number].enable : false}
							onChange={(e) => {
								const st = {enable:e.target.checked, quantity:state.quantity, accomplice:false}
								setState(st);
								update(law_number, st)
							}}
							/>
			</Grid>
			{canBeAccomplice ? 
				<Grid item xs={1}>
					<Checkbox 	disabled={offenses[law_number] ? offenses[law_number].enable : false}
								checked={offenses[law_number] ? offenses[law_number].accomplice : false}
								onChange={(e) => {
									const st = {enable:state.enable, quantity:state.quantity, accomplice:e.target.checked}
									setState(st);
									update(law_number, st)
								}}
					/>
				</Grid>
				: null}
			<Grid item xs={canBeAccomplice ? 10 : quantity ? 8 : 11}>
				<Law law_number={law_number} name={name} />
			</Grid>
			{quantity ? <Grid item xs={3}> <TextField fullWidth value={offenses[law_number] ? offenses[law_number].quantity : 0} variant="outlined" type="number" onChange={(e) => {
				const st = {enable:state.enable, quantity:Number(e.target.value), accomplice:state.accomplice}
				setState(st);
				update(law_number, st)
			}}/></Grid> : null}
		</Grid>
	)
}