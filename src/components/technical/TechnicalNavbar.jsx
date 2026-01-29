import { useNavigate } from 'react-router-dom';

const TechnicalNavbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="tech-navbar">
      <div className="tech-nav-logo" onClick={() => navigate('/')}>
        TechKriti<span>26</span>
      </div>

      <div className="tech-nav-links">
        <span onClick={() => navigate('/events/entrepreneurial')}>
          Entrepreneurial
        </span>

        <span className="active">Technical</span>

        <span onClick={() => navigate('/events/miscellaneous')}>
          Miscellaneous
        </span>
      </div>
    </nav>
  );
};

export default TechnicalNavbar;
