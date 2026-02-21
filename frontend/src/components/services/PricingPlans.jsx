// src/components/services/PricingPlans.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './PricingPlans.css';

const PricingPlans = () => {
  return (
    <section className="pricing-plans-section">
      <div className="container">
        <div className="section-header">
          <h2>Choose Your Plan</h2>
          <p>Flexible pricing options to fit every budget and need</p>
        </div>
        <div className="pricing-grid">
          <div className="pricing-card">
            <h3>Basic Plan</h3>
            <p className="price"><sup>₹</sup>89<span>/month</span></p>
            <p className="plan-description">State Minimum</p>
            <Link to="/get-quote" className="btn btn-secondary">Get Quote</Link>
          </div>
          <div className="pricing-card popular">
            <div className="popular-badge">Most Popular</div>
            <h3>Standard Plan</h3>
            <p className="price"><sup>₹</sup>99<span>/month</span></p>
            <p className="plan-description">Full Coverage</p>
            <Link to="/get-quote" className="btn btn-primary">Get Quote</Link>
          </div>
          <div className="pricing-card">
            <h3>Premium Plan</h3>
            <p className="price"><sup>₹</sup>129<span>/month</span></p>
            <p className="plan-description">Maximum Protection</p>
            <Link to="/get-quote" className="btn btn-secondary">Get Quote</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;