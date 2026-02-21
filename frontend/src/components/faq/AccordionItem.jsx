// src/components/faq/AccordionItem.jsx
import React, { useState } from 'react';
import './AccordionItem.css';

const AccordionItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsOpen(!isOpen)}>
        <h3>{question}</h3>
        <span className={isOpen ? 'open' : ''}>+</span>
      </div>
      {isOpen && <div className="accordion-content">{answer}</div>}
    </div>
  );
};

export default AccordionItem;