import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import PracticeAreas from './pages/PracticeAreas';
import Contact from './pages/Contact';

function Navbar() {
  const linkClasses = ({ isActive }) =>
    isActive
      ? "text-blue-700 border-b-2 border-blue-700 pb-1"
      : "hover:text-blue-700 transition";

  return (
    <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      <NavLink to="/" className="text-xl font-bold text-blue-900 font-serif">Roy & Sal</NavLink>
      <div className="flex gap-4 text-blue-900 font-medium">
        <NavLink to="/" className={linkClasses}>Home</NavLink>
        <NavLink to="/about" className={linkClasses}>About</NavLink>
        <NavLink to="/practice-areas" className={linkClasses}>Practice Areas</NavLink>
        <NavLink to="/contact" className={linkClasses}>Contact</NavLink>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-100 text-center text-sm text-gray-600 py-6 mt-12">
      &copy; {new Date().getFullYear()} Roy & Sal Associates. All rights reserved.
    </footer>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white text-gray-800">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/practice-areas" element={<PracticeAreas />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
