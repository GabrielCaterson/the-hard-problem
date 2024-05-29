import React, { Component } from 'react';
//import { useInView } from 'react-intersection-observer';

const LogoScroll = (props) => {

    return (
        <section>
            <section
                className={ "logo-container" } 
            >

                <section  className="logo-container-inner">

                    {/*<section className="expander-container">
                        <section className={ "animated-logo-expander logo-animate-in-onscreen " }> 
                        </section>
                    </section>*/}
                    
                    
                    <section className={ "animated-logo "  }>
                    </section>
                    
                    <p className={"title-text text-animate-in-onscreen  text-animate-in-offscreen "}>
                        The Hard <br />
                        Problem <br />
                    </p>
                </section>

            </section>
            
            <section className="under-logo"></section>

        </section>
    );
};

export default LogoScroll;
