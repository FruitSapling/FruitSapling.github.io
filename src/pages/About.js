// About.js
import React from 'react';
import { Link } from 'react-router-dom';
import './About.css'; // Import styles

const About = () => {
  return (
    <div className="about-container">
      {/* Left Side: Large Circular Image */}
      <div className="about-image-container">
        <img src="/images/profile_picture.jpeg" alt="Profile" className="about-image" />
      </div>

      {/* Right Side: Text Content */}
      <div className="about-content">
        <h1>About Me</h1>
        <p>
          I have proven experience uncovering and prioritizing real user needs 
          through a wide range of research methods. My approach ensures that 
          every design decision is backed by meaningful insights.
        </p>
        <p>
          I excel at communicating these insights clearly to stakeholders through 
          efficient storytelling, bridging the gap between research, design, and development. 
          My background in Computer Science and experience as a developer allow me to 
          create feasible, user-friendly designs that remove friction and enhance usability.
        </p>
        <Link to="/work" className="work-link">View My Work</Link>
        <br></br>
        <Link to="/cv" className="work-link">View My CV</Link>
      </div>
    </div>
  );
};

export default About;
