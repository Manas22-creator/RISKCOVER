// src/components/campaigns/ActivePromotions.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './ActivePromotions.css';
import { FaCheckCircle } from "react-icons/fa";


// Import promotion images
import summerTripImage from '../../assets/images/campaign-summer-trip.jpg';
import newRiderImage from '../../assets/images/campaign-new-rider.jpg';
import fleetBoostImage from '../../assets/images/campaign-fleet-boost.jpg';

const promotions = [
  {
    title: 'Summer Safety Special',
    description: 'Get ready for your summer road trips with our special discount. New policies get 15% off for the first 6 months.',
    features: ['Free roadside assistance', 'Tire protection warranty', 'Rental car coverage included'],
    image: summerTripImage,
  },
  {
    title: 'New Rider Program',
    description: 'Special rates for new motorcycle insurance. We offer comprehensive coverage designed specifically for new riders.',
    features: ['Low down payment', 'Gear protection coverage', 'Safety course discount'],
    image: newRiderImage,
  },
  {
    title: 'Fleet Business Boost',
    description: 'Upgrade your business fleet insurance with multi-vehicle discounts and dedicated account management for fleets of 5 or more.',
    features: ['Volume discounts', 'Dedicated risk management', '24/7 priority support'],
    image: fleetBoostImage,
  },
];

const ActivePromotions = () => {
  return (
    <section className="active-promotions-section">
      <div className="container">
        <div className="section-header">
          <h2>Active Promotions</h2>
          <p>Take advantage of these exclusive offers while they last.</p>
        </div>
        <div className="promotions-list">
          {promotions.map((promo, index) => (
            <div className="promo-card" key={index}>
              <div className="promo-image">
                <img src={promo.image} alt={promo.title} />
              </div>
              <div className="promo-content">
                <h3>{promo.title}</h3>
                <p>{promo.description}</p>
                <ul className="promo-features">
                  {promo.features.map((feature, i) => (
                    // <li key={i}>✓ {feature}</li>
                    <li key={i}>
  <FaCheckCircle className="check-icon" /> {feature}
</li>

                  ))}
                </ul>
                <Link to="/get-quote" className="btn btn-primary">Get Started</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActivePromotions;