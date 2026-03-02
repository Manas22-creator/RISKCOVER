// src/components/contact/OfficeLocations.jsx
import React from 'react';
import './OfficeLocations.css';

const OfficeLocations = () => {
  return (
    <section className="office-locations-section">
      <div className="container">
        <div className="section-header">
          <h2>Coming Soon</h2>
          <p>Our office locations will be available soon. Stay tuned!</p>
        </div>

        {/* COMMENTED OUT - Office Locations Content */}
        {/* 
        <div className="locations-grid">
          <div className="location-card">
            <h3>New Delhi</h3>
            <p>C10, Rajan Vihar, Maharani Enclave, Hastsal, New Delhi, Delhi, 110059</p>
            <p>(+91) 7503789405</p>
            <p>Mon-Fri: 9AM-5PM IST</p>
          </div>
          <div className="location-card">
            <h3>Mumbai</h3>

            <p>A-201, 2nd Floor, Leela Business Park, Nr. Airport Road Metro Station, Andheri Kurla Road, Andheri (East), Mumbai – 400059</p>
            <p>(+91) 7503789405</p>
            <p>Mon-Fri: 9AM-5PM PST</p>
          </div>
        </div>

        {/* Map Section */}
        {/*
        <div className="map-section">
            <h3>Find Us</h3>
            <p>Map integration for our headquarters location presented here.</p>
            <div className="map-placeholder">
                <iframe 
                    src="https://www.google.com/maps/place/J.T+Lancer's+Public+School/@28.6334819,77.0495878,17z/data=!3m1!4b1!4m6!3m5!1s0x390d05000c0a6937:0xb934542172402dcd!8m2!3d28.6334819!4d77.0495878!16s%2Fg%2F11w1zd2zkd!17m2!4m1!1e3!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDIyNS4wIKXMDSoASAFQAw%3D%3D" 
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
        */}
      </div>
    </section>
  );
};

export default OfficeLocations;