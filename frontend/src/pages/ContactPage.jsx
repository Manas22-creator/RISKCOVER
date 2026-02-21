// src/pages/ContactPage.jsx
import React from 'react';
import PageHeader from '../components/common/PageHeader.jsx';
// We will create these new components
import GetInTouch from '../components/contact/GetInTouch.jsx';
import WhatsAppCta from '../components/contact/WhatsAppCta.jsx';
import ContactFormSection from '../components/contact/ContactFormSection.jsx';
import OfficeLocations from '../components/contact/OfficeLocations.jsx';
// import MapSection from '../components/contact/MapSection.jsx';

const ContactPage = () => {
  return (
    <div>
      <PageHeader
        title="Contact Us"
        subtitle="We're here to help! Get in touch with us for any questions about your vehicle insurance."
      />
      <GetInTouch />
      <WhatsAppCta />
      <ContactFormSection />
      <OfficeLocations />
      {/* <MapSection /> */}
    </div>
  );
};

export default ContactPage;