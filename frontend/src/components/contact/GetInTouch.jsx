// src/components/contact/GetInTouch.jsx
import React from 'react';
import { FiPhoneCall, FiMail, FiMessageCircle, FiMapPin } from 'react-icons/fi';
import './GetInTouch.css';

const GetInTouch = () => {
  return (
    <section className="get-in-touch-section">
      <div className="container">
        <div className="section-header">
          <h2>Get in Touch</h2>
          <p>Choose the way that works best for you, and we'll get back to you as soon as possible.</p>
        </div>

        <div className="touch-grid">
          <div className="touch-card">
            <div className="touch-icon">
              <FiPhoneCall />
            </div>
            <h3>Phone Support</h3>
            <p>24/7 Customer Support, Toll-free nationwide</p>
            <a href="tel:1-800-VEHICLE-G" className="contact-link">
              1-800-VEHICLE-G
            </a>
          </div>

          <div className="touch-card">
            <div className="touch-icon">
              <FiMail />
            </div>
            <h3>Email Support</h3>
            <p>Send us your questions, Response within 24 hours</p>
            <a href="mailto:support@vehicleguard.com" className="contact-link">
              support@vehicleguard.com
            </a>
          </div>

          <div className="touch-card">
            <div className="touch-icon">
              <FiMessageCircle />
            </div>
            <h3>Live Chat</h3>
            <p>Instant assistance, Available 24/7</p>
            <a href="#chat" className="contact-link">
              Start a Chat
            </a>
          </div>

          <div className="touch-card">
            <div className="touch-icon">
              <FiMapPin />
            </div>
            <h3>Visit Us</h3>
            <p>Our headquarters</p>
            <span className="contact-link">
              123 Insurance Blvd, Suite 100
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
