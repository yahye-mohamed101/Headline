import { Link } from 'react-router-dom';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import '../assets/Header.css'

export const Header = () => {
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
      <div className="header__container">
        <div className="header__content">
          {/* Logo */}
          <Link to="/" className="header__logo">
            <span className="header__logo-text">
              HeadLine
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="header__nav">
            <div className="header__nav-links">
              <Link to="/" className="header__nav-link">
                Home
              </Link>
              <Link to="/trending" className="header__nav-link">
                Trending
              </Link>
              <Link to="/about" className="header__nav-link">
                About
              </Link>
              
              <button
                onClick={() => setIsDark(!isDark)}
                className="header__theme-toggle"
                aria-label="Toggle dark mode"
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="header__mobile-menu">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="header__menu-button"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="header__mobile-nav">
          <Link
            to="/"
            className="header__mobile-link"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/trending"
            className="header__mobile-link"
            onClick={() => setIsMenuOpen(false)}
          >
            Trending
          </Link>
          <Link
            to="/about"
            className="header__mobile-link"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
        </div>
      )}
    </header>
  );
};