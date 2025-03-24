// src/pages/Work.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../WorkCard.css'; // Consolidated card/container styling

const projects = [
  {
    id: 'DfT',
    client: 'Department for Transport',
    title: '🚉 Improving Transport Accessibility',
    description: 'Enhancing national datasets for a more inclusive journey.',
    image: '/images/DFT_thumbnail.jpg',
    link: '/project/DfT'
  },
  {
    id: 'TPR',
    client: 'The Pensions Regulator',
    title: '💼 Simplifying Pension Data',
    description: 'Understanding industry needs to improve data sharing with TPR.',
    image: '/images/TPR_thumbnail.jpg',
    link: '/project/TPR'
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
    id: 'CA',
    client: 'Citizens Advice',
    title: '📌 Helping Advisers Help Others',
    description: 'Improving access to local service information.',
    image: '/images/CA_thumbnail.jpg',
    link: '/project/CA'
  },
  {
    id: 'BEIS',
    client: 'BEIS',
    title: '⚡ Making Energy Advice Simple',
    description: 'Refining SEA to better support homeowners and renters.',
    image: '/images/BEIS_thumbnail.jpg',
    link: '/project/BEIS'
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

// Define which projects are featured by their IDs.
const featuredProjectIds = ['DfT', 'GDS', 'SJ23'];
const featuredProjects = projects.filter(project =>
  featuredProjectIds.includes(project.id)
);
const otherProjects = projects.filter(project =>
  !featuredProjectIds.includes(project.id)
);

const Work = () => {
  return (
    <>
      {/* Featured Projects Section */}
      <div className="featured-projects-section">
        <h2 style={{ textAlign: 'center' }}>Featured Projects</h2>
        <div className="work-container">
          {featuredProjects.map((project) => (
            <Link to={project.link} key={project.id} className="card">
              <img src={project.image} alt={project.client} />
              <div className="card-content">
                <p className="card-title"><strong>{project.title}</strong></p>
                <p className="card-description">{project.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Other Projects Section */}
      <div className="other-projects-section">
        <h2 style={{ textAlign: 'center' }}>Other Projects</h2>
        <div className="work-container">
          {otherProjects.map((project) => (
            <Link to={project.link} key={project.id} className="card">
              <img src={project.image} alt={project.client} />
              <div className="card-content">
                <p className="card-title"><strong>{project.title}</strong></p>
                <p className="card-description">{project.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Work;
