// src/components/quote/Step2_PersonalInfo.jsx
import React from 'react';
import './QuoteForm.css';

// Accept 'errors' as a prop
const Step2_PersonalInfo = ({ nextStep, prevStep, handleChange, values, errors = {} }) => {
  return (
    <div className="form-step-container">
      <h2>Personal Information</h2>
      <div className="form-row">
        <div className="form-group">
          <label>Full Name *</label>
          <input type="text" onChange={handleChange('fullName')} defaultValue={values.fullName} required />
          {errors.fullName && <p className="error-text">{errors.fullName}</p>}
        </div>
        <div className="form-group">
          <label>Email Address *</label>
          <input type="email" onChange={handleChange('email')} defaultValue={values.email} required />
          {errors.email && <p className="error-text">{errors.email}</p>}
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label>Date of Birth *</label>
          <input type="date" onChange={handleChange('dob')} defaultValue={values.dob} required />
          {errors.dob && <p className="error-text">{errors.dob}</p>}
        </div>
        <div className="form-group">
          <label>ZIP Code *</label>
          <input type="text" pattern="[0-9]*" onChange={handleChange('zipCode')} defaultValue={values.zipCode} required />
          {errors.zipCode && <p className="error-text">{errors.zipCode}</p>}
        </div>
      </div>
      <div className="form-navigation">
        <button className="btn btn-prev" onClick={prevStep}>Previous</button>
        <button className="btn btn-primary" onClick={nextStep}>Next Step</button>
      </div>
    </div>
  );
};

export default Step2_PersonalInfo;