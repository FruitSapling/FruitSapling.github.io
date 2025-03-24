import React from 'react';
import '../Project.css';

const BEIS = () => {
  return (
    <div className="project-container">

      <div className="project-content">
        <h1>⚡ Making Energy Advice Simple</h1>
        <p>
          Refining SEA to better support homeowners and renters.
        </p>
        <p className="project-summary">
          Simple Energy Advice (SEA) is a platform designed to help homeowners and renters make informed decisions about energy efficiency and home improvements. Our research focused on understanding user needs, identifying pain points, and refining the service to provide clearer, more actionable guidance.
        </p>
      </div>

      <a href={`${process.env.PUBLIC_URL}/projectCaseStudies/BEIS-case-study-together.pdf`} 
         download="BEIS-case-study.pdf" 
         className="download-button">
        Download Case Study (recommended)
      </a>

      <embed src={`${process.env.PUBLIC_URL}/projectCaseStudies/BEIS-case-study-split.pdf`} 
        type="application/pdf" 
        className="pdf-viewer" 
      />

    </div>
  );
};

export default BEIS;
