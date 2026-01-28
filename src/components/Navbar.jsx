import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [showEvents, setShowEvents] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container nav-content">
                <div
                  className="logo"
                  onClick={() => navigate('/')}
                  style={{ cursor: 'pointer' }}
                >
                  TechKriti<span className="highlight">26</span>
                </div>

                <div className="nav-links">
                    <a href="#about">About</a>
                    <a href="#theme">Theme</a>
                    <a href="#legacy">Legacy</a>

                    {/* EVENTS DROPDOWN */}
                    <div
                      className="events-dropdown"
                      onMouseEnter={() => setShowEvents(true)}
                      onMouseLeave={() => setShowEvents(false)}
                    >
                      <span className="nav-link">Events</span>

                      {showEvents && (
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
                      )}
                    </div>

                    <a href="#gallery">Gallery</a>
                    <button
                      className="btn btn-primary sm"
                      onClick={() => navigate('/events')}
                    >
                      Register
                    </button>
                    <a href="#community" className="btn btn-primary sm">Register</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
