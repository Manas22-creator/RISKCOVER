// src/components/layout/Footer.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Footer.css';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import logo from '../../assets/images/Car-logo footer.png'; // Assuming your logo is named logo.svg

const Footer = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(''); // <-- 2. Add state for status messages

  // 3. Update the submit handler to be async and make an API call
  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    setStatus('Subscribing...'); // Provide immediate feedback

    try {
      const res = await axios.post('/api/newsletter/subscribe', { email });
      setStatus(res.data.msg); // Use success message from backend
      setEmail(''); // Clear the input field on success
    } catch (error) {
      if (error.response && error.response.data) {
        // Use error message from backend (e.g., "already subscribed" or validation error)
        const errorMsg = error.response.data.errors ? error.response.data.errors[0].msg : error.response.data.msg;
        setStatus(errorMsg);
      } else {
        setStatus('Subscription failed. Please try again.');
      }
    }
  };

  return (
    <footer className="main-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-column footer-about">
            <img src={logo} alt="VehicleGuard" className="footer-logo" />
            <p>Your trusted partner for comprehensive vehicle insurance since 2010. Protecting your journey.</p>
             <div className="footer-socials">
    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
      <FaFacebookF />
    </a>
    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
      <FaInstagram />
    </a>
    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
      <FaTwitter />
    </a>
    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
      <FaLinkedinIn />
    </a>
  </div>
            
          </div>
          <div className="footer-column">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/campaigns">Campaigns</Link></li>
              <li><Link to="/get-quote">Get Quote</Link></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Insurance Types</h4>
            <ul>
              <li><Link to="/services/car">Car Insurance</Link></li>
              <li><Link to="/services/bike">Bike Insurance</Link></li>
              <li><Link to="/services/truck">Truck Insurance</Link></li>
              <li><Link to="/services/fleet">Fleet Insurance</Link></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Stay Updated</h4>
            <p>Subscribe to our newsletter for insurance tips and updates.</p>
            <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
              <input 
                type="email" 
                placeholder="Your email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required 
              />
              <button type="submit">Subscribe</button>
            </form>
            {status && <p style={{ marginTop: '0.5rem', fontSize: '0.9rem' }}>{status}</p>}
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} VehicleGuard. All rights reserved.</p>
          <div className="footer-legal-links">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;