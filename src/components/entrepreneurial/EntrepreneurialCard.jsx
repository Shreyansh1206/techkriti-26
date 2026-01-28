const EntrepreneurialCard = ({ title, description, onClick }) => {
  return (
    <div className="entre-card" onClick={onClick}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default EntrepreneurialCard;
