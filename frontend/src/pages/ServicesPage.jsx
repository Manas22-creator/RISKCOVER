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
    title: 'Fleet Insurance',
    description: 'Streamlined insurance solutions for your entire fleet of commercial vehicles. Simplify your management with a single policy and dedicated support.',
    features: ['Coverage for All Vehicle Types', 'Simplified Billing & Policy Management', 'Fleet Safety Programs & Discounts', 'Dedicated Account Manager', 'GPS Tracking Discounts', 'Hired & Non-Owned Auto'],
    image: fleetInsuranceImage,
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
              Fleet Insurance
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