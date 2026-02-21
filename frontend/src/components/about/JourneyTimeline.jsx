// src/components/about/JourneyTimeline.jsx
import React from 'react';
import './JourneyTimeline.css';

const journeyData = [
  { year: '2010', title: 'Company Founded', description: 'Started with a vision to make vehicle insurance accessible to everyone.' },
  { year: '2015', title: 'Digital Transformation', description: 'Launched our online platform for instant quotes and policy management.' },
  { year: '2018', title: '100K+ Customers', description: 'Reached our first major milestone of serving 100,000 satisfied customers.' },
  { year: '2020', title: 'AI Integration', description: 'Introduced AI-powered claims processing for faster service.' },
  { year: '2024', title: '500K+ Customers', description: 'Now proudly serving over half a million customers nationwide.' },
];

const JourneyTimeline = () => {
  return (
    <section className="journey-timeline-section">
      <div className="container">
        <div className="section-header">
          <h2>Our Journey</h2>
          <p>Key milestones in our growth story</p>
        </div>
        <div className="timeline-container">
          {journeyData.map((item, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-content">
                <span className="timeline-year">{item.year}</span>
                <h3 className="timeline-title">{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JourneyTimeline;