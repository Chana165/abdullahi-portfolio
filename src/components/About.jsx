import React from 'react';
import { 
  User, 
  Cpu, 
  Download, 
  ArrowRight,
  Layers,
  Activity,
  Zap
} from 'lucide-react';
import { profileData } from '../data';

export const About = () => {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <User size={14} />
            <span>Researcher Overview</span>
          </div>
          <h2 className="section-title">Academic Background & Research Agenda</h2>
          <p className="section-subtitle">
            Bridging applied computer science, on-device machine learning, and physical sensory engineering.
          </p>
        </div>

        <div className="about-content-layout">
          {/* Narrative Column */}
          <div className="card about-card-main">
            <div className="about-bio-text">
              <p className="about-lead">
                I am an Artificial Intelligence and Embedded Systems researcher with a First-Class Honours degree in Computer Science from Yobe State University (GPA: 4.66/5.0) and currently concluding an MSc in Embedded Artificial Intelligence at the Centre for Embedded Artificial Intelligence and Smart Energy Systems (CEAISES), Abubakar Tafawa Balewa University (ATBU), Bauchi, Nigeria.
              </p>
              <p className="about-body">
                My research centers on the design, optimization, and deployment of lightweight artificial intelligence architectures on resource-constrained embedded and edge hardware. I focus on developing real-time intelligent sensing systems that bridge physical sensory signals (optical, fluidic, kinematic) with edge inference pipelines—addressing real-world challenges in industrial quality verification, energy systems, and clinical healthcare monitoring.
              </p>
            </div>

            {/* Core Research Themes */}
            <div className="about-themes-row">
              <div className="theme-item">
                <div className="theme-icon-box">
                  <Zap size={18} className="text-cyan" />
                </div>
                <div>
                  <h4 className="theme-title">On-Device Edge Inference</h4>
                  <p className="theme-desc">Low-latency decision making on microcomputers without cloud dependency.</p>
                </div>
              </div>

              <div className="theme-item">
                <div className="theme-icon-box">
                  <Layers size={18} className="text-emerald" />
                </div>
                <div>
                  <h4 className="theme-title">Physics-Guided Sensing</h4>
                  <p className="theme-desc">Synthesizing physical domain laws with machine learning models for liquid assays.</p>
                </div>
              </div>

              <div className="theme-item">
                <div className="theme-icon-box">
                  <Activity size={18} className="text-blue" />
                </div>
                <div>
                  <h4 className="theme-title">Real-Time Clinical Vision</h4>
                  <p className="theme-desc">Kinematic pose estimation (YOLOv8n-Pose) for continuous, privacy-preserving monitoring.</p>
                </div>
              </div>
            </div>

            <div className="about-actions-row">
              <a href="#research" className="btn btn-primary btn-sm">
                <Cpu size={16} />
                <span>Explore Research Agenda</span>
                <ArrowRight size={14} />
              </a>
              <a 
                href={profileData.assets.cvPdf} 
                download={profileData.assets.cvFileName}
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-outline btn-sm"
              >
                <Download size={15} />
                <span>Complete Curriculum Vitae (PDF)</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
