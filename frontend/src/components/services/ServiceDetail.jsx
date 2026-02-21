// src/components/services/ServiceDetail.jsx
import React from 'react';
import './ServiceDetail.css';

const ServiceDetail = ({ service }) => {
  // Destructure with default values to prevent errors on initial render
  const { title = '', description = '', features = [], image = '' } = service;

  return (
    <div className="service-detail-container">
      <div className="service-detail-content">
        <h2>{title}</h2>
        <p>{description}</p>
        <ul className="features-list">
          {features.map((feature, index) => (
            <li key={index}>✓ {feature}</li>
          ))}
        </ul>
      </div>
      <div className="service-detail-image">
        <img src={image} alt={title} />
      </div>
    </div>
  );
};

export default ServiceDetail;