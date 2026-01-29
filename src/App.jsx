import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useState } from 'react';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Entrepreneurial from './pages/Entrepreneurial';
import Events from './pages/Technical';
import Register from './pages/Register';
import SignIn from './pages/SignIn';
import EventDetails from './pages/EventDetails';

/* ---------- Layout ---------- */
const Layout = ({ isLoggedIn, setIsLoggedIn }) => {
  const location = useLocation();

  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} />

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
        <Route path="/events/event-details/:id" element={<EventDetails />} />
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
