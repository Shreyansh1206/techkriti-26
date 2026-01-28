import { useNavigate } from 'react-router-dom';

const EntrepreneurialNavbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="entre-navbar">
      <div className="entre-nav-logo" onClick={() => navigate('/')}>
        TechKriti<span>26</span>
      </div>

      <div className="entre-nav-links">
        <span className="active">Entrepreneurial</span>

        <span onClick={() => navigate('/events/technical')}>
          Technical
        </span>

        <span onClick={() => navigate('/events/miscellaneous')}>
          Miscellaneous
        </span>
      </div>
    </nav>
  );
};

export default EntrepreneurialNavbar;
