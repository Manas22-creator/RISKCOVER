// src/components/contact/ContactInfo.js
import React from 'react';
import './ContactInfo.css';

const ContactInfo = () => {
  return (
    <div className="contact-info-card">
      <h3>Contact Information</h3>
      <p><strong>Address:</strong> RiskCover Insurance  Pvt Ltd
Unit 623, Westend Mall, District Centre, Janakpuri, New Delhi, Delhi – 110058</p>
      <p><strong>Phone:</strong> (+91) 7503789405</p>
      <p><strong>Email:</strong> support@riskcoverinsurance.com</p>
      <p><strong>Hours:</strong> Mon-Fri, 9am - 6pm EST</p>
      <div className="map-placeholder">
        [Map Placeholder]
      </div>
    </div>
  );
};

export default ContactInfo;