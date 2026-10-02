import React from 'react';
import { ExternalLink, BookOpen, FileText, Award, CheckCircle } from 'lucide-react';
import { profileData } from '../data';
import { GitHubIcon, LinkedInIcon, GoogleScholarIcon, OrcidIcon } from './SocialIcons';

export const AcademicProfiles = () => {
  return (
    <section id="profiles" className="section profiles-section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <BookOpen size={14} />
            <span>Digital Identity</span>
          </div>
          <h2 className="section-title">Academic & Professional Profiles</h2>
          <p className="section-subtitle">
            Connect across academic indexes, open-source repositories, and professional engineering networks.
          </p>
        </div>

        <div className="profiles-cards-grid">
          {/* GitHub Card */}
          <div className="card profile-network-card">
            <div className="profile-card-icon-box bg-github">
              <GitHubIcon size={32} />
            </div>
            <div className="profile-card-details">
              <h3 className="profile-network-name">GitHub</h3>
              <a 
                href={profileData.socialLinks.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="profile-network-handle profile-handle-link"
                aria-label="Visit GitHub repository profile @Chana165"
              >
                @Chana165
              </a>
              <p className="profile-network-desc">
                Open-source software projects, Python utilities, Hausa translation tools, and dataset repositories.
              </p>
              <a
                href={profileData.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-sm profile-btn"
                aria-label="Visit GitHub Profile of Abdullahi Yusuf Umar"
              >
                <span>Visit GitHub Profile</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>

          {/* LinkedIn Card */}
          <div className="card profile-network-card">
            <div className="profile-card-icon-box bg-linkedin">
              <LinkedInIcon size={32} />
            </div>
            <div className="profile-card-details">
              <h3 className="profile-network-name">LinkedIn</h3>
              <a 
                href={profileData.socialLinks.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="profile-network-handle profile-handle-link"
                aria-label="Visit LinkedIn profile of Abdullahi Yusuf Umar"
              >
                Abdullahi Yusuf Umar
              </a>
              <p className="profile-network-desc">
                Professional networking, academic milestones, research collaborations, and conference participation.
              </p>
              <a
                href={profileData.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-sm profile-btn"
                aria-label="Connect with Abdullahi Yusuf Umar on LinkedIn"
              >
                <span>Connect on LinkedIn</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>

          {/* Google Scholar Card */}
          <div className="card profile-network-card">
            <div className="profile-card-icon-box bg-scholar">
              <GoogleScholarIcon size={32} />
            </div>
            <div className="profile-card-details">
              <h3 className="profile-network-name">Google Scholar</h3>
              <p className="profile-network-handle">Citations & Research Index</p>
              <p className="profile-network-desc">
                Scholarly citations, journal articles, time-series forecasting publications, and conference proceedings.
              </p>
              {profileData.socialLinks.googleScholar ? (
                <a
                  href={profileData.socialLinks.googleScholar}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-sm profile-btn"
                >
                  <span>View Citations</span>
                  <ExternalLink size={14} />
                </a>
              ) : (
                <div className="profile-pending-note">
                  <CheckCircle size={14} />
                  <span>Profile URL configurable in <code>src/data/profile.js</code></span>
                </div>
              )}
            </div>
          </div>

          {/* ORCID Card */}
          <div className="card profile-network-card">
            <div className="profile-card-icon-box bg-orcid">
              <OrcidIcon size={32} />
            </div>
            <div className="profile-card-details">
              <h3 className="profile-network-name">ORCID Identifier</h3>
              <p className="profile-network-handle">Open Researcher & Contributor ID</p>
              <p className="profile-network-desc">
                Persistent digital identifier distinguishing author contributions across international scientific publications.
              </p>
              {profileData.socialLinks.orcid ? (
                <a
                  href={profileData.socialLinks.orcid}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-sm profile-btn"
                >
                  <span>View ORCID Record</span>
                  <ExternalLink size={14} />
                </a>
              ) : (
                <div className="profile-pending-note">
                  <CheckCircle size={14} />
                  <span>ORCID ID configurable in <code>src/data/profile.js</code></span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademicProfiles;
