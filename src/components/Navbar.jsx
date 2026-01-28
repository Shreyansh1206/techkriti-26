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
          <div onClick={() => document.getElementById('about')?.scrollIntoView()}>
            About
          </div>
          <div onClick={() => document.getElementById('theme')?.scrollIntoView()}>
            Theme
          </div>
          <div onClick={() => document.getElementById('legacy')?.scrollIntoView()}>
            Legacy
          </div>

          {/* EVENTS DROPDOWN */}
          <div className="events-dropdown">
            <div className="nav-link">Events</div>

            <div className="dropdown-menu">
              <div onClick={() => navigate('/events/technical')}>
                Technical
              </div>
              <div onClick={() => navigate('/events/entrepreneurial')}>
                Entrepreneurial
              </div>
              <div onClick={() => navigate('/events/miscellaneous')}>
                Miscellaneous
              </div>
            </div>
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
