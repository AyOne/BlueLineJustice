
import { Grid, Typography, Accordion, AccordionSummary, AccordionDetails }	from "@mui/material";
import Checker from "./Checker.js";

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Category({category, update, offenses}) {

	//console.log(category)


	return (
		<Accordion>
			<AccordionSummary expandIcon={<ExpandMoreIcon />}>
				<Typography variant="h5">{category.name}</Typography>
			</AccordionSummary>
			<AccordionDetails>
				{
					category.laws.map((law, index) => {/*console.log(law);*/return (
						<Grid item xs={12} key={index}>
							<Checker law={law} canBeAccomplice={category.canBeAccomplice} offenses={offenses} update={update} />
						</Grid>
					)})
				}
			</AccordionDetails>
		</Accordion>
	)
}