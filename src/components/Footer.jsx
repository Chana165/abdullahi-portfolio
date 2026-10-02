import React from 'react';
import { ArrowUp, Download, Heart } from 'lucide-react';
import { profileData } from '../data';
import { GitHubIcon, LinkedInIcon, GoogleScholarIcon, OrcidIcon } from './SocialIcons';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-container">
      <div className="container footer-content-grid">
        {/* Brand & Persona */}
        <div className="footer-brand-col">
          <div className="footer-brand-header">
            <div className="brand-avatar-box">
              <span className="brand-monogram">AY</span>
            </div>
            <div>
              <h3 className="footer-name">{profileData.fullName}</h3>
              <p className="footer-title">{profileData.title}</p>
            </div>
          </div>
          <p className="footer-bio-snippet">
            First-Class Computer Science graduate (GPA: 4.66/5.0) and MSc Embedded Artificial Intelligence researcher. Focused on Edge AI, intelligent sensing, and real-time computer vision systems.
          </p>
          <div className="footer-social-row">
            {profileData.socialLinks.github && (
              <a 
                href={profileData.socialLinks.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-social-btn"
                title="GitHub (@Chana165)"
                aria-label="GitHub Profile"
              >
                <GitHubIcon size={18} />
              </a>
            )}
            {profileData.socialLinks.linkedin && (
              <a 
                href={profileData.socialLinks.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-social-btn"
                title="LinkedIn"
                aria-label="LinkedIn Profile"
              >
                <LinkedInIcon size={18} />
              </a>
            )}
            {profileData.socialLinks.googleScholar && (
              <a 
                href={profileData.socialLinks.googleScholar} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-social-btn"
                title="Google Scholar"
                aria-label="Google Scholar"
              >
                <GoogleScholarIcon size={18} />
              </a>
            )}
            {profileData.socialLinks.orcid && (
              <a 
                href={profileData.socialLinks.orcid} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-social-btn"
                title="ORCID Record"
                aria-label="ORCID"
              >
                <OrcidIcon size={18} />
              </a>
            )}
          </div>
        </div>

        {/* Quick Nav Links */}
        <div className="footer-links-col">
          <h4 className="footer-heading">Portfolio Sections</h4>
          <ul className="footer-nav-list">
            <li><a href="#about">Academic Profile</a></li>
            <li><a href="#research">MSc Research Highlights</a></li>
            <li><a href="#publications">Publications & IEEE Work</a></li>
            <li><a href="#projects">Software & Edge Projects</a></li>
            <li><a href="#education">Education & Degrees</a></li>
            <li><a href="#experience">Research & Industry Experience</a></li>
          </ul>
        </div>

        {/* Credentials & Downloads */}
        <div className="footer-credentials-col">
          <h4 className="footer-heading">Academic Verification</h4>
          <ul className="footer-nav-list">
            <li><a href="#skills">Technical Competencies</a></li>
            <li><a href="#certificates">IEEE & ISAC Memberships</a></li>
            <li><a href="#profiles">Digital Research Profiles</a></li>
            <li><a href="#contact">Contact & Inquiries</a></li>
          </ul>
          <div style={{ marginTop: '16px' }}>
            <a 
              href={profileData.assets.cvPdf} 
              download={profileData.assets.cvFileName}
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-secondary btn-sm"
            >
              <Download size={14} />
              <span>Download Official CV (PDF)</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom-bar">
        <div className="container footer-bottom-flex">
          <p className="copyright-text">
            © {currentYear} {profileData.fullName}. All rights reserved. Personal Academic, Research & Technology Portfolio.
          </p>
          <button 
            onClick={scrollToTop} 
            className="back-to-top-btn"
            title="Scroll back to top"
            aria-label="Back to top"
          >
            <span>Back to Top</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
