import { h } from 'preact';
import { Router } from 'preact-router';
import { Box } from '@material-ui/core';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import Header from './header';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';
import Janeway from '../routes/janeway';
import PhotoGenerator from './photo-generator';

const theme = createTheme({
	palette: {
		mode: "dark"
	}
});

const App = () => (
	<ThemeProvider theme={theme}>
		<CssBaseline />
		<div id="app">
			<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
			<Header />
			<PhotoGenerator />
			<Box style={{paddingTop: "4rem"}}>
				<Router>
					<Home path="/" />
					<Janeway path="/janeway" />
				</Router>
			</Box>
		</div>
	</ThemeProvider>
)

export default App;
