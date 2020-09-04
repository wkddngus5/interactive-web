import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
	return (
		<div>
			<Link to="/world">
				Transform World
			</Link>
		</div>
	)
}

export default Home;
