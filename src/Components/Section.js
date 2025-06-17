import React, { useRef } from 'react';
import Spline from "@splinetool/react-spline";
import AnimatedText from './AnimatedText.js';
import ReadMore from './ReadMore.js';
import useIntersection from './useIntersection.js';

function Section({
  headerText,
  bodyText,
  textColor,
  textBackgroundColor,
  splineBackgroundColor,
  readMoreProps,
  splineScene,
  textOnLeft = true,
  className = ""
}) {
  const sectionRef = useRef(null);
  const isVisible = useIntersection(sectionRef, "100%");

  const textSection = (
    <section className={`text-box-container-inner ${textBackgroundColor}`}>
      <AnimatedText text={
        <p className={textColor}>
          <span className="section-title">
            {headerText}
          </span>
          <br /><br />
          {bodyText}
        </p>
      } />
      <section className="reading-section">
        <ReadMore 
          color={readMoreProps.color} 
          link={readMoreProps.link} 
          text={readMoreProps.text}
        />
      </section>
    </section>
  );

  const splineSection = (
    <section className={`section-container ${splineBackgroundColor}`}>
      {isVisible && (
        <Spline
          className="spline"
          scene={splineScene}
        />
      )}
    </section>
  );

  return (
    <section ref={sectionRef} className={`text-box-container ${className}`}>
      {textOnLeft ? (
        <>
          {textSection}
          {splineSection}
        </>
      ) : (
        <>
          {splineSection}
          {textSection}
        </>
      )}
    </section>
  );
}

export default Section; 