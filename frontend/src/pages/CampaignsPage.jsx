// src/pages/CampaignsPage.jsx
import React from 'react';
import PageHeader from '../components/common/PageHeader.jsx';
// We will create/update these components next
import ActivePromotions from '../components/campaigns/ActivePromotions.jsx';
import SuccessNumbers from '../components/campaigns/SuccessNumbers.jsx';
import SuccessStories from '../components/campaigns/SuccessStories.jsx';
import CampaignsCta from '../components/campaigns/CampaignsCta.jsx';

const CampaignsPage = () => {
  return (
    <div>
      <PageHeader
        title="Special Campaigns"
        subtitle="Don't miss out on these special offers and programs designed to save you money."
      />
      <ActivePromotions />
      <SuccessNumbers />
      <SuccessStories />
      <CampaignsCta />
    </div>
  );
};

export default CampaignsPage;