// src/components/quote/Step2_Review.jsx
import React from 'react';
import './QuoteForm.css';

const Step2_Review = ({ prevStep, handleSubmit, values, status, isVehicleQuote }) => {
  return (
    <div className="form-step-container">
      <h2>Review Your Details</h2>
      <div className="review-list">
        <p><strong>Insurance Type:</strong> {values.inquiryType}</p>
        
        {/* Conditionally render vehicle-specific fields */}
        {isVehicleQuote && (
          <p><strong>Vehicle Number:</strong> {values.vehicleNumber}</p>
        )}
        
        {/* Common fields */}
        <p><strong>Full Name:</strong> {values.fullName}</p>
        <p><strong>Email:</strong> {values.email}</p>
        <p><strong>Phone Number:</strong> {values.phone}</p>
      </div>

      {status && <p className="form-status">{status}</p>}

      <div className="form-navigation">
        <button className="btn btn-prev" onClick={prevStep}>Go Back</button>
        <button className="btn btn-primary" onClick={handleSubmit}>Submit Request</button>
      </div>
    </div>
  );
};

export default Step2_Review;