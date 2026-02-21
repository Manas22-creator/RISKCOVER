// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Layout Components
import Header from './components/layout/Header.jsx';
import Footer from './components/layout/Footer.jsx';
import WhatsAppButton from './components/common/WhatsAppButton.jsx';

// Page Components (ensure all are using .jsx)
import HomePage from './pages/HomePage.jsx';
import AboutUsPage from './pages/AboutUsPage.jsx';
import ServicesPage from './pages/ServicesPage.jsx';
import CampaignsPage from './pages/CampaignsPage.jsx';
import GetQuotePage from './pages/GetQuotePage.jsx';
import TestimonialsPage from './pages/TestimonialsPage.jsx';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage.jsx'; 
import TermsOfServicePage from './pages/TermsOfServicePage.jsx';



// Global Styles
import './App.css';
import FAQPage from './pages/FAQPage.jsx';
import ContactPage from './pages/ContactPage.jsx';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/campaigns" element={<CampaignsPage />} />
            <Route path="/testimonials" element={<TestimonialsPage />} /> 
            <Route path="/get-quote" element={<GetQuotePage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy" element={<PrivacyPolicyPage />} />
            <Route path="/terms" element={<TermsOfServicePage />} />
            
           
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;