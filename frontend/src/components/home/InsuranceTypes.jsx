// src/components/home/InsuranceTypes.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaCar,
  FaMotorcycle,
  FaTruck,
  FaHeartPulse,
  FaShieldHalved,
  FaBriefcase
} from 'react-icons/fa6';
import './InsuranceTypes.css';

const insuranceData = [
  {
    title: 'Car Insurance',
    icon: <FaCar />,
    description: 'Comprehensive coverage for your personal vehicle with competitive rates.',
  },
  {
    title: 'Bike Insurance',
    icon: <FaMotorcycle />,
    description: 'Protect your two-wheeler against theft, accidents, and third-party liabilities.',
  },
  {
    title: 'Commercial Vehicle',
    icon: <FaTruck />,
    description: 'Specialized insurance for taxis, trucks, and business fleets.',
  },
  {
    title: 'Health Insurance',
    icon: <FaHeartPulse />,
    description: 'Cashless suvidha and comprehensive medical coverage for you and your family.',
  },
  {
    title: 'Life Insurance',
    icon: <FaShieldHalved />,
    description: 'LIC & Private life insurance plans to secure your family\'s future.',
  },
  {
    title: 'Shop & Fire Insurance',
    icon: <FaBriefcase />,
    description: 'Protect your business assets against fire, theft, and natural disasters.',
  },
];

const InsuranceTypes = () => {
  return (
    <section className="insurance-types-section">
      <div className="container">
        <div className="section-header">
          <h2>Insurance for Every Need</h2>
          <p>
            Whether you drive a car, ride a bike, operate commercial vehicles, or need personal
            health and life coverage, we have the perfect solution for you.
          </p>
        </div>

        <div className="insurance-grid">
          {insuranceData.map((item, index) => (
            <div className="insurance-card" key={index}>
              <div className="insurance-icon">
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <p className="card-description">{item.description}</p>

              <Link to="/services" className="learn-more-link">
                Learn More →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsuranceTypes;
