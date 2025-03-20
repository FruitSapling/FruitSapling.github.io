import React from 'react';
import '../Project.css';

const CA = () => {
  return (
    <div className="project-container">

      <div className="project-content">
        <h1>📌 Helping Advisers Help Others</h1>
        <p>
          Improving access to local service information.
        </p>
        <p className="project-summary">
          Citizens Advice advisers help people navigate complex issues like debt, housing, and employment. This research project explored how advisers find and use local service information to assist clients. We identified barriers to accessing up-to-date, relevant resources and provided recommendations for a more effective information-sharing system.
        </p>
      </div>

      <a href={`${process.env.PUBLIC_URL}/projectCaseStudies/citizens-advice-case-study-together.pdf`} 
         download="citizens-advice-case-study.pdf" 
         className="download-button">
        Download Case Study
      </a>

      <embed src={`${process.env.PUBLIC_URL}/projectCaseStudies/citizens-advice-case-study-split.pdf`} 
        type="application/pdf" 
        className="pdf-viewer" 
      />

    </div>
  );
};

export default CA;
