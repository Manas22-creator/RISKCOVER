// src/components/contact/ContactInfo.js
import React from 'react';
import './ContactInfo.css';

const ContactInfo = () => {
  return (
    <div className="contact-info-card">
      <h3>Contact Information</h3>
      <p><strong>Address:</strong> 123 Insurance Ave, Suite 100, Metropolis, USA 12345</p>
      <p><strong>Phone:</strong> (123) 456-7890</p>
      <p><strong>Email:</strong> support@securedrive.com</p>
      <p><strong>Hours:</strong> Mon-Fri, 9am - 6pm EST</p>
      <div className="map-placeholder">
        [Map Placeholder]
      </div>
    </div>
  );
};

export default ContactInfo;