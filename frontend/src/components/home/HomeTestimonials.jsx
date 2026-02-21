// src/components/home/HomeTestimonials.js
import React from 'react';
import { Link } from 'react-router-dom';
import './HomeTestimonials.css';

const testimonialsData = [
  { name: 'Sarah Johnson', location: 'Honda Civic', stars: 5, quote: '"VehicleGuard made getting car insurance so easy and affordable. The claim process was fantastic!"' },
  { name: 'Mike Rodriguez', location: 'Ford F-150', stars: 5, quote: '"Perfect bike insurance coverage. Their team was professional and the online platform is very easy to use."' },
  { name: 'Emily Chen', location: 'Fleet Manager', stars: 5, quote: '"Saved hundreds on my truck insurance while getting better coverage. Highly recommended!"' },
];

// A small helper component to render stars
const StarRating = ({ rating }) => {
  return (
    <div className="star-rating">
      {[...Array(rating)].map((_, i) => <span key={i}>★</span>)}
    </div>
  );
};

const HomeTestimonials = () => {
  return (
    <section className="home-testimonials-section">
      <div className="container">
        <div className="section-header">
          <h2>What Our Customers Say</h2>
          <p>Join thousands of satisfied customers who trust us with their vehicle insurance.</p>
        </div>
        <div className="testimonials-grid">
          {testimonialsData.map((testimonial, index) => (
            <div className="testimonial-card" key={index}>
              <StarRating rating={testimonial.stars} />
              <p className="quote">{testimonial.quote}</p>
              <div className="author">
                <strong>{testimonial.name}</strong>
                <span>{testimonial.location}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="testimonials-cta">
          <Link to="/testimonials" className="btn btn-primary">Read More Reviews</Link>
        </div>
      </div>
    </section>
  );
};

export default HomeTestimonials;