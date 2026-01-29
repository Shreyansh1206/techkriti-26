import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ isLoggedIn }) => {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-content">
        {/* LOGO */}
        <div
          className="logo"
          onClick={() => navigate('/')}
          style={{ cursor: 'pointer' }}
        >
          TechKriti<span className="highlight">26</span>
        </div>

        {/* NAV LINKS */}
        <div className="nav-links">
          <div onClick={() => navigate('/events/technical')} className="nav-link">
            Technical
          </div>
          <div onClick={() => navigate('/events/entrepreneurial')} className="nav-link">
            Entrepreneurial
          </div>
          <div onClick={() => navigate('/events/miscellaneous')} className="nav-link">
            Miscellaneous
          </div>

          {/* AUTH BUTTON */}
          {isLoggedIn ? (
            <button
              className="btn btn-primary sm"
              onClick={() => navigate('/register')}
            >
              Register
            </button>
          ) : (
            <button
              className="btn btn-primary sm"
              onClick={() => navigate('/signin')}
            >
              Sign In
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
