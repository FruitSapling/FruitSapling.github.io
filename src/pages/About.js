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

      {/* Right Side: Content (Title + Bio) */}
      <div className="about-text-container">
        <div className="about-content">
          <h1>Willem van Gerwen</h1>
          <p>
            I'm a UX Designer with a software development
            background, bridging the gap between
            design and engineering. Strong in user
            research and effective collaboration with
            developers in agile teams to create
            seamless, user-centered products.
          </p>
          <p>
            I have proven experience uncovering and prioritizing real user needs 
            through a wide range of research methods. My approach ensures that 
            every design decision is backed by meaningful insights.
          </p>
        </div>

        {/* Buttons Below Content */}
        <div className="about-buttons">
          <Link to="/work" className="work-link">View My Work</Link>
          <br></br>
          <Link to="/cv" className="work-link">View My CV</Link>
        </div>
      </div>
    </div>
  );
};

export default About;
