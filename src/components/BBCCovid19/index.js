import React, { useEffect } from 'react';
import introImage from '../../images/intro.png';
import coffeeImage from '../../images/coffee.png';
import runningImage from '../../images/running.png';
import workingImage from '../../images/working.png';
import eatingImage from '../../images/eating.png';
import working2Image from '../../images/working2.png';
import ramenImage from '../../images/ramen.png';
import yogaImage from '../../images/yoga.png';
import sleepingImage from '../../images/sleeping.png';
import birdImage from '../../images/bird.gif';
import './BBCCovid19.css';


// 1. CSS position: sticky로 배경 이미지를 고정
// 2. intersectionObserver.observe로 step elements를 관찰하다가
// 	스크롤 이벤트마다 관찰대상 step의 index에 해당하는 graphic의 visible 상태를 갱신
// 3. active function 안에 action이 있으면, translate를 바꿔주는 등의 action을 실행한다.


function BBCCovid19() {
	useEffect( () => {
		const stepElements =  document.querySelectorAll( '.step' );
		const graphicElements =  document.querySelectorAll( '.graphic-item' );
		let visibleItem = graphicElements[0];

		const actions = {
			birdFlies(key) {
				if ( key ) {
					document.querySelector( '[data-index="2"] .bird' ).style.transform = `
					translateX(${window.innerWidth}px)`;
				} else {
					document.querySelector( '[data-index="2"] .bird' ).style.transform = `
					translateX(-100%)`;
				}
			},
			birdFlies2(key) {
				if ( key ) {
					document.querySelector( '[data-index="5"] .bird' ).style.transform = `
					translate(${window.innerWidth}px, -${window.innerHeight}px)`;
				} else {
					document.querySelector( '[data-index="5"] .bird' ).style.transform = `
					translate(0)`;
				}
			},
		}
		let ioIndex;

		const io = new IntersectionObserver(( entries, observer ) => {
			ioIndex = entries[0].target.dataset.index;

		});

		function activate(action) {
			visibleItem.classList.add( 'visible' );
			if ( action ) {
				actions[action](true);
			}
		}
		
		function inactivate(action) {
			visibleItem.classList.remove( 'visible' );
			if ( action ) {
				actions[action](false);
			}
		}

		for ( let index = 0; index < stepElements.length; index++ ) {
			io.observe(stepElements[index]);
			stepElements[index].dataset.index = index;
			graphicElements[index].dataset.index = index;
		}

		window.addEventListener('scroll', () => {
			let step;
			let boundingRect;

			for ( let index = ioIndex - 1; index < ioIndex + 2; index++ ) {
				step = stepElements[index];
				if ( !step ) {
					continue;
				}
				boundingRect = step.getBoundingClientRect();
				
				if ( boundingRect.top > window.innerHeight * 0.1 && boundingRect.top < window.innerHeight * 0.8 ) {
					inactivate(visibleItem.dataset.action);
					visibleItem = graphicElements[step.dataset.index];
					activate(visibleItem.dataset.action);
				}
			}
		});
		activate();
	}, []);

	return (
		<div className="BBCCovid19">
			<header className="header">
				<div className="global-width">
					<h1 className="page-title">코로나19 시대, 제주 사는 개발자의 하루</h1>
					<p>
						이 페이지는 BBC 비주얼저널리즘 팀에서 제작한
						<a href="https://www.bbc.com/korean/resources/idt-48d3c9a7-4063-4289-9726-611b5ea9d7b5" target="_blank">
							'재택근무의 일상화'... 코로나19가 바꿀 사무실의 미래</a> 페이지를 비슷하게 구현해 본 개발 예제입니다. 시각적 기능만 비슷하게 만들어 본 것이므로, 개발 방식은 전혀 다를 수도 있습니다.<br />
							아래의 내용은 제주 바닷가에 사는 개발자인 저의 실제 일상이기도 하지만, 강의영상 예제로 만든 페이지이므로 내용에 큰 의미를 두고 보실 필요는 없습니다 ㅎㅎ<br />
							밑으로 스크롤 해봅시다.
					</p>
				</div>
			</header>

			<section className="scroll-content">
				<div className="scroll-graphic">
					<div className="graphic-item"><img className="scene-img" src={ introImage } alt="" /></div>
					<div className="graphic-item"><img className="scene-img" src={ coffeeImage } alt="" /></div>
					<div className="graphic-item" data-action="birdFlies">
						<img className="bird" src={ birdImage } alt="" />
						<img className="scene-img" src={ runningImage } alt="" />
					</div>
					<div className="graphic-item"><img className="scene-img" src={ birdImage } alt="" /></div>
					<div className="graphic-item"><img className="scene-img" src={ workingImage } alt="" /></div>
					<div className="graphic-item" data-action="birdFlies2">
						<img className="bird" src={ birdImage } alt="" />
						<img className="scene-img" src={ eatingImage } alt="" />
					</div>
					<div className="graphic-item"><img className="scene-img" src={ working2Image } alt="" /></div>
					<div className="graphic-item"><img className="scene-img" src={ ramenImage } alt="" /></div>
					<div className="graphic-item"><img className="scene-img" src={ yogaImage } alt="" /></div>
					<div className="graphic-item"><img className="scene-img" src={ sleepingImage } alt="" /></div>
				</div>
				<div className="scroll-text global-width">
					<div className="step">
						<p>
							일분이를 소개한다.<br /><br /><a href="https://studiomeal.com" target="_blank">1분코딩</a>의 마스코트이며 제주 바닷가에 사는 개발자인 일분이는 코로나19 이전부터 재택근무를 해왔지만, 코로나19는 일분이의 생활에도 변화를 주었다.
						</p>
					</div>
					<div className="step">
						<p>
							아침에 일어나면, 커피를 내리며 정신을 차린다.
						</p>
					</div>
					<div className="step">
						<p>
							사회적 거리두기를 위해 한적한 바닷길쪽으로 러닝을 한다.<br />가끔 만나는 바닷새와 눈인사를 나눈다.
						</p>
					</div>
					<div className="step">
						<p>
							맞다, 트위터의 걔.
						</p>
					</div>
					<div className="step">
						<p>
							운동을 마치고 집에 돌아와 작업을 시작한다.
						</p>
					</div>
					<div className="step">
						<p>
							밥은 집에서 먹거나, 테이크아웃이 가능한 메뉴를 골라 탁 트인 야외에서 먹는다. 물론 사회적 거리두기를 하기 위함이다.
						</p>
					</div>
					<div className="step">
						<p>
							보통 오후 작업은 집 근처의 일하기 좋은 카페에서 해왔지만, 코로나19 이후에는 집에서 하는 날이 많아졌다.
						</p>
					</div>
					<div className="step">
						<p>
							라면 매니아 답게 유튜브로 <a href="https://www.youtube.com/channel/UCYzTR8jV9_xv1p25N2dNBQQ" target="_blank">라면소녀</a> 채널을 보며 간식으로 라면을 먹는다.
						</p>
					</div>
					<div className="step">
						<p>
							자기 전, 가끔 <a href="https://www.youtube.com/channel/UCkTRKCuFrRiXQm_gMG1uDvg" target="_blank">요가소년</a> 채널을 보며 요가를 한다.
						</p>
					</div>
					<div className="step">
						<p>
							일과를 마치고 <span className="strikethrough">폰질을 한다</span> 잠자리에 든다.
						</p>
					</div>
				</div>
			</section>
			<section className="normal-content global-width">
				<h2>도시를 떠나는 사람들</h2>
				<p>원격근무 하시는 개발자 디자이너분들, 제주로 오세요. 진짜 좋아요. Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ullam culpa ab, laborum repellat ut quae deleniti nostrum sapiente illum!</p>
				<h2>언택트 시대가 온다</h2>
				<p>언택트(Untact)'란 '콘택트(contact: 접촉하다)'에서 부정의 의미인 '언(un-)을 합성한 말로, 기술의 발전을 통해 비대면으로 이루어지는 활동 경향을 의미한다. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam provident voluptatum numquam dolorum, quod odio.</p>
				<h2>내일은 어떤 모습일까</h2>
				<p>똑같겠지 다를게 있나 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui impedit numquam atque quidem quos facere obcaecati deleniti labore culpa esse nostrum dicta earum rem ducimus, voluptates eligendi voluptate exercitationem dolorem!</p>
			</section>
			<footer className="global-footer">
				<a href="https://www.youtube.com/channel/UC_s1FC7s5YVwDImzv-WG93Q" target="blank">1분코딩</a>
			</footer>
		</div>
	)
}

export default BBCCovid19;
