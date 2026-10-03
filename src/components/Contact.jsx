import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Copy, 
  Check, 
  Send, 
  MessageSquare, 
  Sparkles,
  GraduationCap,
  Globe,
  ExternalLink
} from 'lucide-react';
import { profileData } from '../data';
import { GitHubIcon, LinkedInIcon, GoogleScholarIcon, OrcidIcon } from './SocialIcons';

export const Contact = () => {
  const [copiedText, setCopiedText] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleCopy = (text, label) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedText(label);
      setTimeout(() => setCopiedText(null), 2500);
    });
  };

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/mbglnjol", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message
        })
      });

      if (response.ok) {
        alert("Thank you. Your message has been sent successfully.");

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: ""
        });
      } else {
        alert("Sorry, your message could not be sent. Please try again.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("Sorry, there was a problem sending your message. Please try again.");
    }
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <Mail size={14} />
            <span>Academic & Professional Inquiry</span>
          </div>
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-subtitle">
            Open to prospective PhD opportunities, international research collaborations, academic networking, and technical consulting.
          </p>
        </div>

        <div className="contact-layout-grid">
          {/* Left Column: Direct Contact Info Cards */}
          <div className="contact-info-cards">
            {/* Primary Email */}
            <div className="card contact-method-card">
              <div className="method-icon-box bg-cyan-soft">
                <Mail size={22} className="text-cyan" />
              </div>
              <div className="method-details">
                <span className="method-label">Primary Email</span>
                <a 
                  href={`mailto:${profileData.contact.email}`} 
                  className="method-value contact-link"
                  aria-label={`Send email to ${profileData.contact.email}`}
                >
                  {profileData.contact.email}
                </a>
              </div>
              <button 
                onClick={() => handleCopy(profileData.contact.email, 'email')}
                className="copy-icon-btn"
                title="Copy email address"
                aria-label="Copy primary email address"
              >
                {copiedText === 'email' ? <Check size={18} color="#10B981" /> : <Copy size={18} />}
              </button>
            </div>

            {/* Academic Email */}
            <div className="card contact-method-card">
              <div className="method-icon-box bg-emerald-soft">
                <GraduationCap size={22} className="text-emerald" />
              </div>
              <div className="method-details">
                <span className="method-label">Institutional / Academic Email</span>
                <a 
                  href={`mailto:${profileData.contact.academicEmail}`} 
                  className="method-value contact-link"
                  aria-label={`Send academic email to ${profileData.contact.academicEmail}`}
                >
                  {profileData.contact.academicEmail}
                </a>
              </div>
              <button 
                onClick={() => handleCopy(profileData.contact.academicEmail, 'acad-email')}
                className="copy-icon-btn"
                title="Copy academic email address"
                aria-label="Copy academic email address"
              >
                {copiedText === 'acad-email' ? <Check size={18} color="#10B981" /> : <Copy size={18} />}
              </button>
            </div>

            {/* Telephone Numbers */}
            <div className="card contact-method-card">
              <div className="method-icon-box bg-blue-soft">
                <Phone size={22} className="text-blue" />
              </div>
              <div className="method-details">
                <span className="method-label">Direct Lines / Phone</span>
                <div className="phone-numbers-group">
                  {profileData.contact.phones.map((phone, idx) => (
                    <React.Fragment key={idx}>
                      {idx > 0 && <span className="phone-separator">â€¢</span>}
                      <a 
                        href={`tel:${phone.replace(/[\s-]/g, '')}`} 
                        className="method-value contact-link phone-link"
                        aria-label={`Call telephone line ${phone}`}
                      >
                        {phone}
                      </a>
                    </React.Fragment>
                  ))}
                </div>
              </div>
              <button 
                onClick={() => handleCopy(profileData.contact.phones.join(', '), 'phone')}
                className="copy-icon-btn"
                title="Copy telephone numbers"
                aria-label="Copy telephone numbers"
              >
                {copiedText === 'phone' ? <Check size={18} color="#10B981" /> : <Copy size={18} />}
              </button>
            </div>

            {/* Institutional Location */}
            <div className="card contact-method-card">
              <div className="method-icon-box bg-amber-soft">
                <MapPin size={22} className="text-amber" />
              </div>
              <div className="method-details">
                <span className="method-label">Academic Location</span>
                <span className="method-value">
                  {profileData.contact.location}
                </span>
              </div>
            </div>

            {/* Author Profiles & Academic Networks */}
            <div className="card contact-method-card contact-networks-card">
              <div className="method-icon-box bg-purple-soft">
                <Globe size={22} className="text-purple" />
              </div>
              <div className="method-details">
                <span className="method-label">Author Profiles & Research Networks</span>
                <div className="contact-social-pills">
                  {profileData.socialLinks.linkedin && (
                    <a
                      href={profileData.socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-pill-link"
                      aria-label="Visit LinkedIn profile of Abdullahi Yusuf Umar"
                    >
                      <LinkedInIcon size={14} />
                      <span>LinkedIn</span>
                      <ExternalLink size={11} />
                    </a>
                  )}
                  {profileData.socialLinks.github && (
                    <a
                      href={profileData.socialLinks.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-pill-link"
                      aria-label="Visit GitHub repository profile (@Chana165)"
                    >
                      <GitHubIcon size={14} />
                      <span>GitHub</span>
                      <ExternalLink size={11} />
                    </a>
                  )}
                  {profileData.socialLinks.googleScholar ? (
                    <a
                      href={profileData.socialLinks.googleScholar}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-pill-link"
                      aria-label="Google Scholar Citation Profile"
                    >
                      <GoogleScholarIcon size={14} />
                      <span>Scholar</span>
                      <ExternalLink size={11} />
                    </a>
                  ) : (
                    <a
                      href="#profiles"
                      className="contact-pill-link"
                      aria-label="View Google Scholar profile details in Academic Profiles section"
                    >
                      <GoogleScholarIcon size={14} />
                      <span>Scholar</span>
                    </a>
                  )}
                  {profileData.socialLinks.orcid ? (
                    <a
                      href={profileData.socialLinks.orcid}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-pill-link"
                      aria-label="ORCID Researcher Record"
                    >
                      <OrcidIcon size={14} />
                      <span>ORCID</span>
                      <ExternalLink size={11} />
                    </a>
                  ) : (
                    <a
                      href="#profiles"
                      className="contact-pill-link"
                      aria-label="View ORCID record details in Academic Profiles section"
                    >
                      <OrcidIcon size={14} />
                      <span>ORCID</span>
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Availability Banner */}
            <div className="card contact-availability-card">
              <div className="avail-badge">
                <Sparkles size={16} />
                <span>Current Availability</span>
              </div>
              <p className="avail-text">
                {profileData.contact.availability}
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Message Dispatch Form */}
          <div className="card contact-form-card">
            <h3 className="form-heading">
              <MessageSquare size={20} className="accent-icon text-cyan" />
              <span>Send an Academic or Technical Message</span>
            </h3>
            <p className="form-subheading">
              Fill out the form below to initiate direct communication via email.
            </p>

            <form onSubmit={handleFormSubmit} className="academic-contact-form">
              <div className="form-group-row">
                <div className="form-field">
                  <label htmlFor="name" className="field-label">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleFormChange}
                    className="form-input"
                    placeholder="Prof. / Dr. / Researcher Name"
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="email" className="field-label">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleFormChange}
                    className="form-input"
                    placeholder="name@institution.edu"
                  />
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="subject" className="field-label">Subject / Topic</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleFormChange}
                  className="form-input"
                  placeholder="PhD Opportunity / Research Collaboration / Inquiry"
                />
              </div>

              <div className="form-field">
                <label htmlFor="message" className="field-label">Message Content</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  value={formData.message}
                  onChange={handleFormChange}
                  className="form-textarea"
                  placeholder="Please state the nature of your research proposal, opportunity, or collaboration..."
                />
              </div>

              <button type="submit" className="btn btn-primary btn-full submit-btn">
                <Send size={16} />
                <span>Dispatch Email Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

