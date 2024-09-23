import React from 'react';
import { Link } from 'react-router-dom';
import './Work.css';
import '../components/WorkCard.css';

const projects = [
  {
    id: 'DfT',
    client: 'Department for Transport',
    description: 'Discovery/Alpha into adding accessibility data to the national database of public transport stops.',
    image: '/images/DFT_thumbnail.jpg' // Thumbnail for the project
  },
  {
    id: 'TPR',
    client: 'The Pensions Regulator',
    description: 'Discovery work to learn about user needs for a new service: sharing more pensions data with TPR.',
    image: '/images/TPR_thumbnail.jpg'
  },
  {
    id: 'GDS',
    client: 'Government Digital Service',
    description: 'Understanding and tackling the key problems with Whitehall Publisher: the tool used to put content on GOV.UK.',
    image: '/images/GDS_thumbnail.jpg'
  },
  {
    id: 'CA',
    client: 'Citizens Advice',
    description: 'Understanding the behaviour and motivations of Citizens Advice advisers. Understanding advisers\' journeys in finding local service information for clients.',
    image: '/images/CA_thumbnail.jpg'
  },
  {
    id: 'BEIS',
    client: 'BEIS',
    description: 'User research to understand the user needs of those visiting SEA: Simple Energy Advice.',
    image: '/images/BEIS_thumbnail.jpg'
  },
  
  
  // Add more projects as needed
];

const Work = () => {
  return (
    <div className="work-container">
      {projects.map(project => (
        <Link to={`/project/${project.id}`} key={project.id} className="card">
            <img src={project.image} alt={project.client} />
            <div className="card-content">
              <p>{project.description}</p>
            </div>
        </Link>
      ))}
    </div>
  );
};

export default Work;
