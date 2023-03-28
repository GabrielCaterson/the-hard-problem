import React, { Component } from 'react';
import { useInView } from 'react-intersection-observer';

import gsap from "gsap";
import SplitTextJS from 'split-text-js';



const AnimatedText = (props) => {
    
    const { ref, inView } = useInView({
        triggerOnce: false,
        rootMargin: '-100px 0px',
    });

    console.log(inView);

    return (
        <section
            ref={ref}
            className={`text-box-container-inner-2 test-animate-in ${inView ? 'text-animate-in-onscreen' : 'text-animate-in-offscreen'}`} >

            <p className="text-box text-box-overview" >
                { props.text }
            </p>
        </section>
    );
};

export default AnimatedText;
