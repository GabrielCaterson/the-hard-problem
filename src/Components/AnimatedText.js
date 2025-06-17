import React from 'react';
import { useInView } from 'react-intersection-observer';



const AnimatedText = (props) => {
    
    const { ref, inView } = useInView({
        triggerOnce: false,
        rootMargin: '-100px 0px',
    });

    return (
        <section
            ref={ref}
            className={`text-box-container-inner-2 text-animate-in ${inView ? 'text-animate-in-onscreen' : 'text-animate-in-offscreen'}`} >

            <section className={`text-box text-box-overview ${inView ? 'text-animate-in-onscreen' : 'text-animate-in-offscreen'}`} >
                { props.text }
            </section>
        </section>
    );
};

export default AnimatedText;
