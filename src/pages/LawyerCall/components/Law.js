
import { Typography } from "@mui/material"



export default function Law({law_number, name}) {
	return (
		<Typography noWrap style={{padding:0}} variant="h6">{law_number} : {name}</Typography>
	)
}