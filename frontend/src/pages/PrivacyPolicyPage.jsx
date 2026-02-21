// src/pages/PrivacyPolicyPage.jsx
import React from 'react';
import LegalPageLayout from '../components/common/LegalPageLayout.jsx';

const PrivacyPolicyPage = () => {
  return (
    <LegalPageLayout title="Privacy Policy" lastUpdated="January 26, 2026">
      <h2>1. Introduction</h2>
      <p>Welcome to RiskCover ("Company", "we", "our", "us")! We are committed to protecting your personal information and your right to privacy. This Privacy Policy applies to all information collected through our website when you visit our website or use our services.</p>

      <h2>2. Information We Collect</h2>
      <p>We collect information that you provide directly to us, including:</p>
      <ul>
        <li>Personal identification information (Name, email address, phone number)</li>
        <li>Vehicle information (Make, model, year, registration details)</li>
        <li>Driving history and claims information</li>
        <li>Payment and billing information</li>
        <li>Policy history and coverage information</li>
        <li>Communications records between you and our team</li>
      </ul>

      <h2>3. How We Use Your Information</h2>
      <p>We use the information we collect to:</p>
      <ul>
        <li>Process and manage your insurance policies</li>
        <li>Calculate accurate premium quotes</li>
        <li>Provide customer service and support</li>
        <li>Send policy updates and important notifications</li>
        <li>Prevent and detect fraud or other illegal activities</li>
        <li>Comply with legal and regulatory requirements</li>
      </ul>

      <h2>4. Information Sharing</h2>
      <p>We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted partners who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential. We may also release information when required by law or to protect our rights.</p>
      
      <h2>5. Data Security</h2>
      <p>We implement a variety of technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. This includes encryption, access controls, and secure data storage. However, no method of transmission over the internet is 100% secure.</p>

      <h2>6. Cookies and Tracking</h2>
      <p>Our website uses cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and for marketing purposes. You can control or refuse cookies through your browser settings, but this may affect some functionality of our website.</p>

      <h2>7. Your Rights</h2>
      <p>You have the right to:</p>
      <ul>
        <li>Access the personal information we hold about you</li>
        <li>Correct any inaccuracies in your personal information</li>
        <li>Request deletion of your personal information</li>
        <li>Object to the processing of your personal information</li>
        <li>Request data portability</li>
        <li>Withdraw consent at any time</li>
      </ul>

      <h2>8. Children's Privacy</h2>
      <p>Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.</p>
      
      <h2>9. Changes to This Policy</h2>
      <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.</p>
      
      <h2>10. Contact Us</h2>
      <p>For questions about this Privacy Policy or our data practices, please contact us:</p>
    </LegalPageLayout>
  );
};

export default PrivacyPolicyPage;