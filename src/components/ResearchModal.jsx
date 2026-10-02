import React, { useEffect } from 'react';
import { 
  X, 
  BookOpen, 
  FileText, 
  ExternalLink, 
  Download, 
  CheckCircle, 
  Layers, 
  Cpu, 
  Calendar, 
  Award,
  Tag,
  ShieldCheck,
  Check,
  Copy
} from 'lucide-react';

export const ResearchModal = ({ item, type, onClose }) => {
  const [copiedBibtex, setCopiedBibtex] = React.useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!item) return null;

  const handleCopyBibtex = (bib) => {
    if (!bib) return;
    navigator.clipboard.writeText(bib).then(() => {
      setCopiedBibtex(true);
      setTimeout(() => setCopiedBibtex(false), 2500);
    });
  };

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div 
        className="modal-content research-modal-container" 
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="research-modal-header">
          <div className="modal-header-meta">
            <span className="badge-highlight badge-accepted">
              {item.badge || item.status || (type === 'research' ? 'MSc Research' : 'Academic Dissemination')}
            </span>
            {item.category && (
              <span className="modal-meta-pill">
                <Tag size={12} />
                <span>{item.category}</span>
              </span>
            )}
            {item.year && (
              <span className="modal-meta-pill">
                <Calendar size={12} />
                <span>{item.year}</span>
              </span>
            )}
          </div>
          <button 
            onClick={onClose} 
            className="modal-close-btn" 
            aria-label="Close research details modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="research-modal-body">
          {/* Main Title */}
          <h2 className="modal-research-title">{item.title}</h2>

          {/* Authors or Affiliation */}
          {item.authorsText && (
            <p className="modal-authors-line">
              <strong>Authors: </strong>
              <span>{item.authorsText}</span>
            </p>
          )}

          {item.authors && Array.isArray(item.authors) && (
            <div className="modal-authors-block">
              <span className="modal-sub-label">Authors & Affiliations:</span>
              <div className="modal-authors-list">
                {item.authors.map((auth, i) => (
                  <div key={i} className="modal-author-item">
                    <strong>{auth.name}</strong>
                    {auth.role && <span className="auth-role"> ({auth.role})</span>}
                    {auth.affiliation && <span className="auth-affil"> — {auth.affiliation}</span>}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Venue / Conference Info */}
          {(item.venue || item.conference) && (
            <div className="modal-venue-box">
              <Award size={18} className="text-cyan" />
              <div>
                <strong>Venue / Conference: </strong>
                <span>{item.venue || item.conference}</span>
                {item.volume && <span> • {item.volume}</span>}
                {item.session && <span> • {item.session}</span>}
                {item.paperRef && <span> • Ref: {item.paperRef}</span>}
              </div>
            </div>
          )}

          {/* Abstract Section (Core Requirement) */}
          {(item.abstract || item.summary || item.fullDescription) && (
            <div className="modal-section-card">
              <h3 className="modal-section-heading">
                <BookOpen size={18} className="text-cyan" />
                <span>Abstract</span>
              </h3>
              <p className="modal-abstract-text">
                {item.abstract || item.summary || item.fullDescription}
              </p>
            </div>
          )}

          {/* Research Problem Statement */}
          {item.problemStatement && (
            <div className="modal-section-card">
              <h3 className="modal-section-heading">
                <ShieldCheck size={18} className="text-amber" />
                <span>Research Problem & Motivation</span>
              </h3>
              <p className="modal-text-body">
                {item.problemStatement}
              </p>
            </div>
          )}

          {/* Core Objectives */}
          {item.objectives && item.objectives.length > 0 && (
            <div className="modal-section-card">
              <h3 className="modal-section-heading">
                <CheckCircle size={18} className="text-emerald" />
                <span>Key Research Objectives</span>
              </h3>
              <ul className="modal-bullet-list">
                {item.objectives.map((obj, i) => (
                  <li key={i}>
                    <CheckCircle size={15} className="bullet-check" />
                    <span>{obj}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Approach & Methodology */}
          {item.methodology && (
            <div className="modal-section-card">
              <h3 className="modal-section-heading">
                <Layers size={18} className="text-blue" />
                <span>Methodology & Computational Pipeline</span>
              </h3>
              <p className="modal-text-body">
                {item.methodology}
              </p>
            </div>
          )}

          {/* Key Contributions */}
          {item.contribution && (
            <div className="modal-section-card">
              <h3 className="modal-section-heading">
                <Award size={18} className="text-emerald" />
                <span>Scientific & Technical Contribution</span>
              </h3>
              <p className="modal-text-body">
                {item.contribution}
              </p>
            </div>
          )}

          {/* Technologies & Frameworks */}
          {item.technologies && item.technologies.length > 0 && (
            <div className="modal-section-card">
              <h3 className="modal-section-heading">
                <Cpu size={18} className="text-cyan" />
                <span>Technologies & Methods</span>
              </h3>
              <div className="modal-tech-pills">
                {item.technologies.map((tech, idx) => (
                  <span key={idx} className="tag tag-accent">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* BibTeX Citation (if publication) */}
          {item.bibtex && (
            <div className="modal-section-card bibtex-card">
              <div className="bibtex-header-row">
                <h3 className="modal-section-heading">
                  <FileText size={18} className="text-cyan" />
                  <span>BibTeX Citation</span>
                </h3>
                <button 
                  onClick={() => handleCopyBibtex(item.bibtex)}
                  className="btn btn-secondary btn-xs"
                >
                  {copiedBibtex ? (
                    <>
                      <Check size={13} color="#10B981" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={13} />
                      <span>Copy BibTeX</span>
                    </>
                  )}
                </button>
              </div>
              <pre className="bibtex-code-block">
                <code>{item.bibtex}</code>
              </pre>
            </div>
          )}
        </div>

        {/* Modal Footer Actions */}
        <div className="research-modal-footer">
          <div className="modal-footer-links">
            {(item.pdfUrl || (item.documents && item.documents[0]?.fileUrl)) && (
              <a
                href={item.pdfUrl || item.documents[0]?.fileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-sm"
              >
                <Download size={15} />
                <span>{item.pdfLabel || item.documents?.[0]?.title || 'Download Paper (PDF)'}</span>
              </a>
            )}

            {(item.paperUrl || item.conferenceWebsite || (item.links && item.links[0]?.url)) && (
              <a
                href={item.paperUrl || item.conferenceWebsite || item.links?.[0]?.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-sm"
              >
                <ExternalLink size={15} />
                <span>{item.links?.[0]?.label || 'Official Portal'}</span>
              </a>
            )}

            {item.githubUrl && (
              <a
                href={item.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-sm"
              >
                <ExternalLink size={15} />
                <span>GitHub Repository</span>
              </a>
            )}
          </div>

          <button onClick={onClose} className="btn btn-outline btn-sm">
            <span>Close Details</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResearchModal;
