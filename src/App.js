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


		{/*<section className="logo-container">
			<section className="logo"> 
				<p className="title-text">
					The 
					Hard <br />
					Problem <br />
				</p>
			</section>
		</section>*/}

		<section className="logo-container">
			<section  className="logo-container-inner">
				<section className="animated-logo"> 
				
				</section>
	
				<p className="title-text">
					The 
					Hard <br />
					Problem <br />
				</p>
			</section>
			
		</section>



		<section className="body">

			<section className="test-sword-container">
				<section className="test-sword">
				test test test test test test test test test test test test test test test test test test test test test test test test test test test 
				</section>
			</section>

			<section class="box">
				<img class="clipped-image" src="https://homepages.cae.wisc.edu/~ece533/images/arctichare.png" />
				<p class="clipped-text">
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
				</p>
			</section>

				<section className="brain-image test-width"></section>
				<section className="apple test-width"></section>
				<section className="bat test-width"></section>
				<section className="text-box" >
					The hard problem of consciousness is one of the hardest problems in philosophy today. In simple terms, it asks "why is it like something to have the experiences we have?"
				</section>

				
				<div className="brain-image"></div>
				<div className="apple"></div>
				<div className="bat"></div>
				

				<div className="hexagone"></div>

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
