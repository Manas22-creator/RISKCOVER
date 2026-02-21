// src/components/campaigns/CampaignsCta.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './CampaignsCta.css';

const CampaignsCta = () => {
  return (
    <section className="campaigns-cta-section">
      <div className="container">
        <h2>Ready to Save on Insurance?</h2>
        <p>Don't wait - these special offers won't last forever. Get your free quote today.</p>
        <div className="cta-buttons">
          <Link to="/get-quote" className="btn btn-primary">Get Free Quote Now</Link>
          <Link to="/services" className="btn btn-secondary">Compare Plans</Link>
        </div>
      </div>
    </section>
  );
};

export default CampaignsCta;