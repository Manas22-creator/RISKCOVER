// src/pages/GetQuotePage.jsx
import React, { useState } from 'react';
import axios from 'axios';
import PageHeader from '../components/common/PageHeader.jsx';
import VehicleQuoteFields from '../components/quote/VehicleQuoteFields.jsx';
import GeneralQuoteFields from '../components/quote/GeneralQuoteFields.jsx';
import Step2_Review from '../components/quote/Step2_Review.jsx';
import { validateQuoteForm } from '../utils/validation.js';
import './GetQuotePage.css';

// Define which categories use which form
const vehicleCategories = ['Car', 'Bike', 'Scooter', 'Commercial Vehicle', 'Other'];
const generalCategories = ['Health Insurance', 'Life Insurance', 'Shop & Fire Insurance'];
const allCategories = [...vehicleCategories, ...generalCategories];

const GetQuotePage = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    inquiryType: '',
    vehicleNumber: '',
    fullName: '',
    email: '',
    phone: '',
  });
  const [status, setStatus] = useState('');
  const [errors, setErrors] = useState({});

   const nextStep = () => {
    // 1. Clear previous errors
    setErrors({});
    
    // 2. Determine if it's a vehicle quote
    const isVehicleQuote = vehicleCategories.includes(formData.inquiryType);
    
    // 3. Run validation
    const validationErrors = validateQuoteForm(formData, isVehicleQuote);
    
    // 4. Check for errors
    if (Object.keys(validationErrors).length > 0) {
      // If there are errors, set them in state and DO NOT proceed
      setErrors(validationErrors);
    } else {
      // If there are no errors, proceed to the next step
      setStep(prev => prev + 1);
    }
  };





  const prevStep = () => setStep(prev => prev - 1);

  const handleChange = input => e => {
    setFormData(prev => ({ ...prev, [input]: e.target.value }));
    if (errors[input]) {
      setErrors(prev => ({ ...prev, [input]: null }));
    }
  };

  const handleSubmit = async () => {
    setStatus('Submitting...');
    setErrors({});

    const isVehicleQuote = vehicleCategories.includes(formData.inquiryType);
    const url = isVehicleQuote ? '/api/quotes' : '/api/general-quotes';
    
    let dataToSend = { ...formData };
    if (isVehicleQuote) {
      dataToSend.vehicleType = dataToSend.inquiryType;
      delete dataToSend.inquiryType;
    }

    try {
      const res = await axios.post(url, dataToSend);
      setStatus(res.data.msg || 'Your request has been submitted successfully!');
      setStep(3); // Go to success step
    } catch (error) {
      if (error.response && error.response.status === 400) {
        const errorData = error.response.data.errors;
        const formattedErrors = {};
        errorData.forEach(err => { formattedErrors[err.path] = err.msg; });
        setErrors(formattedErrors);
        setStatus('Please correct the errors before submitting.');
        setStep(1); // Go back to the form step if there are errors
      } else {
        setStatus('An unexpected error occurred. Please try again.');
      }
    }
  };

  const renderFormFields = () => {
    if (vehicleCategories.includes(formData.inquiryType)) {
      return <VehicleQuoteFields values={formData} handleChange={handleChange} errors={errors} />;
    }
    if (generalCategories.includes(formData.inquiryType)) {
      return <GeneralQuoteFields values={formData} handleChange={handleChange} errors={errors} />;
    }
    return null; // Show no additional fields until a type is selected
  };
  
  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div className="form-step-container">
            <h2>Your Details</h2>
            <div className="form-group full-width">
              <label htmlFor="inquiryType">Select Insurance Type *</label>
              <select id="inquiryType" name="inquiryType" value={formData.inquiryType} onChange={handleChange('inquiryType')} required>
                <option value="">-- Select an Option --</option>
                <optgroup label="Vehicle Insurance">
                  {vehicleCategories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                </optgroup>
                <optgroup label="Other Insurance">
                  {generalCategories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                </optgroup>
              </select>
              {errors.inquiryType && <p className="error-text">{errors.inquiryType}</p>}
            </div>
            {renderFormFields()}
            {formData.inquiryType && (
              <div className="form-navigation" style={{ justifyContent: 'flex-end' }}>
                <button className="btn btn-primary" onClick={nextStep}>Review Details</button>
              </div>
            )}
          </div>
        );
      case 2:
        return (
          <Step2_Review
            prevStep={prevStep}
            handleSubmit={handleSubmit}
            values={formData}
            status={status}
            isVehicleQuote={vehicleCategories.includes(formData.inquiryType)}
          />
        );
      case 3:
        return (
          <div className="submission-success">
            <h2>Thank You!</h2>
            <p>{status}</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <PageHeader
        title="Enquire Now"
        subtitle="Get a personalized insurance quote in just a few minutes."
      />
      <div className="quote-form-container">
        <div className="quote-form-card">
          <div className="step-indicator">
            <div className={`step-item ${step >= 1 ? 'active' : ''}`}><div className="step-number">1</div></div>
            <div className={`step-connector ${step >= 2 ? 'active' : ''}`}></div>
            <div className={`step-item ${step >= 2 ? 'active' : ''}`}><div className="step-number">2</div></div>
          </div>
          <div className="step-label">{step < 3 ? `Step ${step} of 2` : 'Complete'}</div>
          {renderStepContent()}
        </div>
      </div>
    </div>
  );
};

export default GetQuotePage;