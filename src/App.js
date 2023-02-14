import logo from './logo.svg';
import './App.css';

function App() {
	return (
		<section className="App">
		{/*<header className="App-header">
			<p className="page-title">
			The <br />
			Hard <br />
			Problem
			</p>        
		</header>*/}


		<section className="logo-container">
			<div className="logo"> 
				
			</div>

			<p className="title-text">
				The 
				Hard <br />
				Problem <br />
			</p>
			
		</section>

		<section className="body">
			<section className="text-box" >
				The hard problem of consciousness is one of the hardest problems in philosophy today. In simple terms, it asks "why is it like something to have the experiences we have?"
			</section>

			<div className="hexagone"></div>
			<div className="triangle"></div>
			<div className="star" ></div>
			<div className="arrow" ></div>
			<div className="custom"></div>
			<div className="brain-image"></div>
			<div className="test"> blah </div>
		</section>
		


		
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 841.9 595.3">
			
			<defs>
				<filter id="round">
					<feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />    
					<feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
					<feComposite in="SourceGraphic" in2="goo" operator="atop"/>
				</filter>
			</defs>
		</svg>

		</section>
	);
}

export default App;
