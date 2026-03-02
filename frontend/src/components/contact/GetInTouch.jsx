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
            <a href="tel:+917503789405" className="contact-link">
              +91 7503789405
            </a>
          </div>

          <div className="touch-card">
            <div className="touch-icon">
              <FiMail />
            </div>
            <h3>Email Support</h3>
            <p>Send us your questions, Response within 24 hours</p>
            <a href="mailto:support@riskcoverinsurance.com" className="contact-link">
              support@riskcoverinsurance.com
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
            <p>Our Office</p>
            <span className="contact-link">
              RiskCover Insurance Pvt Ltd
              C10, Rajan Vihar, Maharani Enclave, Hastsal, New Delhi, Delhi, 110059
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
