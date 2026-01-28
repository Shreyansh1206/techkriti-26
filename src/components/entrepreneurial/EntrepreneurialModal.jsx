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
    <div className="entre-modal-overlay" onClick={onClose}>
      <div className="entre-modal glass-card" onClick={(e) => e.stopPropagation()}>
        <div className="entre-modal-header">
          <h2>{track}</h2>
        </div>

        <div className="entre-competitions">
          {competitions.map((comp, index) => (
            <div key={index} className="entre-competition">
              <div className="entre-comp-info">
                <h4>{comp.name}</h4>
                <p>{comp.desc}</p>
              </div>
              <button className="entre-register-btn">
                Register
              </button>
            </div>
          ))}
        </div>

        <button className="entre-close-btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default EntrepreneurialModal;
