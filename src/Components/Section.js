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

  // Handle bodyText as either a string or array
  const renderBodyText = () => {
    if (Array.isArray(bodyText)) {
      // If bodyText is an array, render each element with its own AnimatedText
      return bodyText.map((text, index) => (
        <AnimatedText key={index} text={text} />
      ));
    } else {
      // If bodyText is a string, render it as before
      return (
        <AnimatedText text={
          <p className={textColor}>
            <span className="section-title">
              {headerText}
            </span>
            <br /><br />
            {bodyText}
          </p>
        } />
      );
    }
  };

  const textSection = (
    <section className={`text-box-container-inner ${textBackgroundColor}`}>
      {Array.isArray(bodyText) ? (
        // If bodyText is an array, render header separately and then body texts
        <>
          {headerText && (
            <AnimatedText text={
              <p className={textColor}>
                <span className="section-title">
                  {headerText}
                </span>
              </p>
            } />
          )}
          {renderBodyText()}
        </>
      ) : (
        // If bodyText is a string, render as before
        renderBodyText()
      )}
      
      {/* Only render Read More section if readMoreProps is provided and not empty */}
      {readMoreProps && Object.keys(readMoreProps).length > 0 && (
        <section className="reading-section">
          <ReadMore 
            color={readMoreProps.color} 
            link={readMoreProps.link} 
            text={readMoreProps.text}
          />
        </section>
      )}
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