// src/components/faq/FaqCta.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './FaqCta.css'

const FaqCta = () => {
    return (
        <section className="faq-cta-section">
            <div className="container faq-cta-container">
                <Link to="/contact" className="btn btn-primary">Contact Support</Link>
                <Link to="/get-quote" className="btn btn-secondary">Request a Callback</Link>
            </div>
        </section>
    )
}

export default FaqCta;