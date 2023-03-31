import React, { Component } from 'react';
import { useInView } from 'react-intersection-observer';
/*
import gsap from "gsap";
import SplitTextJS from 'split-text-js';


function animateText(){
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
}*/


const AnimatedText = (props) => {
    
    const { ref, inView } = useInView({
        triggerOnce: false,
        rootMargin: '-100px 0px',
    });

    console.log(inView);

    return (
        <section
            ref={ref}
            className={`text-box-container-inner-2 text-animate-in ${inView ? 'text-animate-in-onscreen' : 'text-animate-in-offscreen'}`} >

            <p className="text-box text-box-overview" >
                { props.text }
            </p>
        </section>
    );
};

export default AnimatedText;
