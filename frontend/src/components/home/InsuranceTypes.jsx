// src/components/home/InsuranceTypes.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { MdLocalShipping } from "react-icons/md";

import {
  FaCar,
  FaMotorcycle,
  FaTruck,
  FaUsers
} from 'react-icons/fa';
import './InsuranceTypes.css';

const insuranceData = [
  {
    title: 'Car Insurance',
    icon: <FaCar />,
    features: [
      'Collision Coverage',
      'Liability Protection',
      'Uninsured Motorist',
      '24/7 Roadside Assistance',
    ],
  },
  {
    title: 'Bike Insurance',
    icon: <FaMotorcycle />,
    features: [
      'Theft & Damage',
      'Third-Party Liability',
      'Personal Accident Cover',
      'Custom Parts Coverage',
    ],
  },
  {
    title: 'Truck Insurance',
    icon: <FaTruck />,
    features: [
      'Cargo Insurance',
      'Primary Liability',
      'Physical Damage',
      'Downtime Protection',
    ],
  },
  {
    title: 'Fleet Insurance',
    icon: <FaUsers />,
    features: [
      'Flexible Coverage',
      'Simplified Billing',
      'Fleet Safety Programs',
      'Dedicated Account Manager',
    ],
  },
];

const InsuranceTypes = () => {
  return (
    <section className="insurance-types-section">
      <div className="container">
        <div className="section-header">
          <h2>Insurance for Every Vehicle</h2>
          <p>
            Whether you drive a car, ride a bike, or operate commercial vehicles,
            we have the perfect insurance solution for you.
          </p>
        </div>

        <div className="insurance-grid">
          {insuranceData.map((item, index) => (
            <div className="insurance-card" key={index}>
              <div className="insurance-icon">
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <ul>
                {item.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>

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
