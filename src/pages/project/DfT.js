// src/pages/project/DfT.js
import React from 'react';
import '../Project.css'; // Use shared project styles

const DfT = () => {
  return (
    <div className="project-container">
      
      {/* Text Section with Better Spacing */}
      <div className="project-content">
        <h1>Adding accessibility data to vital national dataset for Department for Transport</h1>
        <p>
          This project explores adding accessibility data to NaPTAN (National Public Transport Access Nodes), the “what is where” for all public transport stops in Great Britain. It covers every bus stop, tram stop, metro station, train station, airport and ferry terminal in England, Scotland and Wales.
          It involved research, prototyping, and working closely with local authorities.
        </p>
      </div>

      <div>
      {/* Download Button */}
      <a href={`${process.env.PUBLIC_URL}/projectCaseStudies/DfT-case-study-split.pdf`} 
         download="Willem-DfT.pdf" 
         className="download-button">
        Download Case Study
      </a>
      </div>

      <br></br>

      {/* PDF Viewer */}
      <embed src={`${process.env.PUBLIC_URL}/projectCaseStudies/DfT-case-study-split.pdf`} 
        type="application/pdf" 
        className="pdf-viewer" 
      />

    </div>
  );
};


export default DfT;
