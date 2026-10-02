import React, { useEffect } from 'react';
import { X, ExternalLink, Download } from 'lucide-react';

export const ImageModal = ({ image, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!image) return null;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button 
          onClick={onClose} 
          className="modal-close-btn" 
          aria-label="Close modal preview"
        >
          <X size={20} />
        </button>

        <div className="modal-image-container">
          <img 
            src={image.src} 
            alt={image.title || image.caption || "Preview image"} 
            className="modal-preview-img" 
          />
        </div>

        {(image.title || image.caption) && (
          <div className="modal-caption-bar">
            {image.title && <h4 className="modal-caption-title">{image.title}</h4>}
            {image.caption && <p className="modal-caption-text">{image.caption}</p>}
            
            {image.src && (
              <div className="modal-actions-row">
                <a 
                  href={image.src} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-secondary btn-sm"
                >
                  <ExternalLink size={14} />
                  <span>Open Full Resolution</span>
                </a>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageModal;
