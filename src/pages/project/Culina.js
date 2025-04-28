import React from 'react';
import '../Project.css';

const Culina = () => {
  return (
    <div className="project-container">

      <div className="project-content">
        <h1>🍲 AI-powered Cooking App</h1>
        <p>
          A cooking companion, Culina helps you keep track of what ingredients you have and what you can make with them.
        </p>
        <p className="project-summary">
          I built Culina from scratch as a personal project to explore the intersection of cooking and technology. The app uses AI to scan your fridge / pantry and keep track of your ingredients, and to power the chatbot companion. Culina suggests recipes based on the ingredients you have at home, making meal planning easier and reducing food waste. The goal was to create a user-friendly interface that helps users answer the question "What can I cook with what I have?".
        </p>
      </div>

      <div className="video-container">
        <iframe 
          src="https://www.youtube.com/embed/OxJnARvfnI4" 
          title="Culina App Overview"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <a 
        href="https://youtube.com/shorts/OxJnARvfnI4?feature=share" 
        target="_blank" 
        rel="noopener noreferrer"
        className="youtube-button"
      >
        Watch on YouTube
      </a>

    </div>
  );
};

export default Culina;
