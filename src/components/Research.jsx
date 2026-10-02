import React from 'react';
import { 
  Cpu, 
  FileText, 
  CheckCircle, 
  ExternalLink, 
  Layers, 
  Activity, 
  Zap, 
  ShieldCheck, 
  Maximize2, 
  BookOpen, 
  ArrowRight,
  FlaskConical,
  Sparkles,
  Eye,
  HeartPulse
} from 'lucide-react';
import { 
  featuredResearch, 
  strokePatientCareResearch, 
  futureResearchInterests,
  majorResearchFocus 
} from '../data';

export const Research = ({ onSelectImage, onOpenResearchModal }) => {
  return (
    <section id="research" className="section research-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Cpu size={14} />
            <span>Primary Research Agenda</span>
          </div>
          <h2 className="section-title">Research Focus & Scientific Investigations</h2>
          <p className="section-subtitle">
            Postgraduate research conducted at the Centre for Embedded Artificial Intelligence and Smart Energy Systems (CEAISES), ATBU Bauchi, focused on low-latency on-device intelligence and physical sensory systems.
          </p>
        </div>

        {/* 1. Core Research Focus Pillars (Compact & Dignified) */}
        <div className="research-pillars-grid">
          {majorResearchFocus.slice(0, 4).map((area) => (
            <div key={area.id} className="pillar-card">
              <div className="pillar-header">
                <span className="pillar-tagline">{area.tagline}</span>
              </div>
              <h3 className="pillar-title">{area.title}</h3>
              <p className="pillar-desc">{area.description}</p>
              <div className="pillar-tech-pills">
                {area.technologies.slice(0, 3).map((t, i) => (
                  <span key={i} className="pillar-tech-tag">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* 2. FEATURED RESEARCH (The Centerpiece) */}
        <div className="research-block-featured">
          <div className="featured-section-label">
            <span className="label-badge">Featured Research Work</span>
            <span className="label-note">Postgraduate Thesis Investigation</span>
          </div>

          <div className="card featured-research-card">
            <div className="research-meta-tags">
              <span className="badge-highlight badge-accepted">
                {featuredResearch.status}
              </span>
              <span className="badge-highlight badge-session">
                {featuredResearch.conference}
              </span>
              <span className="badge-highlight badge-ref">
                Ref: {featuredResearch.paperRef}
              </span>
            </div>

            <h3 className="featured-research-title">
              {featuredResearch.title}
            </h3>

            <div className="research-authors-row">
              <span className="authors-label">Authors:</span>
              <span className="authors-text">
                <strong>Abdullahi Yusuf Umar</strong> (Lead Researcher), Ganiyu A. Bakare, Ibrahim A. Dodo Sulaiman
              </span>
            </div>

            {/* Structured Overview Grid */}
            <div className="featured-summary-grid">
              <div className="summary-item">
                <span className="summary-label">The Problem Investigated:</span>
                <p className="summary-text">
                  Conventional laboratory spectrometry (FTIR, Gas Chromatography) is accurate but costly, slow, and impossible to deploy at retail dispensing points, leaving supply chains vulnerable to petroleum adulteration.
                </p>
              </div>

              <div className="summary-item">
                <span className="summary-label">Technical Approach & Methodology:</span>
                <p className="summary-text">
                  Synthesized a 5,600-sample physics-guided dataset with standardized ASTM physicochemical properties and Gaussian noise. Developed a 4-tier ML architecture (Random Forest, XGBoost, and ANN-XGBoost ensemble) optimized with TFLite for edge microcomputers.
                </p>
              </div>

              <div className="summary-item full-width">
                <span className="summary-label">Key Contribution & Empirical Results:</span>
                <p className="summary-text">
                  Achieved <strong>98% fuel classification</strong>, <strong>92.38% purity detection (ROC-AUC: 0.95)</strong>, and <strong>89% adulterant identification</strong> with sub-2ms edge inference latency (0.25 to 5.9 MB model footprints). Physically verified at the ATBU Petroleum Engineering Laboratory.
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="featured-actions-row">
              <button
                onClick={() => onOpenResearchModal && onOpenResearchModal(featuredResearch, 'research')}
                className="btn btn-primary btn-sm"
              >
                <BookOpen size={16} />
                <span>Read Full Abstract & Methodology</span>
              </button>

              <a
                href="/papers/ICCOMTECH2026-102.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-sm"
              >
                <FileText size={16} />
                <span>Official Acceptance Letter (PDF)</span>
              </a>

              <a
                href={featuredResearch.conferenceWebsite}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-sm"
              >
                <ExternalLink size={14} />
                <span>IEEE Conference Portal</span>
              </a>
            </div>

            {/* Embedded Visual Figures Preview Bar */}
            <div className="featured-figures-bar">
              <span className="figures-bar-title">Empirical Visualizations:</span>
              <div className="figures-thumb-row">
                {featuredResearch.sections.figures.slice(0, 4).map((fig) => (
                  <button
                    key={fig.id}
                    onClick={() => onSelectImage && onSelectImage(fig)}
                    className="figure-thumb-btn"
                    title={`Inspect: ${fig.title}`}
                  >
                    <img src={fig.src} alt={fig.title} loading="lazy" />
                    <span className="fig-overlay-label">
                      <Maximize2 size={12} />
                      <span>{fig.title.split(' ')[0]} {fig.title.split(' ')[1]}</span>
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 3. SELECTED RESEARCH (Second Track) */}
        <div className="research-block-selected">
          <div className="featured-section-label">
            <span className="label-badge">Selected Research Project</span>
            <span className="label-note">Biomedical Computer Vision Track</span>
          </div>

          <div className="card selected-research-card">
            <div className="research-meta-tags">
              <span className="badge-highlight badge-accepted">
                {strokePatientCareResearch.status}
              </span>
              <span className="badge-highlight badge-session">
                Biomedical Computer Vision
              </span>
              <span className="badge-highlight badge-ref">
                CEAISES, ATBU Bauchi
              </span>
            </div>

            <h3 className="selected-research-title">
              {strokePatientCareResearch.title}
            </h3>

            <div className="featured-summary-grid">
              <div className="summary-item">
                <span className="summary-label">Clinical Problem & Motivation:</span>
                <p className="summary-text">
                  Post-stroke rehabilitation patients require continuous, privacy-preserving monitoring to detect accidental falls without high-latency cloud streaming or intrusive wearable sensors.
                </p>
              </div>

              <div className="summary-item">
                <span className="summary-label">Data Engineering & Model Architecture:</span>
                <p className="summary-text">
                  Engineered a high-throughput pipeline in Python and Google Colab aggregating 5,864 FallVision video sequence CSVs into a 565,477-row master matrix across 56 spatial-velocity dimensions. Deployed YOLOv8n-Pose for real-time 17-keypoint anatomical tracking.
                </p>
              </div>

              <div className="summary-item full-width">
                <span className="summary-label">Contribution:</span>
                <p className="summary-text">
                  Established an end-to-end Edge AI skeletal tracking pipeline enabling sub-second on-device anomaly classification distinguishing sudden falls from normal activities of daily living (chair, bed, and standing transitions) with zero patient privacy compromise.
                </p>
              </div>
            </div>

            <div className="featured-actions-row">
              <button
                onClick={() => onOpenResearchModal && onOpenResearchModal(strokePatientCareResearch, 'research')}
                className="btn btn-secondary btn-sm"
              >
                <BookOpen size={16} />
                <span>Read Research Abstract & Pipeline</span>
              </button>
            </div>
          </div>
        </div>

        {/* 4. Target PhD Research Directions (Biotecnika: Interested Research Areas) */}
        <div className="card target-phd-card">
          <div className="phd-header">
            <div className="section-badge">
              <Sparkles size={14} />
              <span>Target Research Horizons</span>
            </div>
            <h3 className="phd-title">Prospective Doctoral (PhD) Inquiries</h3>
            <p className="phd-subtitle">
              Open research directions and theoretical inquiries of primary academic interest for prospective doctoral research programs:
            </p>
          </div>

          <div className="phd-topics-grid">
            {futureResearchInterests.map((interest, idx) => (
              <div key={idx} className="phd-topic-item">
                <span className="phd-num">0{idx + 1}</span>
                <div>
                  <h4 className="phd-topic-title">{interest.topic}</h4>
                  <p className="phd-topic-desc">{interest.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;
