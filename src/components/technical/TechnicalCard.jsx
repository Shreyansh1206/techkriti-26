import { Link } from 'react-router-dom';

const TechnicalCard = ({ title, description, onClick, to }) => {
  const content = (
    <>
      <h3 style={{ textAlign: "center" }}>{title}</h3>
      {description && <p className="tech-card-desc">{description}</p>}
    </>
  );

  if (to) {
    return (
      <Link to={to} className="tech-card">
        {content}
      </Link>
    );
  }

  return (
    <div className="tech-card" onClick={onClick}>
      {content}
    </div>
  );
};

export default TechnicalCard;
