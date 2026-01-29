import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useState } from 'react';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Entrepreneurial from './pages/Entrepreneurial';
import Events from './pages/Technical';
import Register from './pages/Register';
import SignIn from './pages/SignIn';

/* ---------- Layout ---------- */
const Layout = ({ isLoggedIn, setIsLoggedIn }) => {
  const location = useLocation();

  // Show global navbar ONLY on home page
  const showNavbar = location.pathname === '/';

  return (
    <>
      {showNavbar && <Navbar isLoggedIn={isLoggedIn} />}

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/signin"
          element={<SignIn setIsLoggedIn={setIsLoggedIn} />}
        />

        <Route path="/register" element={<Register />} />

        <Route path="/events/technical" element={<Events />} />
        <Route
          path="/events/entrepreneurial"
          element={<Entrepreneurial />}
        />
        {/* Miscellaneous page later */}
        {/* <Route path="/events/miscellaneous" element={<Miscellaneous />} /> */}
      </Routes>

      <Footer />
    </>
  );
};

/* ---------- App Root ---------- */
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <div className="app-container">
        <Layout
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
        />
      </div>
    </Router>
  );
}

export default App;
