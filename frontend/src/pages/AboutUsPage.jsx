// src/pages/AboutUsPage.jsx
import React from 'react';

// We will create these new components next
import AboutIntro from '../components/about/AboutIntro.jsx';
import CoreValues from '../components/about/CoreValues.jsx';
import JourneyTimeline from '../components/about/JourneyTimeline.jsx';
// import LeadershipTeam from '../components/about/LeadershipTeam.jsx';
import PageHeader from '../components/common/PageHeader.jsx'; 

const AboutUsPage = () => {
  return (
    <div>
      <PageHeader
        title="About VehicleGuard"
        subtitle="For over a decade, we've been committed to protecting what matters most to you - your vehicles and your peace of mind."
      />
      <AboutIntro />
      <CoreValues />
      <JourneyTimeline />
      {/* <LeadershipTeam /> */}
    </div>
  );
};

export default AboutUsPage;