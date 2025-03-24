// src/pages/About.js
import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';       // Profile/bio layout only
import '../WorkCard.css';   // Same card/grid styles as Work.js

const featuredProjects = [
  {
    id: 'DfT',
    client: 'Department for Transport',
    title: '🚉 Improving Transport Accessibility',
    description: 'Enhancing national datasets for a more inclusive journey.',
    image: '/images/DFT_thumbnail.jpg',
    link: '/project/DfT'
  },
  {
    id: 'GDS',
    client: 'Government Digital Service',
    title: '🖋️ Fixing Whitehall Publisher',
    description: 'Reducing friction for civil servants updating GOV.UK.',
    image: '/images/GDS_thumbnail.jpg',
    link: '/project/GDS'
  },
  {
    id: 'SJ23',
    client: 'Service Jam 2023',
    title: '🎨 Prototyping Services in 48 Hours',
    description: 'Solving real-world challenges at Service Jam Newcastle.',
    image: '/images/SJ23_thumbnail.png',
    link: '/project/SJ23'
  },
];

const About = () => {
  return (
    <>
      {/* TOP SECTION: Profile + Bio */}
      <div className="about-container">
        <div className="about-image-container">
          <img
            src="/images/profile_picture.jpeg"
            alt="Profile"
            className="about-image"
          />
        </div>
        <div className="about-text-container">
          <div className="about-content">
            <h1>Willem van Gerwen</h1>
            <p>
              I'm a UX Designer with a software development background,
              bridging the gap between design and engineering. Strong in user
              research and close collaboration with developers...
            </p>
            <p>
              I have proven experience uncovering and prioritizing real user
              needs through a wide range of research methods...
            </p>
          </div>
          <div className="about-buttons">
            <Link to="/work" className="work-link">
              View My Work
            </Link>
            <br />
            <Link to="/cv" className="work-link">
              View My CV
            </Link>
          </div>
        </div>
      </div>

      {/* FEATURED PROJECTS SECTION */}
      <div className="featured-projects-section">
        <h2>Featured Projects</h2>
        {/* 
          Use the exact same .work-container from WorkCard.css 
          so the cards have identical spacing & layout
        */}
        <div className="work-container">
          {featuredProjects.map((project) => (
            <Link to={project.link} key={project.id} className="card">
              <img src={project.image} alt={project.client} />
              <div className="card-content">
                <p className="card-title">
                  <strong>{project.title}</strong>
                </p>
                <p className="card-description">{project.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default About;
