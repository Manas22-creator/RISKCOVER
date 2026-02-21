// src/components/about/AboutIntro.jsx
import React from 'react';
import './AboutIntro.css';
import teamImage from '../../assets/images/about-intro-team.jpg';

const AboutIntro = () => {
  return (
    <section className="about-intro-section">
      <div className="container about-intro-container">
        <div className="about-intro-content">
          <h2>Our Mission</h2>
          <p>We believe that quality vehicle insurance should be accessible, affordable, and simple to understand. Our mission is to protect our customers with comprehensive coverage they can depend on.</p>
          <p>We combine cutting-edge technology with human expertise to deliver personalized insurance solutions that adapt to your unique needs and lifestyle.</p>
          {/* The design shows two buttons here, you can link them as needed */}
          <div className="intro-buttons">
            <button className="btn btn-primary">Our Services</button>
            <button className="btn btn-secondary">Get a Quote</button>
          </div>
        </div>
        <div className="about-intro-image">
          <img src={teamImage} alt="VehicleGuard Team Collaboration" />
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;