import React, { Component } from 'react';
import { useInView } from 'react-intersection-observer';

const LogoScroll = (props) => {
    
    const { ref, inView } = useInView({
        triggerOnce: false,
        rootMargin: '-80% 10000px -100px 10000px',
    });

    return (
        <section>
            <section
                ref={ref}
                className={ "logo-container" } 
            >

                <section  className="logo-container-inner">


                    <section className={ "animated-logo-expander " + ` ${inView ? "logo-animate-in-onscreen " : "logo-animate-in-offscreen " }` }> 
                    </section>
                    
                    <section className={ "animated-logo "  }>
                    </section>
                    
                    <p className={"title-text" + ` ${inView ? "text-animate-in-onscreen " : "text-animate-in-offscreen " }` }>
                        The 
                        Hard <br />
                        Problem <br />
                    </p>
                </section>

            </section>
            
            <section className="under-logo"></section>

        </section>
    );
};

export default LogoScroll;
