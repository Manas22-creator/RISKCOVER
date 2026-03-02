// src/components/faq/StillHaveQuestions.jsx
import React from 'react';
import './StillHaveQuestions.css';

const StillHaveQuestions = () => {
    return (
        <section className="still-questions-section">
            <div className="container">
                <div className="section-header">
                    <h2>Still Have Questions?</h2>
                    <p>Our customer support team is here to help you with any questions not covered in our FAQ.</p>
                </div>
                <div className="contact-methods-grid">
                    <div className="contact-method-card">
                        <h3>Call Us</h3>
                        <p>Speak with our experts</p>
                        <a href="tel:+917503789405" className="contact-link">+91 7503789405</a>
                        <span>24/7 Support Available</span>
                    </div>
                    <div className="contact-method-card">
                        <h3>Email Us</h3>
                        <p>Get detailed answers</p>
                        <a href="mailto:support@riskcoverinsurance.com" className="contact-link">support@riskcoverinsurance.com</a>
                        <span>Response within 24 hours</span>
                    </div>
                    <div className="contact-method-card">
                        <h3>Live Chat</h3>
                        <p>Instant assistance</p>
                        <button className="btn btn-primary">Start Chat</button>
                        <span>Available 24/7</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default StillHaveQuestions;