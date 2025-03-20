import React from 'react';
import '../Project.css';

const TPR = () => {
  return (
    <div className="project-container">

      <div className="project-content">
        <h1>💼 Simplifying Pension Data</h1>
        <p>
          Understanding industry needs to improve data sharing with TPR.
        </p>
        <p className="project-summary">
          This project involved researching how pension schemes provide data to The Pensions Regulator (TPR) and identifying challenges in the current process. Through interviews and data analysis, we explored how to improve pension data reporting, making compliance easier while ensuring that TPR gets the information it needs for effective regulation.
        </p>
      </div>

      <a href={`${process.env.PUBLIC_URL}/projectCaseStudies/TPR-case-study-together.pdf`} 
         download="TPR-case-study.pdf" 
         className="download-button">
        Download Case Study
      </a>

      <embed src={`${process.env.PUBLIC_URL}/projectCaseStudies/TPR-case-study-split.pdf`} 
        type="application/pdf" 
        className="pdf-viewer" 
      />

    </div>
  );
};

export default TPR;
