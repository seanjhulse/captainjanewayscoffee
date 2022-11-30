import { h } from 'preact';
import { Router } from 'preact-router';
import { createTheme, ThemeProvider, CssBaseline, Box } from '@material-ui/core';

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
	<div id="app">
		<ThemeProvider theme={theme}>
			<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
			<CssBaseline />
			<Header />
			<PhotoGenerator />
			<Box style={{paddingTop: "4rem"}}>
				<Router>
					<Home path="/" />
					<Janeway path="/janeway" />
				</Router>
			</Box>
		</ThemeProvider>
	</div>
)

export default App;
