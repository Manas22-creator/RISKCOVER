// src/components/contact/ContactForm.jsx
import React, { useState } from 'react';
import axios from 'axios';
import './ContactForm.css';

const ContactForm = () => {
  // Updated state to match the new form fields
  const [formData, setFormData] = useState({
    inquiryType: 'General Information',
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState('');
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    setErrors({});
    try {
      // Assuming your backend expects these new fields.
      // We may need to update the backend model later.
      const res = await axios.post('/api/contact', formData);
      setStatus('Message sent successfully!');
      setFormData({
        inquiryType: 'General Information',
        fullName: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      if (error.response && error.response.status === 400) {
        const errorData = error.response.data.errors;
        const formattedErrors = {};
        errorData.forEach(err => {
          formattedErrors[err.param] = err.msg;
        });
        setErrors(formattedErrors);
        setStatus('Please fix the errors in the form.');
      } else {
        console.error('Submission error', error);
        setStatus('Failed to send message. Please try again.');
      }
    }
  };

  return (
    <div className="contact-form-card">
      <form onSubmit={handleSubmit}>
        <div className="form-group full-width">
          <label htmlFor="inquiryType">What can we help you with? *</label>
          <select
            id="inquiryType"
            name="inquiryType"
            value={formData.inquiryType}
            onChange={handleChange}
            required
          >
            <option>General Information</option>
            <option>Get a Quote</option>
            <option>File a Claim</option>
            <option>Billing Question</option>
            <option>Technical Support</option>
            <option>Feedback</option>
          </select>
          {errors.inquiryType && <p className="error-text">{errors.inquiryType}</p>}
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="fullName">Full Name *</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
            {errors.fullName && <p className="error-text">{errors.fullName}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && <p className="error-text">{errors.email}</p>}
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
            {errors.phone && <p className="error-text">{errors.phone}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject *</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
            {errors.subject && <p className="error-text">{errors.subject}</p>}
          </div>
        </div>
        
        <div className="form-group full-width">
          <label htmlFor="message">Message *</label>
          <textarea
            id="message"
            name="message"
            rows="6"
            placeholder="Please provide details about your inquiry..."
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          {errors.message && <p className="error-text">{errors.message}</p>}
        </div>

        <div className="form-group full-width submit-group">
          <button type="submit" className="btn btn-primary">Send Message</button>
          {status && <p className="form-status">{status}</p>}
        </div>
      </form>
    </div>
  );
};

export default ContactForm;