import React, { Component } from 'react';
import { useInView } from 'react-intersection-observer';

const AnimateOnScroll = (props) => {
    
    const { ref, inView } = useInView({
        triggerOnce: false,
        rootMargin: '-500px 0px -100px 0px',
    });


    // Add a state variable to store the animation play state
    const [animationState, setAnimationState] = React.useState('paused');

    // Add an effect hook to update the animation state based on the inView value
    React.useEffect(() => {
        if (inView) {
            setAnimationState('running');
        } else {
            setAnimationState('paused');
        }
    }, [inView]);


    return (
        <section
            ref={ref}
            className={ props.classes + ` ${inView ? props.animateIn : props.animateOut}`} 
            style={{animationPlayState: animationState}}
            >

            { props.html }

        </section>
    );
};

export default AnimateOnScroll;
