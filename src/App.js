import React from 'react';

import './App.css';

import './Components/NoHorizontalScroll.js';

import LogoScroll from './Components/LogoScroll.js';
import Section from './Components/Section.js';
import Autoscroll from './Components/Autoscroll.js';
import { ReadMore } from './Components/ReadMore.js';
import AnimatedText from './Components/AnimatedText.js';
import useIntersection from './Components/useIntersection.js';


import Spline from "@splinetool/react-spline";

function App() {

	return (
		<section className="App">

			

			<section className="body">
				

				<LogoScroll className="logo-container-outer"/>
				
				<Section
					bodyText={[
						<p>The hard problem of consciousness is one of the hardest problems in philosophy today. In simple terms, it asks, <q>why is it <span className="like-something red-text"> like something </span>to have the experiences we have?</q> Why is it like something to see the redness of a red apple, smell the smell of coffee, or taste the taste of mint?</p>,
						<p>The trouble is, everything in the universe is physical, but consciousness seems to be something different. The experience of red seems to be non-physical, or as the philosophers call it, phenomenal.</p>,
						<p> Many solutions to the hard problem have been proposed. Some accept the difficulty of the hard problem, and others say there is no consciousness in this "what it's like" sense. Let's explore some of the arguments. </p>
            
					]}
					textColor="white-text"
					textBackgroundColor="text-box-container-inner-overview"
					splineBackgroundColor="gray-background"
					splineScene="https://prod.spline.design/TL8DGrebd2ALSwbS/scene.splinecode"
					textOnLeft={true}
					className="explain-section text-box-container text-box-container-overview black-background"
				/>

				<Section
					headerText="What is it like to be a bat?"
					bodyText="We know roughly what it's like to be other humans because they are very similar to us, but what would it be like to be a bat? We may know that they experience life differently from us, using echolocation, and we can maybe consider analogous experiences, but we can never know what it is like for a bat to be a bat, having lived an entire life solely as a bat.

What this shows us is that scientific theories are objective, but our experiences are subjective."
					textColor="black-text"
					textBackgroundColor="yellow-background"
					splineBackgroundColor="gray-background"
					readMoreProps={{
						color: "black-background yellow-text",
						link: "https://www.sas.upenn.edu/~cavitch/pdf-library/Nagel_Bat.pdf",
						text: "Read paper"
					}}
					splineScene="https://prod.spline.design/k3R9R-BrF7WZ9qiO/scene.splinecode"
					textOnLeft={false}
					className="text-box-container-bat"
				/>

				<Section
					headerText="Mary's Room"
					bodyText="Imagine a color scientist named Mary. She has lived her entire life in a black and white room, and can only investigate the world using a black and white television monitor. That being said, she knows everything there is to know about the physical descriptions of color, and how the human body interacts with it. Will Mary learn anything when she sees color for the first time?"
					textColor="white-text"
					textBackgroundColor="black-background"
					splineBackgroundColor=""
					readMoreProps={{
						color: "white-background black-text",
						link: "https://web.ics.purdue.edu/~drkelly/JacksonWhatMaryDidntKnow1986.pdf",
						text: "Read paper"
					}}
					splineScene="https://prod.spline.design/QH08ivGk2R0fYQ5C/scene.splinecode"
					textOnLeft={true}
					className="text-box-container-mary"
				/>

				<Section
					headerText="Philosophical Zombies"
					bodyText="Imagine a person physically identical to a normal person, but who doesn't have a conscious experience. We'll call this person a philosophical zombie. There is nothing it is like to be a philosophical zombie. Still, they will behave the same way a normal person would. For instance, if someone poked a zombie with a sharp object, they would cry out as if they were in pain, but they wouldn't feel anything. Some zombies might even read websites about consciousness!

If it's at least possible for there to be a world where this kind of person exists, then it must be the case that consciousness exists, and isn't physical."
					textColor="white-text"
					textBackgroundColor="blue-background"
					splineBackgroundColor="white-background"
					readMoreProps={{
						color: "white-background blue-text",
						link: "https://plato.stanford.edu/entries/zombies/",
						text: "Read more"
					}}
					splineScene="https://prod.spline.design/cVDsFg724U0r2VfC/scene.splinecode"
					textOnLeft={false}
					className="text-box-container-zombie gray-background"
				/>

				<section className="solve-container gray-background">
					<section className="solve-container-word solve-container-word-1 purple-background white-text">
						So
					</section>
					<section className="solve-container-word solve-container-word-2 blue-background white-text">
						how
					</section>
					<section className="solve-container-word solve-container-word-3 white-background">
						do
					</section>
					<section className="solve-container-word solve-container-word-4 yellow-background black-text">
						we
					</section>
					<section className="solve-container-word solve-container-word-5 green-background">
						solve
					</section>
					<section className="solve-container-word solve-container-word-6 black-background white-text">
						it?
					</section>
				</section>

				<Section
					headerText="Physicalism"
					bodyText="Physicalism is the view that everything is physical. There is no non-physical consciousness."
					textColor="black-text"
					textBackgroundColor="white-background"
					splineBackgroundColor=""
					readMoreProps={{
						color: "black-background white-text",
						link: "https://plato.stanford.edu/entries/physicalism/",
						text: "Read more"
					}}
					splineScene="https://prod.spline.design/dPpxQf2SNHN-cJTN/scene.splinecode"
					textOnLeft={true}
					className="text-box-container-materialism white-background"
				/>

				<Section
					headerText="Dualism"
					bodyText="Dualism is the view that the mind and the body are radically different kinds of things. The mind can't be explained by physical processes alone."
					textColor="reverse-text"
					textBackgroundColor="purple-background"
					splineBackgroundColor=""
					readMoreProps={{
						color: "white-background purple-text",
						link: "https://plato.stanford.edu/entries/dualism/",
						text: "Read more"
					}}
					splineScene="https://prod.spline.design/UszumCVC9fgQh865/scene.splinecode"
					textOnLeft={false}
					className="text-box-container-dualism black-background"
				/>

				<Section
					headerText="Panpsychism"
					bodyText="Panpsychism is the view that consciousness is fundamental and ubiquitous. In simpler terms, consciousness is everywhere. That isn't to say that everything including rocks are conscious, but more that everything including rocks are made of conscious parts."
					textColor="white-text"
					textBackgroundColor=""
					splineBackgroundColor=""
					readMoreProps={{
						color: "white-background blue-text",
						link: "https://plato.stanford.edu/entries/panpsychism/",
						text: "Read more"
					}}
					splineScene="https://prod.spline.design/BQ5sQqiRs-Akq1x4/scene.splinecode"
					textOnLeft={true}
					className="text-box-container-panpsychism blue-background"
				/>

				<Section
					headerText="Analytic Idealism"
					bodyText="Idealism is the view that everything is consciousness. Consciousness is the ultimate foundation of all reality. There is no non-conscious matter. Consciousness is all there is."
					textColor="black-text"
					textBackgroundColor="green-background"
					splineBackgroundColor=""
					readMoreProps={{
						color: "black-background green-text",
						link: "https://www.goodreads.com/book/show/204478729-analytic-idealism-in-a-nutshell",
						text: "Read more"
					}}
					splineScene="https://prod.spline.design/cPdWqKMYHZopa1OC/scene.splinecode"
					textOnLeft={false}
					className="text-box-container-idealism green-background"
				/>

				<section className="footer">

					<section className="footer-section">
						Designed and developed by <a  className="footer-links" 
							href="https://www.gabrielcaterson.com" 
							target="_blank" rel="noopener noreferrer">
								Gabriel Caterson
						</a>. Hire me!
					</section>

					<section className="footer-section">
						Based on the work of philosophers like David Chalmers, Thomas Nagel, Frank Jackson, and many, many more.
					</section>

					<section className="footer-section">
						Read more on the <a  className="footer-links" 
							href="https://plato.stanford.edu/entries/consciousness/" 
							target="_blank" rel="noopener noreferrer">Stanford Encyclopedia of Philosophy</a>.
					</section>

				</section>
				
			</section>



		</section>
	);
}

export default App;
