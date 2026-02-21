// src/components/testimonials/TrustMetrics.jsx
import React from 'react';
import {
  FaUsers,
  FaAward,
  FaHeadset,
  FaShieldAlt
} from 'react-icons/fa';
import './TrustMetrics.css';

const TrustMetrics = () => {
  return (
    <section className="trust-metrics-section">
      <div className="container">

        {/* Section Header */}
        <div className="section-header">
          <h2>Trusted by Thousands</h2>
          <p>Join our growing community of satisfied customers</p>
        </div>

        {/* Metrics Grid */}
        <div className="metrics-grid">

          <div className="metric-item">
            <div className="metric-icon">
              <FaUsers />
            </div>
            <strong>500K+</strong>
            <span>Happy Customers</span>
          </div>

          <div className="metric-item">
            <div className="metric-icon">
              <FaAward />
            </div>
            <strong>15+</strong>
            <span>Years Experience</span>
          </div>

          <div className="metric-item">
            <div className="metric-icon">
              <FaHeadset />
            </div>
            <strong>24/7</strong>
            <span>Customer Support</span>
          </div>

          <div className="metric-item">
            <div className="metric-icon">
              <FaShieldAlt />
            </div>
            <strong>99.2%</strong>
            <span>Claim Success</span>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TrustMetrics;
