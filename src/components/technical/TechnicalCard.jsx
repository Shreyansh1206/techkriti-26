const TechnicalCard = ({ title, description, onClick }) => {
  return (
    <div className="tech-card" onClick={onClick}>
      <h3 style={{ textAlign: "center" }}>{title}</h3>
      <p className="tech-card-desc">{description}</p>
    </div>
  );
};

export default TechnicalCard;
