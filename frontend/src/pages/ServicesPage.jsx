// src/pages/ServicesPage.jsx
import React, { useState } from 'react';
import PageHeader from '../components/common/PageHeader.jsx';
import PricingPlans from '../components/services/PricingPlans.jsx'; // We will create this
import ServiceBenefits from '../components/services/ServiceBenefits.jsx'; // We will create this
import ServiceDetail from '../components/services/ServiceDetail.jsx'; // We will create this
import './ServicesPage.css';

// Import images for each service type
import carInsuranceImage from '../assets/images/service-car.jpg';
import bikeInsuranceImage from '../assets/images/service-bike.jpg';
import truckInsuranceImage from '../assets/images/service-truck.jpg';
import fleetInsuranceImage from '../assets/images/service-fleet.jpg';
import healthInsuranceImage from '../assets/images/service-health.jpg';
import lifeInsuranceImage from '../assets/images/service-life.jpg';
import shopInsuranceImage from '../assets/images/service-shop.jpg';


// Data for our services. In a real app, this could come from an API.
const servicesData = {
  car: {
    title: 'Car Insurance',
    description: 'Comprehensive coverage for your personal vehicle with competitive rates and excellent benefits. Protect your car against accidents, theft, and unforeseen damages.',
    features: ['Collision & Comprehensive Coverage', 'Liability Protection up to $1M', '24/7 Roadside Assistance', 'Rental Car Coverage', 'Glass Repair with No Deductible', 'Multi-car Discounts Available'],
    image: carInsuranceImage,
  },
  bike: {
    title: 'Bike Insurance',
    description: 'Specialized protection for your motorcycle. Whether you ride a cruiser, sport bike, or scooter, we have a policy that fits your ride and your budget.',
    features: ['Total Loss Coverage', 'Custom Parts & Equipment', 'Roadside Assistance', 'Carried Contents Coverage', 'Trip Interruption Coverage', 'Safety Apparel Coverage'],
    image: bikeInsuranceImage,
  },
  truck: {
    title: 'Truck Insurance',
    description: 'Heavy-duty protection for commercial trucks. We cover everything from single owner-operators to large fleets, ensuring your business is protected.',
    features: ['Primary Auto Liability', 'Motor Truck Cargo', 'Physical Damage Coverage', 'Non-Trucking Liability', 'Trailer Interchange', 'Downtime Coverage'],
    image: truckInsuranceImage,

  },
  fleet: {
    title: 'Commercial Insurance',
    description: 'Streamlined insurance solutions for your entire fleet of commercial vehicles. Simplify your management with a single policy and dedicated support.',
    features: ['Coverage for All Vehicle Types', 'Simplified Billing & Policy Management', 'Fleet Safety Programs & Discounts', 'Dedicated Account Manager', 'GPS Tracking Discounts', 'Hired & Non-Owned Auto'],
    image: fleetInsuranceImage,
  },
  Health: {
    title: 'Health Insurance',
    description: 'Cashless suvidha and comprehensive medical coverage for you and your family.',
    features: ['Cashless Hospitalization', 'Comprehensive Medical Coverage', 'Family Floater Plans', 'Critical Illness Coverage', 'Maternity Benefits', 'No Claim Bonus'],
    image: healthInsuranceImage,
  },
  Life: {
    title: 'Life Insurance (LIC & Private)',
    description: 'LIC & Private life insurance plans to secure your family\'s future.', 
    features: ['Term Life Plans', 'Whole Life Plans', 'Endowment Plans', 'Child Plans', 'Retirement Plans', 'Critical Illness Riders'],
    image: lifeInsuranceImage,
  },
  Shop: {
    title: 'Shop & Fire Insurance',
    description: 'Protect your business assets against fire, theft, and natural disasters.',
    features: ['Fire & Allied Perils', 'Burglary & Theft', 'Public Liability', 'Business Interruption', 'Money Insurance', 'Electronic Equipment Coverage'],
    image: shopInsuranceImage,
  },
};

const ServicesPage = () => {
  // State to manage which service tab is active
  const [activeService, setActiveService] = useState('car');

  return (
    <div>
      <PageHeader
        title="Insurance Services"
        subtitle="Comprehensive coverage for every type of vehicle. Choose the protection that fits your needs."
      />

      <section className="services-content-section">
        <div className="container">
          {/* Tab Navigation */}
          <div className="service-tabs">
            <button
              className={`tab-btn ${activeService === 'car' ? 'active' : ''}`}
              onClick={() => setActiveService('car')}
            >
              Car Insurance
            </button>
            <button
              className={`tab-btn ${activeService === 'bike' ? 'active' : ''}`}
              onClick={() => setActiveService('bike')}
            >
              Bike Insurance
            </button>
            <button
              className={`tab-btn ${activeService === 'truck' ? 'active' : ''}`}
              onClick={() => setActiveService('truck')}
            >
              Truck Insurance
            </button>
            <button
              className={`tab-btn ${activeService === 'fleet' ? 'active' : ''}`}
              onClick={() => setActiveService('fleet')}
            >
              Commercial Insurance
            </button>
            <button
              className={`tab-btn ${activeService === 'Health' ? 'active' : ''}`}
              onClick={() => setActiveService('Health')}
            >
              Health Insurance
            </button>
            <button
              className={`tab-btn ${activeService === 'Life' ? 'active' : ''}`}
              onClick={() => setActiveService('Life')}
            >
              Life Insurance
            </button>
            <button
              className={`tab-btn ${activeService === 'Shop' ? 'active' : ''}`}
              onClick={() => setActiveService('Shop')}
            >
              Shop & Fire Insurance
            </button>
          </div>

          {/* Render the active service detail */}
          <ServiceDetail service={servicesData[activeService]} />
        </div>
      </section>

      <PricingPlans />
      <ServiceBenefits />
    </div>
  );
};

export default ServicesPage;