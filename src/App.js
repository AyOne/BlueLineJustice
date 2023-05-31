
import LawerCall from "./pages/LawyerCall/LawyerCall";
import { Box, createTheme, CssBaseline, ThemeProvider } from "@mui/material";






export default function App() {



	//https://bareynol.github.io/mui-theme-creator/
	const darkTheme = createTheme({
		palette: {
			mode: 'dark',
			primary: {
				main: '#6170c5',
			},
			secondary: {
				main: '#f50057',
			},
			background: {
				default:"#303030",
				paper:"#424242"
			}
		},
	});

	const lightTheme = createTheme({
		palette:{
			mode:"light",
		},
	});




	const urlToView = () => {
		const url = window.location.pathname;
		switch (url) {
			case "/":
				return <LawerCall />
			default:
				return <h1>404</h1>
		}
	}

	const isUrlDark = () => {
		const url = window.location.pathname;
		switch (url) {
			case "/":
				return true;
			default:
				return false;
		}
	}


	return (
		<ThemeProvider theme={isUrlDark() ? darkTheme : lightTheme}>
			<CssBaseline />
			<Box sx={{
				width:"100vw",
        		height:"100vh",
				overflowX:"hidden",
				overflowY:"scroll",
				display:"flex",
				flexDirection:"column"
			}}>
				<Box sx={{
					width:1,
					flexGrow:1,
				}}>
					{urlToView()}
				</Box>
			</Box>
		</ThemeProvider>
	)









}
