// src/components/home/ReadyCta.js
import React from 'react';
import { Link } from 'react-router-dom';
import './ReadyCta.css';

const ReadyCta = () => {
  return (
    <section className="ready-cta-section">
      <div className="container">
        <h2>Ready to Get Protected?</h2>
        <p>Get your free quote in minutes and start saving on vehicle insurance today.</p>
        <div className="cta-buttons">
          <Link to="/get-quote" className="btn btn-primary">Get Free Quote</Link>
          <Link to="/contact" className="btn btn-secondary">Contact Us</Link>
        </div>
      </div>
    </section>
  );
};

export default ReadyCta;