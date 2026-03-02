// src/pages/GetQuotePage.jsx
import React, { useState } from 'react';
import axios from 'axios';
import PageHeader from '../components/common/PageHeader.jsx';
import Step1_DataEntry from '../components/quote/Step1_DataEntry.jsx'; // Renamed for clarity
import Step2_Review from '../components/quote/Step2_Review.jsx';     // Renamed for clarity
import './GetQuotePage.css';

const GetQuotePage = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    vehicleType: '',
    fullName: '',
    email: '',
    phone: '',
    // Use null for file inputs initially
    previousPolicy: null,
    uploadRC: null,
  });
  const [status, setStatus] = useState('');
  const [errors, setErrors] = useState({});

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  const handleChange = input => e => {
    setFormData({ ...formData, [input]: e.target.value });
  };
  
  // Special handler for file inputs
  const handleFileChange = input => e => {
    setFormData({ ...formData, [input]: e.target.files[0] });
  };

  const handleSubmit = async () => {
    setStatus('Submitting...');
    setErrors({});

    // Use FormData to send text and files together
    const submissionData = new FormData();
    for (const key in formData) {
      submissionData.append(key, formData[key]);
    }

    try {
      const res = await axios.post('/api/quotes', submissionData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setStatus(`Success! Your quote request has been received.We will contact you shortly.`);
      // Advance to a "success" step visually
      setStep(3);
    } catch (error) {
      // ... (error handling logic remains the same)
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <Step1_DataEntry
            nextStep={nextStep}
            handleChange={handleChange}
            handleFileChange={handleFileChange}
            values={formData}
            errors={errors}
          />
        );
      case 2:
        return (
          <Step2_Review
            prevStep={prevStep}
            handleSubmit={handleSubmit}
            values={formData}
            status={status}
          />
        );
      case 3: // Success step
        return (
            <div className="submission-success">
              <h2>Thank You!</h2>
              <p>{status}</p>
            </div>
        );
      default:
        return <div>Error</div>;
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
          {renderStep()}
        </div>
      </div>
    </div>
  );
};

export default GetQuotePage;