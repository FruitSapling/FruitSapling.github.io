import React from 'react';
import '../Project.css'; // Use shared project styles

const DfT = () => {
  return (
    <div className="project-container">
      
      {/* Text Section */}
      <div className="project-content">
        <h1>🚉 Improving Transport Accessibility</h1>
        <p>
          Enhancing national datasets for a more inclusive journey.
        </p>
        <div className="project-summary">
          This project explores adding accessibility data to NaPTAN (National Public Transport Access Nodes), the “what is where” for all public transport stops in Great Britain. It covers every bus stop, tram stop, metro station, train station, airport, and ferry terminal in England, Scotland, and Wales. It involved research, prototyping, and working closely with local authorities.
        </div>
      </div>

      {/* Download Button */}
      <a href={`${process.env.PUBLIC_URL}/projectCaseStudies/DfT-case-study-together.pdf`} 
         download="DfT-case-study.pdf" 
         className="download-button">
        Download Case Study
      </a>

      {/* PDF Viewer */}
      <embed src={`${process.env.PUBLIC_URL}/projectCaseStudies/DfT-case-study-split.pdf`} 
        type="application/pdf" 
        className="pdf-viewer" 
      />

    </div>
  );
};

export default DfT;
