const TechnicalCard = ({ title, onClick }) => {
  return (
    <div className="tech-card" onClick={onClick}>
      <h3>{title}</h3>
    </div>
  );
};

export default TechnicalCard;
