import logo from './logo.svg';
import './App.css';

import gsap from "gsap";
import SplitTextJS from 'split-text-js';

let text
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

				<section className="text-box-container text-box-container-mug">
					<section className="text-box-container-inner
										text-box-container-inner-mug 
										green-background">
						<section className="text-box-container-inner-2">
							<p className="text-box text-box-mug" >
								The hard problem of consciousness is one of the hardest problems in philosophy today. In simple terms, it asks "why is it <span className="like-something blue-text">like something</span> to have the experiences we have?" Why is it like something to see the color red, smell coffee, or taste blueberries? 
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

					
					<section className="mug-container blue-background"> 
						<section className="mug-container-inner"> 
							<section className="mug"> 

							</section>
						</section>
					</section>
				</section>





				<section className="text-box-container text-box-container-bat">

					<section className="bat-container yellow-background"> 
						<section className="bat-container-inner"> 
							<section className="bat"> 

							</section>
						</section>
					</section>


					<section className="text-box-container-inner
										text-box-container-inner-bat
										purple-background">
						<p className="text-box text-box-bat" >
							What is it like to be a bat? <br />
							We know roughly what it's like to be other people because they are very similar to us, but what would it be like to be a bat? 
								
								<br />

							- Bats are different from us 
							
							--Scientific theories are objective but our experiences are subjective
						</p>
					</section>
				</section>



				<section className="text-box-container 
									text-box-container-mary
									black-background">
					<section className="text-box-container-inner text-box-container-inner-mary">
						<p className="text-box text-box-1" >
							Mary's room.
						</p>
					</section>

					
					<section className="mary-container"> 
						<section className="mary-container-inner"> 
							<section className="mug mary"> 

							</section>
						</section>
					</section>
				</section>



				<section className="text-box-container text-box-container-zombie">

					<section className="zombie-container blue-background"> 
						<section className="zombie-container-inner"> 
							<section className="mug zombie"> 

							</section>
						</section>
					</section>


					<section className="text-box-container-inner
										text-box-container-inner-zombie
										green-background">
						<p className="text-box text-box-1" >
							Philosophical zombies.
						</p>

					</section>
				</section>


				
			</section>


			

		</section>
	);
}

export default App;
