// src/pages/TermsOfServicePage.jsx
import React from 'react';
import LegalPageLayout from '../components/common/LegalPageLayout.jsx';

const TermsOfServicePage = () => {
  return (
    <LegalPageLayout title="Terms of Service" lastUpdated="January 26, 2026">
      <h2>1. Acceptance of Terms</h2>
      <p>By accessing and using RiskCover's website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by these Terms, please do not use our services.</p>

      <h2>2. Description of Services</h2>
      <p>RiskCover is an insurance facilitator that connects customers with vehicle insurance providers including but not limited to car insurance, motorcycle insurance, and fleet insurance. We provide quoting, policy management, and customer support. We do not underwrite insurance policies ourselves.</p>

      <h2>3. Eligibility</h2>
      <p>To use our services, you must:</p>
      <ul>
        <li>Be at least 18 years of age</li>
        <li>Provide accurate and complete information</li>
        <li>Hold a valid driver's license</li>
        <li>Meet underwriting requirements for our partners</li>
        <li>Comply with all applicable laws and regulations</li>
      </ul>

      <h2>4. Insurance Policy Terms</h2>
      <p>All insurance policies are subject to the specific terms, conditions, and exclusions outlined in your policy documents provided by the underwriting insurance company. We are not a party to the insurance contract and do not underwrite them. In case of any conflict between these Terms of Service and your policy documents, the policy documents will prevail.</p>

      {/* ... Continue adding all other sections like Premium Payments, Claims Process, etc. here ... */}
      <h2>5. Premium Payments</h2>
      <p>You are responsible for timely payment of premiums as outlined in your policy. Non-payment may result in policy cancellation. We act as a facilitator in processing payments on behalf of our partner insurers.</p>

      <h2>6. Claims Process</h2>
      <p>In the event of a claim, you must report it to your insurance provider directly. We provide support in navigating the claims process but do not adjudicate claims. All claim decisions are made by the underwriting insurance company.</p>

      <h2>7. User Responsibilities</h2>
      <p>You agree to:</p>
      <ul>
        <li>Provide truthful and accurate information in all applications</li>
        <li>Notify your insurer of any changes in your circumstances</li>
        <li>Maintain valid insurance coverage for your vehicles</li>
        <li>Comply with all traffic laws and regulations</li>
      </ul>

      <h2>8. Limitation of Liability</h2>
      <p>RiskCover shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services or inability to use our services, even if we have been advised of the possibility of such damages.</p>

      <h2>9. Disclaimer of Warranties</h2>
      <p>Our services are provided on an "as-is" basis. We make no warranties, express or implied, regarding the accuracy, completeness, or reliability of information provided by partner insurers.</p>

      <h2>10. Privacy and Data Protection</h2>
      <p>Your personal information is handled in accordance with our Privacy Policy. We implement industry-standard security measures to protect your data.</p>

      <h2>11. Modifications to Terms</h2>
      <p>We reserve the right to modify these Terms of Service at any time. Continued use of our services constitutes acceptance of updated terms.</p>

      <h2>12. Governing Law</h2>
      <p>These Terms of Service are governed by and construed in accordance with applicable state laws where the policyholder resides.</p>

      <h2>13. Contact Information</h2>
      <p>For questions about these Terms of Service, please contact us at support@riskcover.com or visit our website.</p>
{/* 
      <h2>14. Contact Information</h2>
      <p>For questions about these Terms of Service, please contact us:</p> */}
    </LegalPageLayout>
  );
};

export default TermsOfServicePage;