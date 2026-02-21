// src/pages/HomePage.js
import React from 'react';

// Import all the corrected and new components for the home page
import HeroSection from '../components/home/HeroSection';
import InsuranceTypes from '../components/home/InsuranceTypes';
import WhyChooseUs from '../components/home/WhyChooseUs';
import HomeTestimonials from '../components/home/HomeTestimonials'; // We will create this new component
import ReadyCta from '../components/home/ReadyCta';

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <InsuranceTypes />
      <WhyChooseUs />
      <HomeTestimonials />
      <ReadyCta />
    </div>
  );
};

export default HomePage;