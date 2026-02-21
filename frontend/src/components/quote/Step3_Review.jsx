// src/components/quote/Step3_Review.jsx
import React from 'react';
import './QuoteForm.css';

// Accept 'status' as a prop
const Step3_Review = ({ prevStep, handleSubmit, values, status }) => {
  const { vehicleType, vehicleYear, vehicleMake, fullName, email, dob, zipCode } = values;

  return (
    <div className="form-step-container">
      <h2>Review Your Details</h2>
      <div className="review-list">
        <p><strong>Vehicle Type:</strong> {vehicleType}</p>
        <p><strong>Vehicle Year:</strong> {vehicleYear}</p>
        <p><strong>Vehicle Make:</strong> {vehicleMake}</p>
        <p><strong>Full Name:</strong> {fullName}</p>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Date of Birth:</strong> {dob}</p>
        <p><strong>ZIP Code:</strong> {zipCode}</p>
      </div>

      {/* Display the status message (e.g., "Submitting..." or "Please correct the errors...") */}
      {status && <p className="form-status">{status}</p>}

      <div className="form-navigation">
        <button className="btn btn-prev" onClick={prevStep}>Previous</button>
        <button className="btn btn-primary" onClick={handleSubmit}>Submit Quote</button>
      </div>
    </div>
  );
};

export default Step3_Review;