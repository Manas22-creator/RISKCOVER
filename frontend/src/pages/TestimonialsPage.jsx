// src/pages/TestimonialsPage.jsx
import React, { useState, useEffect } from 'react';
import PageHeader from '../components/common/PageHeader.jsx';
import TestimonialCard from '../components/testimonials/TestimonialCard.jsx';
import TrustMetrics from '../components/testimonials/TrustMetrics.jsx';
import TestimonialsCta from '../components/testimonials/TestimonialsCta.jsx';
import './TestimonialsPage.css';

// This would typically come from an API
import allTestimonials from '../data/testimonials.js'; // We will create this data file

const TestimonialsPage = () => {
  const [filter, setFilter] = useState('All');
  const [filteredtestimonials, setFilteredTestimonials] = useState(allTestimonials);

  useEffect(() => {
    if (filter === 'All') {
      setFilteredTestimonials(allTestimonials);
    } else {
      setFilteredTestimonials(
        allTestimonials.filter(t => t.category === filter)
      );
    }
  }, [filter]);

  // Calculate stats for the header
  const averageRating = (allTestimonials.reduce((acc, t) => acc + t.rating, 0) / allTestimonials.length).toFixed(1);

  return (
    <div>
      <PageHeader
        title="Customer Testimonials"
        subtitle="Don't just take our word for it. See what our satisfied customers have to say about their experience with VehicleGuard."
      />

      <section className="testimonials-section">
        <div className="container">
          {/* Stats Header */}
          <div className="stats-header">
            <div className="stat-item">
              <strong>{averageRating}</strong>
              <span>Average Rating</span>
            </div>
            <div className="stat-item">
              <strong>{allTestimonials.length}</strong>
              <span>Total Reviews</span>
            </div>
            <div className="stat-item">
              <strong>98%</strong>
              <span>Recommend Us</span>
            </div>
          </div>

          {/* Filter Buttons */}
          <div className="filter-tabs">
            <button onClick={() => setFilter('All')} className={filter === 'All' ? 'active' : ''}>All Reviews</button>
            <button onClick={() => setFilter('Car')} className={filter === 'Car' ? 'active' : ''}>Car Insurance</button>
            <button onClick={() => setFilter('Bike')} className={filter === 'Bike' ? 'active' : ''}>Bike Insurance</button>
            <button onClick={() => setFilter('Fleet')} className={filter === 'Fleet' ? 'active' : ''}>Fleet Insurance</button>
          </div>

          {/* Testimonials Grid */}
          <div className="testimonials-grid">
            {filteredtestimonials.map(testimonial => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      <TrustMetrics />
      <TestimonialsCta />
    </div>
  );
};

export default TestimonialsPage;