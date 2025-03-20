import React from 'react';
import '../Project.css';

const GDS = () => {
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

        <p className="project-summary">
          Ask me for more details about this project, I'm happy to chat about it. Full case study coming soon!
        </p>

        <a href={`${process.env.PUBLIC_URL}/projectCaseStudies/GDS-case-study-split.pdf`} 
         download="GDS-case-study-split.pdf" 
         className="download-button">
        Download Case Study
      </a>

      <embed src={`${process.env.PUBLIC_URL}/projectCaseStudies/GDS-case-study-split.pdf`} 
        type="application/pdf" 
        className="pdf-viewer" 
      />
      </div>

    </div>
  );
  
};

export default GDS;
