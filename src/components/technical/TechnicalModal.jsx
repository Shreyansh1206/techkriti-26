import React, { useEffect } from 'react';
import './TechnicalModal.css';

const TechnicalModal = ({ category, competitions, onClose }) => {
  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="tm-overlay" onClick={onClose}>
      <div
        className="tm-modal glass-card"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="tm-header">
          <h2>{category}</h2>
        </div>

        <div className="tm-competitions">
          {competitions.map((comp, index) => (
            <div key={index} className="tm-track-item">
              <div className="tm-track-info">
                <h4>{comp}</h4>
              </div>
              <button className="tm-register-btn">
                Register
              </button>
            </div>
          ))}
        </div>

        <button className="tm-close-btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default TechnicalModal;
