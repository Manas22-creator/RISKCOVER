// src/components/testimonials/TestimonialCard.jsx
import React from 'react';
import './TestimonialCard.css';

// Helper component for star ratings
const StarRating = ({ rating }) => (
  <div className="star-rating">
    {[...Array(5)].map((_, i) => (
      <span key={i} className={i < rating ? 'filled' : ''}>★</span>
    ))}
  </div>
);

const TestimonialCard = ({ testimonial }) => {
  const { name, vehicle, rating, quote } = testimonial;
  return (
    <div className="testimonial-page-card">
      <div className="card-header">
        <StarRating rating={rating} />
        <span className="verified-badge">✓ Verified</span>
      </div>
      <p className="card-quote">"{quote}"</p>
      <div className="card-author">
        <strong>{name}</strong>
        <span>{vehicle}</span>
      </div>
    </div>
  );
};

export default TestimonialCard;