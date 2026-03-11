// src/pages/ContactPage.jsx
import React from 'react';
import PageHeader from '../components/common/PageHeader.jsx';
import ContactInfo from '../components/contact/ContactInfo.jsx'; // We will reuse and update this
import ContactForm from '../components/contact/ContactForm.jsx'; // We will reuse and update this
import WhatsAppCta from '../components/contact/WhatsAppCta.jsx';
import './ContactPage.css'; // Add new CSS file for page layout

const ContactPage = () => {
  return (
    <div>
      <PageHeader
        title="Contact Us"
        subtitle="We're here to help! Get in touch with us for any questions about your vehicle insurance."
      />

      <section className="contact-main-section">
        <div className="container">
          <div className="contact-layout-grid">
            {/* Left Column */}
            <div className="contact-details-column">
              <div className="section-header">
                <h2>Get in Touch</h2>
                <p>Choose the way that works best for you, and we'll get back to you as soon as possible.</p>
              </div>
              <ContactInfo />
            </div>

            {/* Right Column */}
            <div className="contact-form-column">
              <div className="section-header">
                <h2>Send Us a Message</h2>
                <p>Fill out the form below and we'll get back to you within 24 hours.</p>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      
      <WhatsAppCta />

    
    </div>
  );
};

export default ContactPage;