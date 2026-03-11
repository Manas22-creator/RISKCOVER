// src/components/contact/ContactInfo.jsx
import React from 'react';
import { FiPhoneCall, FiMail, FiMessageCircle, FiMapPin } from 'react-icons/fi';
import './ContactInfo.css';

const ContactInfo = () => {
  return (
    <div className="contact-info-wrapper">
      <div className="contact-info-item">
        <div className="icon-box"><FiPhoneCall /></div>
        <div className="info-text">
          <strong>Phone Support</strong>
          <span>24/7 Customer Support, Toll-free nationwide</span>
          <a href="tel:+917503789405">+91 7503789405</a>
        </div>
      </div>

      <div className="contact-info-item">
        <div className="icon-box"> <FiMail /></div>
        <div className="info-text">
          <strong>Email Support</strong>
          <span>Send us your questions, Response within 24 hours</span>
          <a href="mailto:support@riskcoverinsurance.com">support@riskcoverinsurance.com</a>
        </div>
      </div>
      
      <div className="contact-info-item">
        <div className="icon-box"><FiMessageCircle /></div>
        <div className="info-text">
          <strong>Visit Us</strong>
          <span>RiskCover Insurance Pvt Ltd</span>
          <span>C10, Rajan Vihar, Maharani Enclave, Hastsal, New Delhi, Delhi, 110059</span>
        </div>
      </div>
      
      <div className="map-container">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.0123456789!2d77.0495878!3d28.6334819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d05000c0a6937%3A0xb934542172402dcd!2sJ.T%20Lancer&#39;s%20Public%20School!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Location"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactInfo;