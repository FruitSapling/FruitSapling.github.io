// Cv.js
import React from 'react';
import './Cv.css'; // Import styles for the CV page

const cvPdf = "/CV March 2025.pdf"; // Access PDF from public folder

const Cv = () => {
  return (
    <div className="cv-container">
      <h1>My CV</h1>
      <a href={cvPdf} download="My_CV.pdf" className="download-button">Download CV</a>
      <br></br>
      <embed src={cvPdf} type="application/pdf" className="cv-viewer" />
    </div>
  );
};

export default Cv;
