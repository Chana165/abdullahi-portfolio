import React, { useState, useEffect } from 'react';
import { 
  Sun, 
  Moon, 
  Menu, 
  X, 
  Download, 
  BookOpen, 
  Cpu, 
  GraduationCap, 
  Layers, 
  Mail, 
  User
} from 'lucide-react';
import { profileData } from '../data';

export const Navbar = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { name: 'About', href: '#about', icon: User },
    { name: 'Research', href: '#research', icon: Cpu },
    { name: 'Publications', href: '#publications', icon: BookOpen },
    { name: 'Projects', href: '#projects', icon: Layers },
    { name: 'Background', href: '#background', icon: GraduationCap },
    { name: 'Contact', href: '#contact', icon: Mail }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // Section tracking
      const sections = ['about', 'research', 'publications', 'projects', 'background', 'contact'];
      const scrollPos = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          return;
        }
      }
      if (window.scrollY < 200) {
        setActiveSection('hero');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <header className={`navbar-header ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Brand / Logo */}
        <a href="#hero" className="navbar-brand" onClick={() => setIsOpen(false)}>
          <div className="brand-avatar-box">
            <span className="brand-monogram">AY</span>
          </div>
          <div className="brand-text-block">
            <span className="brand-name">{profileData.fullName}</span>
            <span className="brand-sub">Embedded AI Researcher</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="navbar-nav-desktop" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.name}
                href={link.href}
                className={`nav-link ${isActive ? 'nav-link-active' : ''}`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Header Right Actions */}
        <div className="navbar-actions">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="theme-toggle-btn"
            aria-label={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Download CV CTA */}
          <a
            href={profileData.assets.cvPdf}
            download={profileData.assets.cvFileName}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm cv-nav-btn"
            title="Download Official Curriculum Vitae (PDF)"
          >
            <Download size={14} />
            <span>Download CV</span>
          </a>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="mobile-menu-btn"
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div className={`mobile-nav-drawer ${isOpen ? 'mobile-nav-open' : ''}`}>
        <div className="mobile-nav-backdrop" onClick={() => setIsOpen(false)} />
        <div className="mobile-nav-content">
          <div className="mobile-nav-header">
            <div className="brand-text-block">
              <span className="brand-name">{profileData.fullName}</span>
              <span className="brand-sub">Postgraduate Researcher</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="mobile-close-btn"
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>

          <nav className="mobile-nav-links" aria-label="Mobile Navigation">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`mobile-nav-link ${isActive ? 'mobile-nav-link-active' : ''}`}
                  onClick={() => setIsOpen(false)}
                >
                  <Icon size={18} className="mobile-nav-icon" />
                  <span>{link.name}</span>
                </a>
              );
            })}
          </nav>

          <div className="mobile-nav-footer">
            <a
              href={profileData.assets.cvPdf}
              download={profileData.assets.cvFileName}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-full"
              onClick={() => setIsOpen(false)}
            >
              <Download size={16} />
              <span>Download Official CV (PDF)</span>
            </a>

            <div className="mobile-theme-row">
              <span className="mobile-theme-label">Theme Mode:</span>
              <button
                onClick={toggleTheme}
                className="btn btn-secondary btn-sm"
              >
                {theme === 'dark' ? (
                  <>
                    <Sun size={16} /> <span>Light Mode</span>
                  </>
                ) : (
                  <>
                    <Moon size={16} /> <span>Dark Mode</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
