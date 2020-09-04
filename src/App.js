import React from 'react';
import Home from './components/Home';
import World from './components/World';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
	
	return (
		<BrowserRouter>
			<Route path="/" exact component={Home} />
			<Route path="/world" component={World} />
		</BrowserRouter>
	);
}

export default App;
