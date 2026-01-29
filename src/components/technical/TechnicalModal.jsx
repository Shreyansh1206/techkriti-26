const TechnicalModal = ({ category, competitions, onClose }) => {
  return (
    <div className="tech-modal-overlay">
      <div className="tech-modal">
        <h2>{category}</h2>

        {competitions.map((comp, idx) => (
          <div key={idx} className="tech-competition">
            <h4>{comp}</h4>
            <button className="tech-register-btn">
              Register
            </button>
          </div>
        ))}

        <button className="tech-close-btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default TechnicalModal;
