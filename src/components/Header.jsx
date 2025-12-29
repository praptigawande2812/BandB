import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/testimonials', label: 'Testimonials' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <nav className="navbar">
        <div className="container">
          <div className="navbar-content">
            <Link to="/" className="logo" onClick={closeMenu}>
              {/* <div className="logo-icon">🏥</div> */}
              {/* <div className="logo-text">
                <span className="logo-name">Babies And Beyond</span>
                <span className="logo-subtitle">Pediatric Clinic</span>
              </div> */}
            </Link>

            <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
              <ul className="nav-list">
                {navLinks.map((link) => (
                  <li key={link.path} className="nav-item">
                    <Link
                      to={link.path}
                      className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                      onClick={closeMenu}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="navbar-actions">
              <Link to="/contact" className="btn btn-primary">
                Book Appointment
              </Link>
              <button
                className="menu-toggle"
                onClick={toggleMenu}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
