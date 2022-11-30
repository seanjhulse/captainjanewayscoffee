import { h } from 'preact';
import { Router } from 'preact-router';

import Header from './header';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';
import Janeway from '../routes/janeway';
import PhotoGenerator from './photo-generator';

const App = () => (
	<div id="app">
		<Header />
		<PhotoGenerator />
		<Router>
			<Home path="/" />
			<Janeway path="/janeway" />
		</Router>
	</div>
)

export default App;
