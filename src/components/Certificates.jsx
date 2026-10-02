import React, { useState } from 'react';
import { 
  Award, 
  ShieldCheck, 
  Download, 
  Eye, 
  GraduationCap, 
  ExternalLink,
  Presentation
} from 'lucide-react';
import { 
  certificatesData, 
  professionalMemberships, 
  awardsData 
} from '../data';

export const Certificates = ({ onSelectImage }) => {
  // Curated featured certificates with actual documents/images
  const verifiedCerts = certificatesData.filter(c => c.featured || c.image || c.pdfUrl);

  return (
    <section id="certificates" className="section certificates-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Award size={14} />
            <span>Recognition & Accreditations</span>
          </div>
          <h2 className="section-title">Honours, Memberships & Credentials</h2>
          <p className="section-subtitle">
            Curated record of professional scientific society memberships, national academic scholarships, and specialized postgraduate research training.
          </p>
        </div>

        <div className="credentials-curated-layout">
          {/* Column 1: Professional Memberships & Accreditations */}
          <div className="card credentials-card-col">
            <div className="col-heading-row">
              <ShieldCheck size={20} className="text-cyan" />
              <h3 className="col-heading-title">Scientific Society Memberships</h3>
            </div>

            <div className="memberships-compact-list">
              {professionalMemberships.slice(0, 4).map((mem, idx) => (
                <div key={idx} className="membership-compact-item">
                  <div className="membership-item-top">
                    <h4 className="membership-name">{mem.name}</h4>
                    <span className="membership-status-pill">{mem.badge}</span>
                  </div>
                  <p className="membership-grade">{mem.grade}</p>
                  <span className="membership-society">{mem.society}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Academic Honours & Scholarships */}
          <div className="card credentials-card-col">
            <div className="col-heading-row">
              <Award size={20} className="text-emerald" />
              <h3 className="col-heading-title">Academic Honours & Scholarships</h3>
            </div>

            <div className="awards-compact-list">
              {awardsData.map((award, idx) => (
                <div key={idx} className="award-compact-item">
                  <div className="award-item-top">
                    <h4 className="award-title">{award.title}</h4>
                    <span className="award-year-tag">{award.year}</span>
                  </div>
                  <span className="award-issuer">{award.issuer}</span>
                  <p className="award-desc">{award.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Verified Certificate Documentation Bar */}
        <div className="card verified-documents-strip" style={{ marginTop: '28px' }}>
          <div className="docs-strip-header">
            <GraduationCap size={18} className="text-blue" />
            <h4 className="docs-strip-title">Verified Certificate Documentation</h4>
          </div>

          <div className="docs-strip-grid">
            {verifiedCerts.map((cert) => (
              <div key={cert.id} className="doc-item-row">
                <div className="doc-info">
                  <h5 className="doc-title">{cert.title}</h5>
                  <span className="doc-meta">{cert.issuer} • {cert.issueDate}</span>
                </div>

                <div className="doc-actions">
                  {cert.image && (
                    <button
                      onClick={() => onSelectImage && onSelectImage({
                        src: cert.image,
                        title: cert.title,
                        caption: `${cert.issuer} • ${cert.issueDate}`
                      })}
                      className="btn btn-secondary btn-xs"
                      title="Inspect Certificate Document"
                    >
                      <Eye size={13} />
                      <span>Preview</span>
                    </button>
                  )}

                  {cert.pdfUrl && (
                    <a
                      href={cert.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline btn-xs"
                      title="Download Verification PDF"
                    >
                      <Download size={13} />
                      <span>PDF</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
