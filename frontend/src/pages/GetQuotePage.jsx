// src/pages/GetQuotePage.jsx
import React, { useState } from 'react';
import axios from 'axios';
import PageHeader from '../components/common/PageHeader.jsx';
import Step1_VehicleInfo from '../components/quote/Step1_VehicleInfo.jsx';
import Step2_PersonalInfo from '../components/quote/Step2_PersonalInfo.jsx';
import Step3_Review from '../components/quote/Step3_Review.jsx';
import './GetQuotePage.css';

const GetQuotePage = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    vehicleType: 'Car',
    vehicleYear: '',
    vehicleMake: '',
    fullName: '',
    email: '',
    dob: '',
    zipCode: '',
  });
  const [status, setStatus] = useState('');
  const [errors, setErrors] = useState({}); // State to hold validation errors

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  const handleChange = input => e => {
    setFormData({ ...formData, [input]: e.target.value });
    // Optional: Clear error when user starts typing
    if (errors[input]) {
      setErrors(prev => ({ ...prev, [input]: null }));
    }
  };

  const handleSubmit = async () => {
    setStatus('Submitting...');
    setErrors({});
    try {
      const res = await axios.post('/api/quotes', formData);
      console.log(res.data);
      setStatus(`Success! Your quote request has been received. We will contact you at ${formData.email} shortly.`);
    } catch (error) {
      if (error.response && error.response.status === 400) {
        const errorData = error.response.data.errors;
        const formattedErrors = {};
        errorData.forEach(err => {
          formattedErrors[err.path] = err.msg;
        });
        setErrors(formattedErrors);
        setStatus('Please correct the errors before submitting.');

        const firstErrorFieldStep1 = ['vehicleType', 'vehicleYear', 'vehicleMake'];
        if (Object.keys(formattedErrors).some(field => firstErrorFieldStep1.includes(field))) {
          setStep(1);
        } else {
          setStep(2);
        }
      } else {
        console.error('Quote submission error', error.response ? error.response.data : error.message);
        setStatus('There was an error submitting your request. Please try again.');
      }
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <Step1_VehicleInfo
            nextStep={nextStep}
            handleChange={handleChange}
            values={formData}
            errors={errors} // <-- Pass errors down
          />
        );
      case 2:
        return (
          <Step2_PersonalInfo
            nextStep={nextStep}
            prevStep={prevStep}
            handleChange={handleChange}
            values={formData}
            errors={errors} // <-- Pass errors down
          />
        );
      case 3:
        return (
          <Step3_Review
            prevStep={prevStep}
            handleSubmit={handleSubmit}
            values={formData}
            status={status} // <-- Pass status down to show messages
          />
        );
      default:
        return <div>Form Complete</div>;
    }
  };

  return (
    <div>
      <PageHeader
        title="Get Your Free Quote"
        subtitle="Get a personalized insurance quote in just a few minutes."
      />
      <div className="quote-form-container">
        <div className="quote-form-card">
          <div className="step-indicator">
            {/* ... step indicator JSX ... */}
          </div>
          <div className="step-label">Step {step} of 3</div>
          {status.startsWith('Success!') ? (
            <div className="submission-success">
              <h2>Thank You!</h2>
              <p>{status}</p>
            </div>
          ) : (
            renderStep()
          )}
        </div>
      </div>
    </div>
  );
};

export default GetQuotePage;