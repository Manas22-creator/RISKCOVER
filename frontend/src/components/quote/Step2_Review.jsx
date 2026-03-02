// src/components/quote/Step2_Review.jsx
import React from 'react';
import './QuoteForm.css';

const Step2_Review = ({ prevStep, handleSubmit, values, status }) => {
  const { vehicleType, fullName, email, phone, previousPolicy, uploadRC } = values;

  return (
    <div className="form-step-container">
      <h2>Review Your Details</h2>
      <div className="review-list">
        <p><strong>Vehicle Type:</strong> {vehicleType}</p>
        <p><strong>Full Name:</strong> {fullName}</p>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Phone Number:</strong> {phone}</p>
        <p><strong>Previous Policy File:</strong> {previousPolicy ? previousPolicy.name : 'Not selected'}</p>
        <p><strong>RC File:</strong> {uploadRC ? uploadRC.name : 'Not selected'}</p>
      </div>
      {status && <p className="form-status">{status}</p>}
      <div className="form-navigation">
        <button className="btn btn-prev" onClick={prevStep}>Go Back</button>
        <button className="btn btn-primary" onClick={handleSubmit}>Submit Now</button>
      </div>
    </div>
  );
};

export default Step2_Review;