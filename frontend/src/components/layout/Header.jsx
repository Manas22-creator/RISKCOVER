// src/components/layout/Header.jsx
import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Header.css';
import logo from '../../assets/images/Car-logo header.png';

const Header = () => {
  // State to manage the mobile menu's open/close status
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to close the menu (useful for when a link is clicked)
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="main-header">
      <div className="container header-container">
        <div className="logo">
          <Link to="/" onClick={closeMenu}>
            <img src={logo} alt="VehicleGuard Logo" />
          </Link>
        </div>

        {/* --- DESKTOP NAVIGATION --- */}
        <nav className="main-nav desktop-nav">
          <ul>
            <li><NavLink to="/" onClick={closeMenu}>Home</NavLink></li>
            <li><NavLink to="/about" onClick={closeMenu}>About</NavLink></li>
            <li><NavLink to="/services" onClick={closeMenu}>Services</NavLink></li>
            <li><NavLink to="/campaigns" onClick={closeMenu}>Campaigns</NavLink></li>
            <li><NavLink to="/testimonials" onClick={closeMenu}>Testimonials</NavLink></li>
            <li><NavLink to="/faq" onClick={closeMenu}>FAQ</NavLink></li>
            <li><NavLink to="/contact" onClick={closeMenu}>Contact</NavLink></li>
          </ul>
        </nav>

        {/* --- CTA BUTTON (Desktop) --- */}
        <div className="header-cta desktop-cta">
          <Link to="/get-quote" className="btn btn-primary">Get Quote</Link>
        </div>

        {/* --- HAMBURGER MENU ICON (Mobile) --- */}
        <div className="hamburger-icon" onClick={toggleMenu}>
          <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
          <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
          <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
        </div>

        {/* --- MOBILE NAVIGATION PANEL --- */}
        <div className={`mobile-nav-panel ${isMenuOpen ? 'open' : ''}`}>
          <nav className="main-nav mobile-nav">
            <ul>
                <li><NavLink to="/" onClick={closeMenu}>Home</NavLink></li>
                <li><NavLink to="/about" onClick={closeMenu}>About</NavLink></li>
                <li><NavLink to="/services" onClick={closeMenu}>Services</NavLink></li>
                <li><NavLink to="/campaigns" onClick={closeMenu}>Campaigns</NavLink></li>
                <li><NavLink to="/testimonials" onClick={closeMenu}>Testimonials</NavLink></li>
                <li><NavLink to="/faq" onClick={closeMenu}>FAQ</NavLink></li>
                <li><NavLink to="/contact" onClick={closeMenu}>Contact</NavLink></li>
            </ul>
          </nav>
          <div className="header-cta mobile-cta">
            <Link to="/get-quote" className="btn btn-primary" onClick={closeMenu}>Get Quote</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;