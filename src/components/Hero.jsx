import React from 'react';
import { 
  Download, 
  ArrowRight, 
  BookOpen, 
  Cpu, 
  Mail, 
  ExternalLink 
} from 'lucide-react';
import { profileData } from '../data';
import { GitHubIcon, LinkedInIcon, GoogleScholarIcon, OrcidIcon } from './SocialIcons';

export const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="container hero-container">
        <div className="hero-grid-layout">
          {/* Information & Primary Actions */}
          <div className="hero-text-content">
            <span className="hero-eyebrow">Academic & Research Portfolio</span>

            <h1 className="hero-name">
              {profileData.fullName}
            </h1>

            <p className="hero-research-identity">
              <strong>Embedded AI Researcher</strong>
              <span className="identity-separator">•</span>
              <span>Edge AI</span>
              <span className="identity-separator">•</span>
              <span>Intelligent Systems</span>
              <span className="identity-separator">•</span>
              <span>Computer Vision</span>
            </p>

            <p className="hero-intro">
              Postgraduate researcher at the Centre for Embedded Artificial Intelligence and Smart Energy Systems (CEAISES), Abubakar Tafawa Balewa University (ATBU). Designing lightweight machine learning architectures, physics-guided models, and low-latency edge inference systems for industrial quality assurance and clinical monitoring.
            </p>

            {/* Core Actions */}
            <div className="hero-actions-group">
              <a href="#research" className="btn btn-primary btn-lg">
                <Cpu size={18} />
                <span>View Research</span>
                <ArrowRight size={16} />
              </a>

              <a href="#publications" className="btn btn-secondary btn-lg">
                <BookOpen size={18} />
                <span>Publications</span>
              </a>

              <a 
                href={profileData.assets.cvPdf} 
                download={profileData.assets.cvFileName}
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-outline btn-lg"
                title="Download Official Curriculum Vitae (PDF)"
              >
                <Download size={18} />
                <span>Download CV</span>
              </a>

              <a href="#contact" className="btn btn-secondary btn-lg">
                <Mail size={18} />
                <span>Contact</span>
              </a>
            </div>

            {/* Verified Digital Profiles */}
            <div className="hero-social-block">
              <span className="social-label">Academic Profiles & Code:</span>
              <div className="social-icon-links">
                {profileData.socialLinks.github && (
                  <a
                    href={profileData.socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-btn-card"
                    title="GitHub (@Chana165)"
                    aria-label="GitHub Profile"
                  >
                    <GitHubIcon size={16} className="social-icon-svg" />
                    <span>GitHub</span>
                  </a>
                )}

                {profileData.socialLinks.linkedin && (
                  <a
                    href={profileData.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-btn-card"
                    title="LinkedIn Profile"
                    aria-label="LinkedIn Profile"
                  >
                    <LinkedInIcon size={16} className="social-icon-svg text-linkedin" />
                    <span>LinkedIn</span>
                  </a>
                )}

                {profileData.socialLinks.googleScholar && (
                  <a
                    href={profileData.socialLinks.googleScholar}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-btn-card"
                    title="Google Scholar Profile"
                    aria-label="Google Scholar Profile"
                  >
                    <GoogleScholarIcon size={16} className="social-icon-svg text-scholar" />
                    <span>Scholar</span>
                  </a>
                )}

                {profileData.socialLinks.orcid && (
                  <a
                    href={profileData.socialLinks.orcid}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-btn-card"
                    title="ORCID Record"
                    aria-label="ORCID Profile"
                  >
                    <OrcidIcon size={16} className="social-icon-svg" />
                    <span>ORCID</span>
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Profile Photograph in Restrained Academic Frame */}
          <div className="hero-visual-content">
            <div className="hero-image-wrapper">
              <div className="image-frame">
                <img
                  src={profileData.assets.profilePhoto}
                  alt={profileData.assets.profilePhotoAlt}
                  className="hero-profile-img"
                  width="440"
                  height="440"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
