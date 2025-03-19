// src/pages/project/DfT.js
import React from 'react';
import '../Project.css'; // Use shared project styles

const DfT = () => {
  return (
    <div className="project-container">
      <h1>Department for Transport (DfT) Project</h1>
      <p>
        This project explores adding accessibility data to the national database of public transport stops.
        It involved research, prototyping, and working closely with local authorities.
      </p>
      <a href={`${process.env.PUBLIC_URL}/projectCaseStudies/DfT-project.pdf`} download="DfT-Project.pdf" className="download-button">
        Download Full Report
      </a>
      <br></br>
      <embed src={`${process.env.PUBLIC_URL}/projectCaseStudies/DfT-project.pdf`} type="application/pdf" className="pdf-viewer" />
    </div>
  );
};

export default DfT;
