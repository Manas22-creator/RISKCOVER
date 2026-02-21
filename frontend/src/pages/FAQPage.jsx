// src/pages/FAQPage.jsx
import React, { useState } from 'react';
import PageHeader from '../components/common/PageHeader.jsx';
import AccordionItem from '../components/faq/AccordionItem.jsx';
import StillHaveQuestions from '../components/faq/StillHaveQuestions.jsx';
import FaqCta from '../components/faq/FaqCta.jsx';
import './FAQPage.css';

const faqData = {
  general: [
    { question: 'What types of vehicles do you insure?', answer: 'We insure a wide range of vehicles including cars, motorcycles, commercial trucks, and business fleets. Each category has specialized plans to fit your needs.' },
    { question: 'How quickly can I get a quote?', answer: 'You can get a personalized quote in just a few minutes through our online form. The process is quick, simple, and requires only basic information to get started.' },
    { question: 'What makes VehicleGuard different from other insurers?', answer: 'We combine competitive pricing with exceptional customer service, a streamlined digital experience, and fast claims processing. Our focus is on making insurance transparent and hassle-free.' },
    { question: 'Do you offer multi-vehicle discounts?', answer: 'Yes! We offer significant discounts when you insure multiple vehicles with us, whether it\'s for your family or your business fleet. Contact us for a consolidated quote.' },
  ],
  coverage: [
    { question: 'What is comprehensive vs. collision coverage?', answer: 'Collision coverage pays for damage to your vehicle from an accident with another object. Comprehensive covers non-collision events like theft, vandalism, or natural disasters.' },
    { question: 'Do I need uninsured motorist coverage?', answer: 'It is highly recommended. This coverage protects you if you are in an accident with a driver who has no insurance or insufficient insurance to cover your damages.' },
  ],
  claims: [
    { question: 'How do I file a claim?', answer: 'You can file a claim 24/7 through our mobile app, our website, or by calling our dedicated claims hotline. Our goal is to make the process as smooth as possible.' },
    { question: 'How long does the claims process take?', answer: 'We pride ourselves on our speed. Our average claim processing time is just 72 hours from filing to resolution for straightforward cases.' },
  ],
  billing: [
    { question: 'What payment options are available?', answer: 'We accept all major credit cards, bank transfers (ACH), and offer automated monthly payment plans. You can manage your billing preferences through your online account.' },
    { question: 'Can I change my payment date?', answer: 'Yes, you can adjust your monthly payment date to better suit your financial schedule by logging into your online portal or contacting our support team.' },
  ]
};

const FAQPage = () => {
  const [activeTab, setActiveTab] = useState('general');

  return (
    <div>
      <PageHeader
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about our vehicle insurance services, coverage options, and policies."
      />

      <section className="faq-section">
        <div className="container">

          {/* FAQ Tabs with Emoji Icons */}
          <div className="faq-tabs">
            <button
              onClick={() => setActiveTab('general')}
              className={activeTab === 'general' ? 'active' : ''}
            >
              ❓ General Questions
            </button>

            <button
              onClick={() => setActiveTab('coverage')}
              className={activeTab === 'coverage' ? 'active' : ''}
            >
              🛡️ Coverage Options
            </button>

            <button
              onClick={() => setActiveTab('claims')}
              className={activeTab === 'claims' ? 'active' : ''}
            >
              📄 Claims Process
            </button>

            <button
              onClick={() => setActiveTab('billing')}
              className={activeTab === 'billing' ? 'active' : ''}
            >
              💳 Billing & Payments
            </button>
          </div>

          {/* Accordion */}
          <div className="accordion-container">
            {faqData[activeTab].map((faq, index) => (
              <AccordionItem
                key={index}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>

        </div>
      </section>

      <StillHaveQuestions />
      <FaqCta />
    </div>
  );
};

export default FAQPage;
