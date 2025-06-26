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

  const renderHeaderText = () => {
    if (!headerText) return null;
    
    return (
      <AnimatedText text={
        <p className={`${textColor} section-title`}>
          {headerText}
        </p>
      } />
    );
  };

  const renderBodyTextItems = () => {
    if (Array.isArray(bodyText)) {
      return bodyText.map((text, index) => (
        <AnimatedText key={index} text={text} />
      ));
    }
    
    return (
      <AnimatedText text={
        <p className={textColor}>
          {!Array.isArray(bodyText) && headerText && (
            <>
              <span className="section-title">{headerText}</span>
              <br /><br />
            </>
          )}
          {bodyText}
        </p>
      } />
    );
  };

  const renderReadMoreSection = () => {
    if (!readMoreProps || Object.keys(readMoreProps).length === 0) {
      return null;
    }

    return (
      <section className="reading-section">
        <ReadMore 
          color={readMoreProps.color} 
          link={readMoreProps.link} 
          text={readMoreProps.text}
        />
      </section>
    );
  };

  const textSection = (
    <section className={`text-box-container-inner ${textBackgroundColor}`}>
      {Array.isArray(bodyText) && renderHeaderText()}
      {renderBodyTextItems()}
      {renderReadMoreSection()}
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

  const sections = textOnLeft ? [textSection, splineSection] : [splineSection, textSection];

  return (
    <section ref={sectionRef} className={`text-box-container ${className}`}>
      {sections}
    </section>
  );
}

export default Section; 