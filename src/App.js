import React, { useRef, useState } from 'react';

import logo from './logo.svg';
import './App.css';




import Autoscroll from './Components/Autoscroll.js';
//import Scroller from './Components/Scroller.js';
import './Components/NoHorizontalScroll.js';

import { ReadMore } from './Components/ReadMore.js';
import AnimatedText from './Components/AnimatedText.js';
import LogoScroll from './Components/LogoScroll.js';
import Explain from './Components/Explain.js';

import './Components/EyeZoom.js';

import { MarysRoom } from './Components/MarysRoom.js';

import useIntersection from './Components/useIntersection.js';


import Scene from './Components/Bat3D.js';
import { Suspense } from 'react'

import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';




import Spline from "@splinetool/react-spline";




/*
import gsap from "gsap";
import SplitTextJS from 'split-text-js';

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

});*/









function App() {

	return (
		<section className="App">

			


			<section className="body">
				

				<LogoScroll />
				<Explain />


				<section className="text-box-container text-box-container-bat yellow-background">

					<section className="bat-container"> 

						<Spline
							className="spline"
							scene="https://prod.spline.design/HH5XNvjFf5WRiOoL/scene.splinecode"
						/>
					</section>


					<section className="text-box-container-inner
										text-box-container-inner-bat
										yellow-background">

						<AnimatedText text={ 
							<p className="black-text"> What is it like to be a bat? <br /><br />
							We know roughly what it's like to be other humans because they are very similar to us, but what would it be like to be a bat? We may know that they experience life differently from us, using echolocation, and we can maybe consider analogous experiences, but we can never know what it is like for a bat to be a bat, having lived an entire life solely as a bat. 


							<br /><br />
							What this shows us is that scientific theories are objective, but our experiences are subjective. </p> }/>

						<section className="reading-section">
							<ReadMore color="black-background yellow-text" link="https://warwick.ac.uk/fac/cross_fac/iatl/study/ugmodules/humananimalstudies/lectures/32/nagel_bat.pdf" text="Read paper"/>
						</section>

					</section>
				</section>



				<section className="text-box-container 
									text-box-container-mary
									">
					<section className="text-box-container-inner text-box-container-inner-mary black-background">
						
						<AnimatedText text={ 
							<p> Mary's room. <br /><br />

							Imagine a color scientist named Mary. She has lived her entire life in a black and white room, and can only investigate the world using a black and white television monitor. That being said, she knows everything there is to know about the physical descriptions of color, and how the human body interacts with it. Will Mary learn anything when she sees color for the first time? </p> }/>

						

						<section className="reading-section">
							<ReadMore color="white-background black-text" link="" text="Read paper"/>
						</section>
					</section>

					
					<section className="mary-container"> 
						
						<MarysRoom />
						<section className="move-icon-container">
							<section className="move-icon"></section>
						</section>
						

					</section>
				</section>



				<section className="text-box-container text-box-container-zombie blue-background">

					<section className="zombie-container"> 
						<section className="zombie-container-inner"> 
							<section className="overview zombie"> 

							</section>

						</section>
					</section>



					<section className="text-box-container-inner
										text-box-container-inner-zombie
										green-background">

						<AnimatedText text={ 
							<p> Philosophical zombies. <br /><br />
							Imagine a person physically identical to a normal person, but who doesn't have a conscious experience. We'll call this person a philosophical zombie. There is nothing it is like to be a philosophical zombie. Still, they will behave the same way a normal person would. For instance, if someone poked a zombie with a sharp object, they would cry out as if they were in pain, but they wouldn't feel anything. Some zombies might even read websites about consciousness! <br /><br />

							If it's at least possible for there to be a world where this kind of person exists, then it must be the case that consciousness exists, and isn't physical. </p> }/>

						<section className="reading-section">
							<ReadMore color="blue-background white-text" link="https://warwick.ac.uk/fac/cross_fac/iatl/study/ugmodules/humananimalstudies/lectures/32/nagel_bat.pdf" text="Read paper"/>
						</section>

					</section>
				</section>


				
			</section>


			

		</section>
	);
}

export default App;
