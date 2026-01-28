import React, { useEffect } from 'react';
import './EntrepreneurialModal.css';

const EntrepreneurialModal = ({ track, competitions, onClose }) => {
  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="em-overlay" onClick={onClose}>
      <div className="em-modal glass-card" onClick={(e) => e.stopPropagation()}>
        <div className="em-header">
          <h2>{track}</h2>
        </div>

        <div className="em-competitions">
          {competitions.map((comp, index) => (
            <div key={index} className="em-track-item">
              <div className="em-track-info">
                <h4>{comp.name}</h4>
                <p>{comp.desc}</p>
              </div>
              <button className="em-register-btn">
                Register
              </button>
            </div>
          ))}
        </div>

        <button className="em-close-btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default EntrepreneurialModal;
