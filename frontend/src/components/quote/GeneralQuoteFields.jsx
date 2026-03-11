// src/components/quote/GeneralQuoteFields.jsx
import React from 'react';
import './QuoteForm.css';

const GeneralQuoteFields = ({ values, handleChange, errors }) => {
  return (
    <>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="fullName">Your Name *</label>
          <input type="text" id="fullName" name="fullName" value={values.fullName} onChange={handleChange('fullName')} autoComplete="name" required />
          {errors.fullName && <p className="error-text">{errors.fullName}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Your Email *</label>
          <input type="email" id="email" name="email" value={values.email} onChange={handleChange('email')} autoComplete="email" required />
          {errors.email && <p className="error-text">{errors.email}</p>}
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="phone">Phone Number *</label>
          <input type="tel" id="phone" name="phone" value={values.phone} onChange={handleChange('phone')} autoComplete="tel" required />
          {errors.phone && <p className="error-text">{errors.phone}</p>}
        </div>
      </div>
    </>
  );
};

export default GeneralQuoteFields;