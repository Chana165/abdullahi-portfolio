import React, { useState } from 'react';
import { 
  BookOpen, 
  FileText, 
  ExternalLink, 
  Download, 
  Check, 
  Copy, 
  Calendar, 
  Tag, 
  Award,
  Image as ImageIcon,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { publicationsData, publicationCategories } from '../data';

export const Publications = ({ onSelectImage, onOpenResearchModal }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [copiedId, setCopiedId] = useState(null);
  const [expandedAbstracts, setExpandedAbstracts] = useState({});

  const filteredPublications = selectedCategory === 'all'
    ? publicationsData
    : publicationsData.filter(p => p.category === selectedCategory);

  const getBibtex = (pub) => {
    if (pub.id === 'iccomtech-2026') {
      return `@inproceedings{umar2026edgeai,
  title={Development of an Edge AI Framework for Real-Time Detection of Petroleum Products Adulteration},
  author={Umar, Abdullahi Yusuf and Bakare, Ganiyu A. and Sulaiman, Ibrahim A. Dodo},
  booktitle={2026 IEEE International Conference on Computing Technology (ICCOMTECH)},
  year={2026},
  note={Accepted and Presented; Proceedings Pending}
}`;
    }
    return `@article{umar2025childbirth,
  title={Childbirth Rate Prediction System Based on Time Series Analysis},
  author={Umar, Abdullahi Yusuf and Garba, Adamu Abdullahi and Mabu, Audu Musa and Dauba, Ibrahim Bukar},
  journal={International Journal of Research Publication and Reviews},
  volume={6},
  number={7},
  pages={2355--2360},
  year={2025},
  issn={2582-7421}
}`;
  };

  const handleCopyBibtex = (pub) => {
    const bib = getBibtex(pub);
    navigator.clipboard.writeText(bib).then(() => {
      setCopiedId(pub.id);
      setTimeout(() => setCopiedId(null), 2500);
    });
  };

  const toggleAbstract = (id) => {
    setExpandedAbstracts(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section id="publications" className="section publications-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <BookOpen size={14} />
            <span>Academic Dissemination</span>
          </div>
          <h2 className="section-title">Peer-Reviewed Publications & Proceedings</h2>
          <p className="section-subtitle">
            Authentic peer-reviewed journal papers and IEEE conference presentations disseminating research in Edge AI, intelligent sensing, and applied time-series analytics.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="category-filter-tabs">
          {publicationCategories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setSelectedCategory(cat.key)}
              className={`filter-tab-btn ${selectedCategory === cat.key ? 'active' : ''}`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Publications Scholarly List */}
        <div className="publications-list">
          {filteredPublications.map((pub) => {
            const isAbstractExpanded = !!expandedAbstracts[pub.id];
            const bibtexContent = getBibtex(pub);
            const pubWithBibtex = { ...pub, bibtex: bibtexContent };

            return (
              <article key={pub.id} className="card publication-card">
                <div className="publication-card-header">
                  <div className="pub-badge-row">
                    <span className={`tag ${pub.category === 'published' ? 'tag-published' : 'tag-accepted'}`}>
                      <Award size={13} />
                      <span>{pub.badge}</span>
                    </span>
                    <span className="pub-type-tag">{pub.type}</span>
                  </div>
                  <div className="pub-year-tag">
                    <Calendar size={14} />
                    <span>{pub.year}</span>
                  </div>
                </div>

                <h3 className="publication-title">{pub.title}</h3>

                <p className="publication-authors">
                  <strong>Authors: </strong>
                  {pub.authorsText}
                </p>

                <div className="publication-venue-box">
                  <span className="venue-name">{pub.venue}</span>
                  {pub.volume && <span className="venue-volume"> • {pub.volume}</span>}
                  {pub.session && <span className="venue-session"> • {pub.session}</span>}
                  {pub.issn && <span className="venue-issn"> • ISSN: {pub.issn}</span>}
                </div>

                {/* Verification / Presentation Alert */}
                {pub.statusNote && (
                  <div className="publication-status-alert">
                    <strong>Status Note: </strong> {pub.statusNote}
                  </div>
                )}

                {/* Abstract Preview / Expanded Block */}
                <div className="publication-abstract-container">
                  <div className="abstract-toggle-bar">
                    <button
                      onClick={() => toggleAbstract(pub.id)}
                      className="abstract-toggle-btn"
                      aria-expanded={isAbstractExpanded}
                    >
                      <span>{isAbstractExpanded ? 'Collapse Abstract' : 'Read Abstract'}</span>
                      {isAbstractExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>
                    
                    <button
                      onClick={() => onOpenResearchModal && onOpenResearchModal(pubWithBibtex, 'publication')}
                      className="abstract-modal-link-btn"
                    >
                      <BookOpen size={14} />
                      <span>View in Full Modal</span>
                    </button>
                  </div>

                  {isAbstractExpanded && (
                    <div className="publication-expanded-abstract">
                      <p>{pub.abstract}</p>
                    </div>
                  )}
                </div>

                {/* Tag Cloud */}
                <div className="pub-tags-list">
                  {pub.tags.map((t, idx) => (
                    <span key={idx} className="tag tag-sm">
                      <Tag size={11} /> {t}
                    </span>
                  ))}
                </div>

                {/* Card Actions */}
                <div className="publication-actions-row">
                  {pub.pdfUrl && (
                    <a
                      href={pub.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary btn-sm"
                    >
                      <Download size={15} />
                      <span>{pub.pdfLabel || 'Download PDF'}</span>
                    </a>
                  )}

                  {pub.paperUrl && (
                    <a
                      href={pub.paperUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary btn-sm"
                    >
                      <ExternalLink size={15} />
                      <span>Publisher Portal</span>
                    </a>
                  )}

                  {pub.infographicUrl && (
                    <button
                      onClick={() => onSelectImage && onSelectImage({
                        src: pub.infographicUrl,
                        title: pub.title,
                        caption: "Research infographic and statistical demographic forecast overview."
                      })}
                      className="btn btn-secondary btn-sm"
                    >
                      <ImageIcon size={15} />
                      <span>View Visual Chart</span>
                    </button>
                  )}

                  <button
                    onClick={() => handleCopyBibtex(pub)}
                    className="btn btn-outline btn-sm copy-bibtex-btn"
                    title="Copy BibTeX Citation"
                  >
                    {copiedId === pub.id ? (
                      <>
                        <Check size={14} color="#10B981" />
                        <span>Copied BibTeX!</span>
                      </>
                    ) : (
                      <>
                        <Copy size={14} />
                        <span>Cite (BibTeX)</span>
                      </>
                    )}
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Publications;
