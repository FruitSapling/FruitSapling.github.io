// App.js
import { React, useEffect } from 'react';
import './index.css'; // Import global styles from Index.css
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Work from './pages/Work';
import About from './pages/About';
import Contact from './pages/Contact';
import Project from './pages/Project';
import Cv from './pages/Cv'; // Import the CV page

function App() {

  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const redirectPath = params.get('redirect');
    if (redirectPath) {
      navigate(redirectPath); // Navigate to the desired path
    }
  }, [navigate]);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/work" />} />
        <Route path="/work" element={<Work />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project/:projectId" element={<Project />} />
        <Route path="/cv" element={<Cv />} /> {/* New route for CV page */}
      </Routes>
    </div>
  );
}

export default App;
