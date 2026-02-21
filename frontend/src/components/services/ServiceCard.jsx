// src/components/services/ServiceCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceCard.css';

const ServiceCard = ({ icon, title, description, features }) => {
  return (
    <div className="service-card-main">
      {/* Icon Wrapper matching the small blue circle in the design */}
      <div className="card-icon-wrapper">
        {/* Placeholder for Font Awesome Icon or similar */}
        <i className={`fa-solid ${icon}`}></i>
      </div>
      
      <h3>{title}</h3>
      
      {/* Description text placed below the title */}
      <p className="card-description">{description}</p>
      
      {/* Feature list matching the green checkmarks in the design */}
      <ul className="features-list">
        {features.map((feature, index) => (
          <li key={index}>
            <span className="checkmark">✓</span> {feature}
          </li>
        ))}
      </ul>
      
      {/* The full-width blue button */}
      <Link to="/get-quote" className="btn get-quote-btn">Get Quote</Link>
    </div>
  );
};

export default ServiceCard;