import logo from './logo.svg';
import './App.css';


import gsap from "gsap";
import SplitTextJS from 'split-text-js';


import Autoscroll from './Components/Autoscroll.js';
import Scroller from './Components/Scroller.js';



/*let text*/
const titles = gsap.utils.toArray('p');
const tl = gsap.timeline();


titles.forEach(title => {
	const splitTitle = new SplitTextJS(title);
	
	tl
		.from(splitTitle.chars, {
			opacity: 0,
			y: 80,
			rotateX: -90,
			stagger: .005
		}, "<")

		.to(splitTitle.chars, {
			opacity: 1,
			y: 0,
			rotateX: 0,
			stagger: .005
		}, "<1")

});









function App() {
	return (
		<section className="App">

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

				<section className="text-box-container text-box-container-mug green-background">
					<section className="text-box-container-inner
										text-box-container-inner-mug">
						<section className="text-box-container-inner-2">
							<p className="text-box text-box-mug" >
								The hard problem of consciousness is one of the hardest problems in philosophy today. In simple terms, it asks "why is it<span className="like-something blue-text"> like something </span>to have the experiences we have?" Why is it like something to see the color red, smell coffee, or taste blueberries? 
							</p>
						</section>

						<section className="text-box-container-inner-2">
							<p className="text-box text-box-mug" >
								The trouble is, everything in the universe is physical, but consciousness seems to be something different. The experience of red seems to be non-physical, or as the philosophers call it, phenomenal. 
							</p>
						</section>

						<section className="text-box-container-inner-2">
							<p className="text-box text-box-mug" >
								Many solutions to the hard problem have been proposed. Some accept the hard problem, and others say there is no consciousness in this "what it's like" sense. Let's explore some of the arguments.
							</p>
						</section>


					</section>

					
					<section className="svg-container mug-container blue-background"> 
						<section className="mug-container-inner"> 
							<section className="mug"> 

							</section>
						</section>
					</section>
				</section>





				<section className="text-box-container text-box-container-bat yellow-background">

					<section className="bat-container"> 
						<section className="bat-container-inner"> 
							{/*<section className="bat"> 

							</section>*/}

							<svg className="test-animation-guy bat" mlns="http://www.w3.org/2000/svg" viewBox="0 15 80 50">
  								<path d="M 40 25 C 41 25 42 25 43 22 Q 45 25 45 30 C 50 32 60 25 55 15 C 65 15 80 35 80 45 C 75 40 68 42 68 50 C 63 45 55 47 55 55 C 50 50 44 50 40 65 C 36 50 30 50 25 55 C 25 47 18 45 12 50 C 12 42 5 40 0 45 C 0 35 15 15 25 15 C 20 25 30 32 35 30 Q 35 25 37 22 C 38 25 39 25 40 25" fill="#000000"/>
							</svg>
						</section>

						{/*<svg className="test-animation-guy" width="100" height="100" viewBox="0 0 24 24">
							<path d="M21,9H15V22H13V16H11V22H9V9H3V7H21M12,2A2,2 0 0,1 14,4A2,2 0 0,1 12,6C10.89,6 10,5.1 10,4C10,2.89 10.89,2 12,2Z" />
						</svg>*/}

						

					</section>


					<section className="text-box-container-inner
										text-box-container-inner-bat
										purple-background">
						<p className="text-box text-box-bat" >
							What is it like to be a bat? <br />
							We know roughly what it's like to be other humans because they are very similar to us, but what would it be like to be a bat? We may know that they experience life differently from us, using echolocation, and we can maybe consider analogous experiences, but we can never know what it is like for a bat to be a bat, having lived an entire life solely as a bat. 

							<br />
							<br />
							What this shows us is that scientific theories are objective, but our experiences are subjective.
						</p>
					</section>
				</section>



				<section className="text-box-container 
									text-box-container-mary
									">
					<section className="text-box-container-inner text-box-container-inner-mary black-background">
						<p className="text-box text-box-1" >
							Mary's room. <br />

							Imagine a color scientist named Mary. She has lived her entire life in a black and white room, and can only investigate the world using a black and white television monitor. That being said, she knows everything there is to know about the physical descriptions of color, and how the human body interacts with it. Will Mary learn anything when she sees color for the first time?
						</p>
					</section>

					
					<section className="mary-container"> 
						<section className="mary-container-inner"> 
							<section className="mary"> 

							</section>
						</section>
					</section>
				</section>



				<section className="text-box-container text-box-container-zombie blue-background">

					<section className="zombie-container"> 
						<section className="zombie-container-inner"> 
							<section className="mug zombie"> 

							</section>
						</section>
					</section>


					<section className="text-box-container-inner
										text-box-container-inner-zombie
										green-background">
						<p className="text-box text-box-1" >
							Philosophical zombies. <br /> 
							Imagine a person physically identical to a normal person, but who doesn't have a conscious experience. We'll call this person a philosophical zombie. There is nothing it is like to be a zombie. Still, they will behave the same way a normal person would. For instance, if someone poked a zombie with a sharp object, they would cry out as if they were in pain, but they wouldn't feel anything. Some zombies might even read websites about consciousness! <br /><br />

							If it's at least possible for there to be a world where this kind of person exists, then it must be the case that consciousness exists, and isn't physical.
						</p>

					</section>
				</section>


				
			</section>


			

		</section>
	);
}

export default App;
