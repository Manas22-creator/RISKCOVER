// src/components/about/CoreValues.jsx
import React from 'react';
import './CoreValues.css';

const CoreValues = () => {
  return (
    <section className="core-values-section">
      <div className="container">
        <div className="section-header">
          <h2>Our Core Values</h2>
          <p>The principles that guide everything we do</p>
        </div>
        <div className="values-grid">
          <div className="value-card">
            <h3>Customer First</h3>
            <p>Every decision is made with our customers' best interests at heart. We provide personalized service and support around the clock.</p>
          </div>
          <div className="value-card">
            <h3>Trust & Integrity</h3>
            <p>We build trust through transparency and honesty. We are committed to fair pricing, clear policies, and keeping our promises.</p>
          </div>
          <div className="value-card">
            <h3>Innovation</h3>
            <p>We optimize our services with technology and services to stay ahead of industry trends, providing a seamless digital experience.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreValues;