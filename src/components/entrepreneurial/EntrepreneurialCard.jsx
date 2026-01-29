import { Link } from 'react-router-dom';

const EntrepreneurialCard = ({ title, description, onClick, to }) => {
  const content = (
    <>
      <h3 style={{ textAlign: "center" }}>{title}</h3>
      <p>{description}</p>
    </>
  );

  if (to) {
    return (
      <Link to={to} className="entre-card">
        {content}
      </Link>
    );
  }

  return (
    <div className="entre-card" onClick={onClick}>
      {content}
    </div>
  );
};

export default EntrepreneurialCard;
