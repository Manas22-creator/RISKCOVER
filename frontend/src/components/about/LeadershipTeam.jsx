// src/components/about/LeadershipTeam.jsx
import React from 'react';
import './LeadershipTeam.css';

// Import team member images
import johnImage from '../../assets/images/team-john-anderson.jpeg';
import sarahImage from '../../assets/images/team-sarah-williams.jpeg';
import michaelImage from '../../assets/images/team-michael-chen.jpeg';

const teamData = [
  { name: 'John Anderson', title: 'CEO & Founder', image: johnImage, description: '20+ years in the insurance industry, passionate about customer-first service.' },
  { name: 'Sarah Williams', title: 'Head of Claims', image: sarahImage, description: 'Expert in claims processing with a focus on empathy and efficiency.' },
  { name: 'Michael Chen', title: 'CTO', image: michaelImage, description: 'Leading our digital innovation to make insurance simpler and faster.' },
];

const LeadershipTeam = () => {
  return (
    <section className="leadership-team-section">
      <div className="container">
        <div className="section-header">
          <h2>Meet Our Leadership</h2>
          <p>The experienced team behind VehicleGuard</p>
        </div>
        <div className="team-grid">
          {teamData.map((member, index) => (
            <div className="team-member-card" key={index}>
              <div className="member-image">
                <img src={member.image} alt={member.name} />
              </div>
              <div className="member-info">
                <h3>{member.name}</h3>
                <p className="member-title">{member.title}</p>
                <p className="member-description">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipTeam;