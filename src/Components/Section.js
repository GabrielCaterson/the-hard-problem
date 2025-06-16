import React from 'react';
import Spline from "@splinetool/react-spline";
import AnimatedText from './AnimatedText.js';
import { ReadMore } from './ReadMore.js';

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
      <Spline
        className="spline"
        scene={splineScene}
      />
    </section>
  );

  return (
    <section className={`text-box-container ${className}`}>
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