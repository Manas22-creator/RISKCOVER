// src/components/services/ServiceBenefits.jsx
import React from 'react';
import {
  FaBolt,
  FaHeadset,
  FaTags
} from 'react-icons/fa';
import './ServiceBenefits.css';

const benefitsData = [
  {
    title: 'Quick Claims',
    icon: <FaBolt />,
    description:
      'Average claim processing time of just 24 hours with our streamlined system.',
  },
  {
    title: '24/7 Support',
    icon: <FaHeadset />,
    description:
      'Round-the-clock customer support and emergency roadside assistance.',
  },
  {
    title: 'Best Rates',
    icon: <FaTags />,
    description:
      'Competitive pricing with discounts for safe drivers and multiple policies.',
  },
];

const ServiceBenefits = () => {
  return (
    <section className="service-benefits-section">
      <div className="container">
        <div className="section-header">
          <h2>Why Choose Our Insurance?</h2>
          <p>Additional benefits that make us stand out</p>
        </div>

        <div className="benefits-grid">
          {benefitsData.map((item, index) => (
            <div className="benefit-item" key={index}>
              <div className="benefit-icon">
                {item.icon}
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceBenefits;
