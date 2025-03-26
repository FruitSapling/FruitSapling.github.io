// App.js
import { React, useEffect } from 'react';
import './index.css';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Work from './pages/Work';
import About from './pages/About';
import Contact from './pages/Contact';
import Cv from './pages/Cv';

// Import project pages
import DfT from './pages/project/DfT';
import TPR from './pages/project/TPR';
import GDS from './pages/project/GDS';
import CA from './pages/project/CA';
import CABO from './pages/project/CABO';
import BEIS from './pages/project/BEIS';
import SJ23 from './pages/project/SJ23';

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const redirectPath = params.get('redirect');
    if (redirectPath) {
      navigate(redirectPath);
    }
  }, [navigate]);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/about" />} />
        <Route path="/work" element={<Work />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cv" element={<Cv />} />
        
        {/* Specific Project Pages */}
        <Route path="/project/DfT" element={<DfT />} />
        <Route path="/project/TPR" element={<TPR />} />
        <Route path="/project/GDS" element={<GDS />} />
        <Route path="/project/CA" element={<CA />} />
        <Route path="/project/CABO" element={<CABO />} />
        <Route path="/project/BEIS" element={<BEIS />} />
        <Route path="/project/SJ23" element={<SJ23 />} />
      </Routes>
    </div>
  );
}

export default App;
