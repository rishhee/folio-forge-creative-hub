
import React from 'react';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Last updated: March 15, 2024
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
            <div className="text-gray-600 mb-6">
              <p className="mb-3">We collect information you provide directly to us, such as when you:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Create or modify your account</li>
                <li>Upload content to your portfolio</li>
                <li>Contact us for support</li>
                <li>Subscribe to our newsletter</li>
                <li>Participate in surveys or promotions</li>
              </ul>
              <p className="mt-4">This may include your name, email address, profile information, and any content you choose to upload.</p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
            <div className="text-gray-600 mb-6">
              <p className="mb-3">We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide, maintain, and improve our services</li>
                <li>Process transactions and send related information</li>
                <li>Send technical notices and support messages</li>
                <li>Communicate with you about products, services, and events</li>
                <li>Monitor and analyze trends and usage</li>
                <li>Detect and prevent fraudulent or illegal activity</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Information Sharing</h2>
            <div className="text-gray-600 mb-6">
              <p className="mb-3">We may share your information in the following situations:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>With your consent:</strong> When you explicitly agree to share information</li>
                <li><strong>Public portfolios:</strong> Content you mark as public will be visible to other users</li>
                <li><strong>Service providers:</strong> With third-party vendors who help us operate our service</li>
                <li><strong>Legal requirements:</strong> When required by law or to protect our rights</li>
                <li><strong>Business transfers:</strong> In connection with mergers or acquisitions</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Security</h2>
            <p className="text-gray-600 mb-6">
              We implement appropriate technical and organizational measures to protect your personal information 
              against unauthorized access, alteration, disclosure, or destruction. However, no internet transmission 
              is completely secure, and we cannot guarantee absolute security.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Cookies and Tracking</h2>
            <div className="text-gray-600 mb-6">
              <p className="mb-3">We use cookies and similar technologies to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Remember your preferences and settings</li>
                <li>Understand how you use our service</li>
                <li>Improve our platform performance</li>
                <li>Provide personalized content and ads</li>
              </ul>
              <p className="mt-4">You can control cookie preferences through your browser settings.</p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Third-Party Services</h2>
            <p className="text-gray-600 mb-6">
              Our service may contain links to third-party websites or integrate with third-party services. 
              We are not responsible for the privacy practices of these external services. 
              We encourage you to review their privacy policies before providing any personal information.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Data Retention</h2>
            <p className="text-gray-600 mb-6">
              We retain your personal information for as long as necessary to provide our services, 
              comply with legal obligations, resolve disputes, and enforce our agreements. 
              When you delete your account, we will delete your personal information, 
              though some information may remain in backup copies for a limited time.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Your Rights</h2>
            <div className="text-gray-600 mb-6">
              <p className="mb-3">Depending on your location, you may have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access and receive a copy of your personal information</li>
                <li>Rectify inaccurate or incomplete information</li>
                <li>Delete your personal information</li>
                <li>Restrict or object to processing of your information</li>
                <li>Data portability</li>
                <li>Withdraw consent where applicable</li>
              </ul>
              <p className="mt-4">To exercise these rights, please contact us using the information provided below.</p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Children's Privacy</h2>
            <p className="text-gray-600 mb-6">
              Our service is not intended for children under 13 years of age. We do not knowingly collect 
              personal information from children under 13. If you become aware that a child has provided 
              us with personal information, please contact us so we can delete such information.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. International Transfers</h2>
            <p className="text-gray-600 mb-6">
              Your information may be transferred to and processed in countries other than your own. 
              These countries may have different data protection laws. We ensure appropriate safeguards 
              are in place to protect your information during such transfers.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Changes to This Policy</h2>
            <p className="text-gray-600 mb-6">
              We may update this Privacy Policy from time to time. We will notify you of any changes 
              by posting the new policy on this page and updating the "Last updated" date. 
              For significant changes, we may also send you a notification via email.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Contact Us</h2>
            <p className="text-gray-600 mb-6">
              If you have any questions about this Privacy Policy or our privacy practices, please contact us:
            </p>
            <div className="bg-gray-50 rounded-lg p-4 text-gray-600">
              <p>Email: privacy@zentho.com</p>
              <p>Address: 123 Creative Street, San Francisco, CA 94102</p>
              <p>Phone: +1 (555) 123-4567</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
