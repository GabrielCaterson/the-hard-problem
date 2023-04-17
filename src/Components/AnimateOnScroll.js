import React, { Component } from 'react';
import { useInView } from 'react-intersection-observer';

const AnimateOnScroll = (props) => {
    
    const { ref, inView } = useInView({
        triggerOnce: false,
        rootMargin: '-5% 10000px -100px 10000px',
    });

    /*const [animationState, setAnimationState] = React.useState('paused');

    React.useEffect(() => {
        if (inView) {
            setAnimationState('running');
        } else {
            setAnimationState('paused');
        }
    }, [inView]);*/


    return (
        <section
            ref={ref}
            className={ props.classes + ` ${inView ? props.animateIn : props.animateOut}`} 
            /*style={{animationPlayState: animationState}}*/
            >

            { props.html }

        </section>
    );
};

export default AnimateOnScroll;
