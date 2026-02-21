// src/components/campaigns/OfferCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import './OfferCard.css';

import summerImage from '../../assets/images/offer-summer-savings2.png';
import referImage from '../../assets/images/offer-refer-friend2.png';

const OfferCard = ({ title, description, buttonText, buttonLink }) => {
  const isSummerOffer = title.toLowerCase().includes('summer');
  const imageSrc = isSummerOffer ? summerImage : referImage;
  const buttonClass = isSummerOffer ? 'btn-primary' : 'btn-secondary';

  return (
    <div className="offer-card">
      <div className="offer-image-wrapper">
        <img src={imageSrc} alt={title} className="offer-image" />
      </div>

      <div className="offer-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <Link to={buttonLink} className={`btn ${buttonClass}`}>
          {buttonText}
        </Link>
      </div>
    </div>
  );
};

export default OfferCard;
