import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone } from 'lucide-react';
import '../assets/Footer.css'

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__grid">
          {/* Brand Section */}
          <div className="footer__brand">
            <h2 className="footer__logo">HeadLine</h2>
            <p className="footer__description">
              Your trusted source for the latest news and updates.
            </p>
            <div className="footer__social">
              <a href="#" className="footer__social-link">
                <Facebook />
              </a>
              <a href="#" className="footer__social-link">
                <Twitter />
              </a>
              <a href="#" className="footer__social-link">
                <Instagram />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer__section">
            <h3 className="footer__title">Quick Links</h3>
            <ul className="footer__links">
              <li>
                <Link to="/" className="footer__link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="footer__link">
                  About
                </Link>
              </li>
              <li>
                <Link to="/trending" className="footer__link">
                  Trending
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="footer__section">
            <h3 className="footer__title">Categories</h3>
            <ul className="footer__links">
              <li>
                <a href="#" className="footer__link">
                  Technology
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  Business
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  Sports
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer__section">
            <h3 className="footer__title">Contact</h3>
            <ul className="footer__links">
              <li className="footer__contact-item">
                <Mail />
                <span>info@headline.com</span>
              </li>
              <li className="footer__contact-item">
                <Phone />
                <span>(555) 123-4567</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© {new Date().getFullYear()} HeadLine. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};