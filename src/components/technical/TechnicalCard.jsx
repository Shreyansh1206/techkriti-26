const TechnicalCard = ({ title, onClick }) => {
  return (
    <div className="tech-card" onClick={onClick}>
      <h3 style={{ textAlign: "center" }}>{title}</h3>
    </div>
  );
};

export default TechnicalCard;
