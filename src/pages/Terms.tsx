
import React from 'react';

const Terms = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Terms of Service</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Last updated: March 15, 2024
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-600 mb-6">
              By accessing and using Zentho ("the Service"), you accept and agree to be bound by the terms 
              and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Description of Service</h2>
            <p className="text-gray-600 mb-6">
              Zentho is a platform that allows creative professionals to create, customize, and share 
              online portfolios. The service includes portfolio building tools, community features, 
              and related services as described on our website.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Accounts</h2>
            <div className="text-gray-600 mb-6">
              <p className="mb-3">When you create an account with us, you must provide accurate and complete information. You are responsible for:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Safeguarding your password and account information</li>
                <li>All activities that occur under your account</li>
                <li>Notifying us immediately of any unauthorized use of your account</li>
                <li>Ensuring your account information remains current and accurate</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. User Content</h2>
            <div className="text-gray-600 mb-6">
              <p className="mb-3">You retain ownership of content you upload to Zentho. However, by uploading content, you grant us:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>A worldwide, non-exclusive license to use, display, and distribute your content on the platform</li>
                <li>The right to moderate, remove, or restrict access to content that violates our guidelines</li>
                <li>Permission to use your content for promotional purposes with proper attribution</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Prohibited Uses</h2>
            <div className="text-gray-600 mb-6">
              <p className="mb-3">You may not use our service to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Upload illegal, harmful, or infringing content</li>
                <li>Impersonate others or provide false information</li>
                <li>Spam, harass, or abuse other users</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Use the service for any commercial purpose without permission</li>
                <li>Violate any applicable laws or regulations</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Intellectual Property</h2>
            <p className="text-gray-600 mb-6">
              The Zentho platform, including its design, functionality, and content (excluding user-generated content), 
              is owned by us and protected by copyright, trademark, and other intellectual property laws. 
              You may not copy, modify, or distribute our platform without permission.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Privacy</h2>
            <p className="text-gray-600 mb-6">
              Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect 
              your information when you use our service. By using Zentho, you agree to the collection and 
              use of information in accordance with our Privacy Policy.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Payments and Subscriptions</h2>
            <div className="text-gray-600 mb-6">
              <p className="mb-3">For paid services:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>All fees are non-refundable unless otherwise stated</li>
                <li>Subscriptions automatically renew unless cancelled</li>
                <li>Price changes will be communicated with 30 days notice</li>
                <li>Failed payments may result in service suspension</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Service Availability</h2>
            <p className="text-gray-600 mb-6">
              We strive to maintain high service availability but cannot guarantee uninterrupted access. 
              We may temporarily suspend service for maintenance, updates, or other operational reasons. 
              We are not liable for any losses resulting from service interruptions.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Termination</h2>
            <p className="text-gray-600 mb-6">
              We may terminate or suspend your account at any time for violations of these terms. 
              You may terminate your account at any time through your account settings. 
              Upon termination, your right to use the service will cease immediately.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Disclaimer of Warranties</h2>
            <p className="text-gray-600 mb-6">
              The service is provided "as is" without warranties of any kind. We disclaim all warranties, 
              express or implied, including but not limited to merchantability, fitness for a particular purpose, 
              and non-infringement.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Limitation of Liability</h2>
            <p className="text-gray-600 mb-6">
              To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, 
              special, or consequential damages arising from your use of the service. Our total liability 
              shall not exceed the amount you paid for the service in the past 12 months.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Changes to Terms</h2>
            <p className="text-gray-600 mb-6">
              We reserve the right to modify these terms at any time. We will notify users of significant 
              changes via email or platform notification. Continued use of the service after changes 
              constitutes acceptance of the new terms.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Contact Information</h2>
            <p className="text-gray-600 mb-6">
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <div className="bg-gray-50 rounded-lg p-4 text-gray-600">
              <p>Email: legal@zentho.com</p>
              <p>Address: 123 Creative Street, San Francisco, CA 94102</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
