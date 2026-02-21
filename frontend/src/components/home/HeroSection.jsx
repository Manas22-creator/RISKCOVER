// src/components/home/HeroSection.js
import React from 'react';
import { Link } from 'react-router-dom';
import './HeroSection.css';
import heroCarImage from '../../assets/images/hero-car.jpg';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="container hero-container">
        {/* Column 1: Content */}
        <div className="hero-content">
          <h1>Your Trusted
            <span className="highlight-text"> Insurance Partner </span>
            for Every Vehicle</h1>
          {/* <p>Comprehensive coverage for cars, bikes, trucks, and fleets. Get instant quotes and secure your vehicle today.</p> */}
          <p>
            We facilitate insurance from top providers like Reliance, Digit & Tata for cars, bikes, trucks, and commercial vehicles. Get the best quotes today.
          </p>
          <div className="hero-btns">
            <Link to="/get-quote" className="btn btn-primary btn-quote">Get Free Quote</Link>
            <Link to="/services" className="btn btn-secondary">Explore Plans</Link>
          </div>
          {/* <div className="hero-stats-bar">
            <div className="stat-item">
              <strong>500K+</strong>
              <span>Happy Customers</span>
            </div>
            <div className="stat-item">
              <strong>99.2%</strong>
              <span>Success Rate</span>
            </div>
            <div className="stat-item">
              <strong>24/7</strong>
              <span>Support</span>
            </div>
          </div> */}
        </div>

        {/* Column 2: Image Card */}
        <div className="hero-image-column">
          <div className="hero-image-card">
            <img src={heroCarImage} alt="Modern Car" className="hero-car-img" />
            <div className="card-badge price-badge">
              <span>Starts from</span>
              <strong>₹89/month</strong>
            </div>
            <div className="card-badge coverage-badge">
              ✓ Instant Coverage
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;