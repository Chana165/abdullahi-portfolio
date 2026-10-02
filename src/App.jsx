import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Research from './components/Research';
import Publications from './components/Publications';
import Projects from './components/Projects';
import Background from './components/Background';
import Skills from './components/Skills';
import Certificates from './components/Certificates';
import AcademicProfiles from './components/AcademicProfiles';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ImageModal from './components/ImageModal';
import ResearchModal from './components/ResearchModal';

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('portfolio-theme') || 'dark';
  });

  const [activeImage, setActiveImage] = useState(null);
  const [activeResearchItem, setActiveResearchItem] = useState(null);
  const [activeResearchType, setActiveResearchType] = useState('research');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleOpenResearchModal = (item, type = 'research') => {
    setActiveResearchItem(item);
    setActiveResearchType(type);
  };

  return (
    <div className="portfolio-app-root">
      {/* 1. Header Navigation */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* 2. Main Content Stream */}
      <main id="main-content">
        {/* Hero: Researcher Identity & Primary Inquiries */}
        <Hero />

        {/* About: Concise Academic Narrative & Agenda */}
        <About />

        {/* Research: The Main Section (Featured & Selected Inventions) */}
        <Research 
          onSelectImage={setActiveImage} 
          onOpenResearchModal={handleOpenResearchModal} 
        />

        {/* Publications: Scholarly Dissemination & Citations */}
        <Publications 
          onSelectImage={setActiveImage} 
          onOpenResearchModal={handleOpenResearchModal} 
        />

        {/* Projects: Curated Applied Software & Systems */}
        <Projects 
          onSelectImage={setActiveImage} 
          onOpenResearchModal={handleOpenResearchModal} 
        />

        {/* Background: Concise Education & Experience Timeline */}
        <Background />

        {/* Skills: Compact Technical Capabilities */}
        <Skills />

        {/* Credentials: Curated Honours, Memberships & Verified Documents */}
        <Certificates onSelectImage={setActiveImage} />

        {/* Academic Profiles: Digital Indices & Repositories */}
        <AcademicProfiles />

        {/* Contact: Academic Inquiries */}
        <Contact />
      </main>

      {/* 3. Footer */}
      <Footer />

      {/* 4. Modals */}
      <ImageModal 
        image={activeImage} 
        onClose={() => setActiveImage(null)} 
      />

      <ResearchModal 
        item={activeResearchItem} 
        type={activeResearchType} 
        onClose={() => setActiveResearchItem(null)} 
      />
    </div>
  );
}

export default App;
