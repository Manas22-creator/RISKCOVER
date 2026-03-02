// src/components/contact/WhatsAppCta.jsx
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './WhatsAppCta.css';

// Replace with your registered WhatsApp phone number
// Format: country code + phone number (e.g., 923001234567 for Pakistan, 11234567890 for USA)
const WHATSAPP_NUMBER = '+91 7503789405';

const WhatsAppCta = () => {
  return (
    <section className="whatsapp-cta-section">
      <div className="container whatsapp-cta-container">
        
        <div className="whatsapp-left">
          <div className="whatsapp-icon">
            <FaWhatsapp />
          </div>

          <div className="whatsapp-content">
            <h3>Chat on WhatsApp</h3>
            <p>Get instant support and quick quotes via WhatsApp</p>

            <ul className="whatsapp-features">
              <li>Instant Response</li>
              <li>Available 24/7</li>
              <li>Quick Quotes</li>
              <li>Claim Assistance</li>
            </ul>
          </div>
        </div>

        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hello,%20I%20would%20like%20to%20get%20a%20quote%20and%20support`}
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-btn"
        >
          Start Chat Now
        </a>
      </div>
    </section>
  );
};

export default WhatsAppCta;
