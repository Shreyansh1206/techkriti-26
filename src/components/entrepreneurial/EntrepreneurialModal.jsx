const EntrepreneurialModal = ({ track, competitions, onClose }) => {
  return (
    <div className="entre-modal-overlay">
      <div className="entre-modal">
        <h2>{track}</h2>

        {competitions.map((comp, index) => (
          <div key={index} className="entre-competition">
            <h4>{comp.name}</h4>
            <p>{comp.desc}</p>
            <button className="entre-register-btn">
              Register
            </button>
          </div>
        ))}

        <button className="entre-close-btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default EntrepreneurialModal;
