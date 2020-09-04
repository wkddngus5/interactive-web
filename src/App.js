import React from 'react';
import Home from './components/Home';
import World from './components/World';
import BBCCovid19 from './components/BBCCovid19';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
	
	return (
		<BrowserRouter>
			<Route path="/" exact component={Home} />
			<Route path="/world" component={World} />
			<Route path="/bbc-covid19" component={BBCCovid19} />
		</BrowserRouter>
	);
}

export default App;
