import React from 'react';
import '../Project.css';

const TPR = () => {
  return (
    <div className="project-container">

      <div className="project-content">
        <h1>🖋️ Fixing Whitehall Publisher</h1>
        <p>
          Reducing friction for civil servants updating GOV.UK.
        </p>
        <p className="project-summary">
        Whitehall Publisher is a critical tool for publishing content on GOV.UK, used by civil servants across government departments. This project focused on understanding key usability issues, reducing publishing friction, and ensuring the platform supports high-quality content creation. Through research and iterative design, we identified improvements to enhance efficiency and user satisfaction.
        </p>
      </div>

      <a href={`${process.env.PUBLIC_URL}/projectCaseStudies/GDS-case-study-together.pdf`} 
         download="GDS-case-study-together.pdf" 
         className="download-button">
        Download Case Study (recommended)
      </a>

      <embed src={`${process.env.PUBLIC_URL}/projectCaseStudies/GDS-case-study-split.pdf`} 
        type="application/pdf" 
        className="pdf-viewer" 
      />

    </div>
  );
};

export default TPR;
