// src/components/testimonials/TestimonialsCta.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './TestimonialsCta.css';

const TestimonialsCta = () => {
  return (
    <section className="testimonials-cta-section">
      <div className="container">
        <h2>Ready to Join Our Happy Customers?</h2>
        <p>Experience the VehicleGuard difference for yourself. Get your free quote today.</p>
        <div className="cta-buttons">
          <Link to="/get-quote" className="btn btn-primary-white">Get Free Quote</Link>
          <Link to="/contact" className="btn btn-secondary-outline">Contact Us</Link>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCta;