// src/components/campaigns/SuccessNumbers.jsx
import React from 'react';
import './SuccessNumbers.css';

const SuccessNumbers = () => {
  return (
    <section className="success-numbers-section">
      <div className="container">

        {/* Section Header */}
        <div className="section-header">
          <h2>Our Success in Numbers</h2>
          <p>Real metrics that showcase our commitment to excellence</p>
        </div>

        {/* TOP STATS */}
        <div className="numbers-top-grid">
          <div className="number-item">
            <div className="number-icon">🚗</div>
            <strong>500K+</strong>
            <span>Insured Vehicles</span>
          </div>

          <div className="number-item">
            <div className="number-icon">✅</div>
            <strong>99.2%</strong>
            <span>Claim Success Rate</span>
          </div>

          <div className="number-item">
            <div className="number-icon">📞</div>
            <strong>24/7</strong>
            <span>Customer Support</span>
          </div>

          <div className="number-item">
            <div className="number-icon">🏆</div>
            <strong>15+</strong>
            <span>Years Experience</span>
          </div>
        </div>

        {/* BOTTOM CARDS */}
        <div className="numbers-bottom-grid">
          <div className="stats-card">
            <h3>$2.5M</h3>
            <p>Claims paid out last month</p>
            <span>Fast and fair claim settlements</span>
          </div>

          <div className="stats-card">
            <h3>4.8/5</h3>
            <p>Customer satisfaction rating</p>
            <span>Based on 10,000+ reviews</span>
          </div>

          <div className="stats-card">
            <h3>72hrs</h3>
            <p>Average claim processing time</p>
            <span>Industry-leading speed</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SuccessNumbers;
