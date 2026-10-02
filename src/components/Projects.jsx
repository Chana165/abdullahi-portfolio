import React, { useState } from 'react';
import { 
  Layers, 
  ExternalLink, 
  ArrowUpRight, 
  FileText,
  Image as ImageIcon,
  BookOpen,
  ArrowRight,
  Cpu
} from 'lucide-react';
import { projectsData } from '../data';
import { GitHubIcon } from './SocialIcons';

export const Projects = ({ onSelectImage, onOpenResearchModal }) => {
  // Filter out pure academic research thesis projects so Projects doesn't duplicate Research
  const technicalProjects = projectsData.filter(p => p.category !== 'research-ai');

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Layers size={14} />
            <span>Applied Engineering & Systems</span>
          </div>
          <h2 className="section-title">Selected Technical & Software Projects</h2>
          <p className="section-subtitle">
            Authentic open-source software, healthcare informatics systems, enterprise embedded automation, and community web deployments.
          </p>
        </div>

        {/* Cross-reference note to research */}
        <div className="research-cross-ref-banner">
          <div className="cross-ref-content">
            <Cpu size={18} className="text-cyan" />
            <span>
              Academic research frameworks (Edge AI Petroleum Framework & Stroke Patient Care) are presented in the <a href="#research">Research Section</a>.
            </span>
          </div>
          <a href="#research" className="cross-ref-link">
            <span>Explore Research</span>
            <ArrowRight size={14} />
          </a>
        </div>

        {/* Curated Projects Grid */}
        <div className="projects-curated-grid">
          {technicalProjects.map((project) => (
            <div key={project.id} className="card project-item-card">
              <div className="project-card-top">
                <span className="project-badge">{project.badge}</span>
                <span className="project-status-pill">{project.status}</span>
              </div>

              <h3 className="project-title">{project.title}</h3>
              <p className="project-short-desc">{project.shortDescription}</p>

              {/* Architecture breakdown for HausaTranslatorAI if present */}
              {project.architecture && (
                <div className="project-arch-box">
                  <span className="arch-label">System Architecture:</span>
                  <ul className="arch-list">
                    {project.architecture.map((item, i) => (
                      <li key={i}><code>{item}</code></li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Personal Role & Contribution */}
              <div className="project-contribution-box">
                <strong>My Contribution: </strong>
                <span>{project.myContribution}</span>
              </div>

              {/* Tech Stack Tags */}
              <div className="project-tech-pills">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="tag tag-sm">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="project-card-footer">
                <button
                  onClick={() => onOpenResearchModal && onOpenResearchModal(project, 'project')}
                  className="btn btn-secondary btn-sm"
                  title="View detailed architecture & objectives"
                >
                  <BookOpen size={14} />
                  <span>Inspect Details</span>
                </button>

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm"
                    title="View GitHub Repository"
                  >
                    <GitHubIcon size={15} />
                    <span>GitHub Code</span>
                    <ArrowUpRight size={13} />
                  </a>
                )}

                {project.publicationLink && (
                  <a 
                    href="#publications" 
                    className="btn btn-outline btn-sm"
                  >
                    <FileText size={14} />
                    <span>Related Paper</span>
                  </a>
                )}

                {project.image && (
                  <button
                    onClick={() => onSelectImage && onSelectImage({
                      src: project.image,
                      title: project.title,
                      caption: project.imageAlt || project.title
                    })}
                    className="btn btn-outline btn-sm"
                  >
                    <ImageIcon size={14} />
                    <span>Visual</span>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
