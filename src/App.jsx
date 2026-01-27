import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Entrepreneurial from './pages/Entrepreneurial'; // NEW

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/events/entrepreneurial"
            element={<Entrepreneurial />}
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
