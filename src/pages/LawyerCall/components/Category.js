
import { Grid, Typography, Divider, Accordion, AccordionSummary, AccordionDetails }	from "@mui/material";
import Checker from "./Checker.js";

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Category({category}) {

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
							<Checker law={law} offense={category.offense} />
						</Grid>
					)})
				}
			</AccordionDetails>
		</Accordion>
	)






	return (
		<Grid container spacing={2}>
			<Grid item xs={12}>
				<Typography variant="h4">{category.name}</Typography>
			</Grid>
			<Grid item xs={12}>
				<Divider />
			</Grid>
			{category.laws.map((law, index) => {/*console.log(law);*/return (
				<Grid item xs={12} key={index}>
					<Checker law={law} offense={category.offense} />
				</Grid>
			)})}
		</Grid>
	)

}