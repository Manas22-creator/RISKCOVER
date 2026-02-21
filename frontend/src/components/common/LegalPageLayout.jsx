// src/components/common/LegalPageLayout.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import PageHeader from './PageHeader.jsx';
import './LegalPageLayout.css';

const LegalPageLayout = ({ title, lastUpdated, children }) => {
  // useLocation hook to determine the current page
  const location = useLocation();
  const isPrivacyPage = location.pathname === '/privacy';

  return (
    <div>
      <PageHeader title={title} subtitle={`Last updated: ${lastUpdated}`} />
      <section className="legal-content-section">
        <div className="container">
          <div className="legal-content-card">
            <div className="legal-text-content">
              {children}
            </div>
            {/* Contact Info Box */}
            <div className="contact-info-box">
              <strong>RiskCover</strong>
              <p>Email: privacy@riskcover.com</p>
              <p>Address: 123 Insurance Plaza, Suite 500, New York, NY 10031</p>
            </div>
          </div>
          {/* Bottom Navigation Buttons */}
          <div className="legal-page-nav">
            <Link to={isPrivacyPage ? "/terms" : "/privacy"} className="view-other-link">
              View {isPrivacyPage ? "Terms of Service" : "Privacy Policy"} →
            </Link>
            <Link to="/contact" className="btn btn-primary">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LegalPageLayout;