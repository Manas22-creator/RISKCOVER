// src/components/quote/Step1_VehicleInfo.jsx
import React from 'react';
import './QuoteForm.css';

// Accept 'errors' as a prop
const Step1_VehicleInfo = ({ nextStep, handleChange, values, errors = {} }) => {
  return (
    <div className="form-step-container">
      <h2>Vehicle Information</h2>
      <div className="form-group full-width">
        <label>Vehicle Type *</label>
        <select onChange={handleChange('vehicleType')} defaultValue={values.vehicleType} required>
          <option value="Car">Car</option>
          <option value="Bike">Bike</option>
          <option value="Truck">Truck</option>
          <option value="Fleet">Fleet</option>
        </select>
        {errors.vehicleType && <p className="error-text">{errors.vehicleType}</p>}
      </div>
      <div className="form-row">
        <div className="form-group">
          <label>Vehicle Year *</label>
          <input type="number" placeholder="e.g., 2022" onChange={handleChange('vehicleYear')} defaultValue={values.vehicleYear} required />
          {errors.vehicleYear && <p className="error-text">{errors.vehicleYear}</p>}
        </div>
        <div className="form-group">
          <label>Vehicle Make *</label>
          <input type="text" placeholder="e.g., Honda" onChange={handleChange('vehicleMake')} defaultValue={values.vehicleMake} required />
          {errors.vehicleMake && <p className="error-text">{errors.vehicleMake}</p>}
        </div>
      </div>
      <div className="form-navigation" style={{ justifyContent: 'flex-end' }}>
        <button className="btn btn-primary" onClick={nextStep}>Next Step</button>
      </div>
    </div>
  );
};

export default Step1_VehicleInfo;