// src/components/quote/Step1_DataEntry.jsx
import React from 'react';
import './QuoteForm.css';

const Step1_DataEntry = ({ nextStep, handleChange, handleFileChange, values, errors = {} }) => {
  return (
    <div className="form-step-container">
      <h2>Your Details</h2>
      <div className="form-group full-width">
        <label htmlFor="vehicleType">Vehicle Type *</label>
        <select
          id="vehicleType" // Added id
          name="vehicleType"
          onChange={handleChange('vehicleType')}
          defaultValue={values.vehicleType}
          required
        >
          <option value="">Select Vehicle Type</option>
          <option value="Car">Car</option>
          <option value="Bike">Bike</option>
          <option value="Scooter">Scooter</option>
          <option value="Truck">Truck</option>
          <option value="Other">Other</option>
        </select>
        {errors.vehicleType && <p className="error-text">{errors.vehicleType}</p>}
      </div>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="fullName">Your Name *</label>
          <input
            type="text"
            id="fullName" // Added id
            name="fullName"
            autoComplete="name" // Added autocomplete
            onChange={handleChange('fullName')}
            defaultValue={values.fullName}
            required
          />
          {errors.fullName && <p className="error-text">{errors.fullName}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Your Email *</label>
          <input
            type="email"
            id="email" // Added id
            name="email"
            autoComplete="email" // Added autocomplete
            onChange={handleChange('email')}
            defaultValue={values.email}
            required
          />
          {errors.email && <p className="error-text">{errors.email}</p>}
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="phone">Phone Number *</label>
          <input
            type="tel"
            id="phone" // Added id
            name="phone"
            autoComplete="tel" // Added autocomplete
            onChange={handleChange('phone')}
            defaultValue={values.phone}
            required
          />
          {errors.phone && <p className="error-text">{errors.phone}</p>}
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="previousPolicy">Previous Policy * (PDF, JPG, PNG up to 5MB)</label>
          <input
            type="file"
            id="previousPolicy" // Added id
            name="previousPolicy"
            onChange={handleFileChange('previousPolicy')}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="uploadRC">Upload RC * (PDF, JPG, PNG up to 5MB)</label>
          <input
            type="file"
            id="uploadRC" // Added id
            name="uploadRC"
            onChange={handleFileChange('uploadRC')}
            required
          />
        </div>
      </div>
      <div className="form-navigation" style={{ justifyContent: 'flex-end' }}>
        <button className="btn btn-primary" onClick={nextStep}>Review Details</button>
      </div>
    </div>
  );
};

export default Step1_DataEntry;