// src/components/campaigns/StatsSection.js
import React from 'react';
import './StatsSection.css';

const statsData = [
  { value: '500K+', label: 'Vehicles Insured' },
  { value: '98%', label: 'Claim Success Rate' },
  { value: '1.2M+', label: 'Happy Clients' },
];

const StatsSection = () => {
  return (
    <div className="stats-section">
      <h2>Our Success in Numbers</h2>
      <div className="stats-container">
        {statsData.map((stat, index) => (
          <div key={index} className="stat-item">
            <div className="stat-value">{stat.value}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsSection;