// src/components/home/WhyChooseUs.js
import React from 'react';
import './WhyChooseUs.css';
import chooseUsImage from '../../assets/images/why-choose-us.jpg';

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us-section">
      <div className="container choose-us-container">
        <div className="choose-us-content">
          <h2>Why Choose VehicleGuard?</h2>
          <ul>
            <li>
              <h3>Comprehensive Coverage</h3>
              <p>Flexible policies tailored to your needs, from basic liability to full-stack protection with customizable plans.</p>
            </li>
            <li>
              <h3>Quick Claims Processing</h3>
              <p>Our streamlined process aims for claim processing time of just 24 hours, getting you back on the road faster.</p>
            </li>
            <li>
              <h3>24/7 Support</h3>
              <p>Round-the-clock customer support and roadside assistance, because we're always here when you need us.</p>
            </li>
          </ul>
        </div>
        <div className="choose-us-image">
          <img src={chooseUsImage} alt="Wallet with credit cards" />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;