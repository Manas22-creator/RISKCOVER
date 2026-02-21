// src/components/contact/ContactFormSection.jsx
import React from 'react';
import ContactForm from './ContactForm.jsx';
import './ContactFormSection.css';

const ContactFormSection = () => {
  return (
    <section className="contact-form-section">
      <div className="container">
        <div className="section-header">
          <h2>Send Us a Message</h2>
          <p>Fill out the form below and we'll get back to you within 24 hours</p>
        </div>

        <div className="contact-form-wrapper">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
