import React, { Component } from 'react';
import { useInView } from 'react-intersection-observer';
import AnimatedText from './AnimatedText.js';


const Explain = (props) => {
    
    const { ref, inView } = useInView({
        triggerOnce: false,
        rootMargin: '100% 10000px -100px 10000px',
    });

    return (
        <section
            ref={ref}
            className={ "text-box-container text-box-container-overview black-background"  + ` ${inView ? "explain-animate-in-onscreen " : "explain-animate-in-offscreen " }`} 
        >
            {/*<section className={ "animated-logo-expander " + ` ${inView ? "logo-animate-in-onscreen " : "logo-animate-in-offscreen " }` }> 
            </section>*/}


            <section className="text-box-container-inner
                                text-box-container-inner-overview">
                <AnimatedText text={ 
                    <p>The hard problem of consciousness is one of the hardest problems in philosophy today. In simple terms, it asks, <q>why is it <span className="like-something red-text"> like something </span>to have the experiences we have?</q> Why is it like something to see the color red, smell coffee, or taste blueberries?</p> }/>

                <AnimatedText text={ 
                    <p>The trouble is, everything in the universe is physical, but consciousness seems to be something different. The experience of red seems to be non-physical, or as the philosophers call it, phenomenal.</p> }/>

                <AnimatedText text={ 
                    <p> Many solutions to the hard problem have been proposed. Some accept the difficulty of the hard problem, and others say there is no consciousness in this "what it's like" sense. Let's explore some of the arguments. </p> }/>

            </section>

            <section className="svg-container overview-container black-background"> 
                <section className="overview-container-inner"> 
                    
                    <section className="mugs-image"></section>

                </section>
            </section>
					


                

        </section>
            

    );
};

export default Explain;
