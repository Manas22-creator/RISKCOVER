// src/components/home/CurrentOffers.js
import React from 'react';
import { Link } from 'react-router-dom';
import './CurrentOffers.css';

import summerImage from '../../assets/images/offer-summer-savings3.png';
import referImage from '../../assets/images/offer-refer-friend3.png';

const offers = [
  {
    title: 'Summer Savings!',
    description:
      'Get up to 15% off when you switch to SecureDrive this summer. Limited-time offer for new customers.',
    buttonText: 'Get Discount',
    buttonLink: '/get-quote',
    image: summerImage
  },
  {
    title: 'Refer a Friend, Get Rewarded',
    description:
      'Refer a friend to SecureDrive and you both get a $50 gift card when they sign up for a new policy.',
    buttonText: 'Learn More',
    buttonLink: '/campaigns',
    image: referImage
  }
];

const CurrentOffers = () => {
  return (
    <section className="offers-section">
      <h2>Current Offers</h2>
      <p>Don't miss out on our special promotions.</p>

      <div className="offers-container">
        {offers.map((offer, index) => (
          <div className="offer-display-card" key={index}>
            <div className="offer-image-wrapper">
              <img
                src={offer.image}
                alt={offer.title}
                className="offer-image"
              />
            </div>

            <div className="offer-content">
              <h3>{offer.title}</h3>
              <p>{offer.description}</p>
              <Link to={offer.buttonLink} className="btn btn-primary">
                {offer.buttonText}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CurrentOffers;
