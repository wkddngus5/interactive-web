import React, { useEffect } from 'react';
import './World.css';

function World() {
	useEffect( () => {
		const houseElement = document.querySelector('.house');
		const barElement = document.querySelector('.progress__bar');
		const stageElement = document.querySelector('.stage');
		let maxScrollValue = document.body.offsetHeight - window.innerHeight;

		function scrollHandler() {
			const scrollPer = (window.pageYOffset / maxScrollValue);
			const zMove = scrollPer * 950 - 500;
			houseElement.style.transform = `translateZ(${ zMove }vw)`;
			barElement.style.width = `${ scrollPer * 100  }%`;
		}

		function resizeHandler() {
			maxScrollValue = document.body.offsetHeight - window.innerHeight;
		}

		function mousemoveHandler(event) {
			const {clientX, clientY} = event;
			const x = (clientX / window.innerWidth * 2)  - 1;
			const y = 1 - (clientY / window.innerHeight * 2);	
			stageElement.style.transform = `rotateY(${x * 10}deg) rotateX(${y * 10}deg)`;
		}

		window.addEventListener('scroll', scrollHandler);
		window.addEventListener('resize', resizeHandler);
		window.addEventListener('mousemove', mousemoveHandler);
	}, []);
	return (
		<div className="world">
			<div className="progress">
				<div className="progress__bar"></div>
			</div>
			<div className="stage">
				<div className="house">
					<div className="house__wall house__wall--left"></div>
					<div className="house__wall house__wall--right"></div>
					<div className="house__wall house__wall--front house__wall--front-a">
						<div className="house__contents">
							<h2 className="house__contents-title">
								Hello!
							</h2>
						</div>
					</div>
					<div className="house__wall house__wall--front house__wall--front-b">
						<div className="house__contents">
							<h2 className="house__contents-title">
								Bonjour!
							</h2>
						</div>
					</div>
					<div className="house__wall house__wall--front house__wall--front-c">
						<div className="house__contents">
							<h2 className="house__contents-title">
								Namaste!
							</h2>
						</div>
					</div>
					<div className="house__wall house__wall--front house__wall--front-d">
						<div className="house__contents">
							<h2 className="house__contents-title">
							안녕하세요!
							</h2>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default World;
