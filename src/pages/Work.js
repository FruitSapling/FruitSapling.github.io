import React from 'react';
import { Link } from 'react-router-dom';
import './Work.css';
import '../components/WorkCard.css';

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

const Work = () => {
  return (
    <div className="work-container">
      {projects.map((project) => (
        <Link to={project.link} key={project.id} className="card">
          <img src={project.image} alt={project.client} />
          <div className="card-content">
            <p className="card-title"><strong>{project.title}</strong></p>
            <p className="card-description">{project.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Work;
