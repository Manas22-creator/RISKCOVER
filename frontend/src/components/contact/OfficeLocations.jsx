// src/components/contact/OfficeLocations.jsx
import React from 'react';
import './OfficeLocations.css';

const OfficeLocations = () => {
  return (
    <section className="office-locations-section">
      <div className="container">
        <div className="section-header">
          <h2>Our Offices</h2>
          <p>Visit us at one of our convenient locations.</p>
        </div>
        <div className="locations-grid">
          <div className="location-card">
            <h3>New York</h3>
            <p>123 Insurance Blvd, Suite 100</p>
            <p>(212) 555-0100</p>
            <p>Mon-Fri: 9AM-5PM EST</p>
          </div>
          <div className="location-card">
            <h3>Los Angeles</h3>
            <p>456 Pacific Coast Hwy, Floor 15</p>
            <p>(310) 555-0200</p>
            <p>Mon-Fri: 9AM-5PM PST</p>
          </div>
          <div className="location-card">
            <h3>Chicago</h3>
            <p>789 Lake Shore Dr, Suite 500</p>
            <p>(312) 555-0300</p>
            <p>Mon-Fri: 9AM-5PM CST</p>
          </div>
        </div>

        {/* Map Section */}
        <div className="map-section">
            <h3>Find Us</h3>
            <p>Map integration for our headquarters location presented here.</p>
            <div className="map-placeholder">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.219992030013!2d-73.98785368459395!3d40.75797497932692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6434221%3A0x23e3717a63b01fa2!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1672533098529!5m2!1sen!2sus" 
                    width="100%" 
                    height="450" 
                    style={{ border: 0 }} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Headquarters Location"
                ></iframe>
            </div>
        </div>
      </div>
    </section>
  );
};

export default OfficeLocations;