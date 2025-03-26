import React from 'react';
import '../Project.css';

const CABO = () => {
  return (
    <div className="project-container">

      <div className="project-content"> 
        <h1>⚙️ Automating Applications</h1>
        <p>
            Saving employees thousands of hours each month.
        </p>
        <p className="project-summary">
        For confidentiality reasons, I can't share the details of this project publicly. If you'd like to learn more, please get in touch.
        </p>
      </div>

      {/* PDF Viewer */}
      <embed src={`${process.env.PUBLIC_URL}/projectCaseStudies/CABO-case-study.pdf`} 
        type="application/pdf" 
        className="pdf-viewer" 
      />

    </div>
  );
};

export default CABO;
