import React from 'react';
import '../Project.css';

const SJ23 = () => {
  return (
    <div className="project-container">

      <div className="project-content">
        <h1>🎨 Prototyping Services in 48 Hours</h1>
        <p>
          Solving real-world challenges at Service Jam Newcastle.
        </p>
        <p className="project-summary">
          I hosted Service Jam 2023 alongside another co-host in Newcastle. Service Jam 2023 was an intensive two-day event where multidisciplinary teams came together to rapidly prototype and test new service concepts. This event fostered creativity, collaboration, and user-centered design thinking. The outcome was a set of innovative service prototypes addressing real-world challenges. I put together this video to summarise the event.
        </p>
      </div>

      <div className="video-container">
        <iframe 
          src="https://www.youtube.com/embed/1-7Uj8pU7lA" 
          title="Service Jam 2023 Newcastle"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <a 
        href="https://www.youtube.com/watch?v=1-7Uj8pU7lA&ab_channel=NewcastleJams" 
        target="_blank" 
        rel="noopener noreferrer"
        className="youtube-button"
      >
        Watch on YouTube
      </a>

    </div>
  );
};

export default SJ23;
