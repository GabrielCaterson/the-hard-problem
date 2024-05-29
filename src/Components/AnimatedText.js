import React, { Component } from 'react';
import { useInView } from 'react-intersection-observer';



const AnimatedText = (props) => {
    
    const { ref, inView } = useInView({
        triggerOnce: false,
        rootMargin: '-100px 0px',
    });

    return (
        <section
            className={'text-box-container-inner-2 text-animate-in text-animate-in-onscreen'} >

            <section className={'text-box text-box-overview text-animate-in-onscreen'} >
                { props.text }
            </section>
        </section>
    );
};

export default AnimatedText;
