
import React, { useState } from 'react';
import { Search, ChevronDown, ChevronUp, MessageCircle, Mail, Phone } from 'lucide-react';

const Help = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: 'How do I create my first portfolio?',
      answer: 'Creating your first portfolio is easy! Click on "Create Portfolio" in the top navigation, choose a template, and start adding your projects. You can customize colors, fonts, and layouts to match your style.',
    },
    {
      question: 'Can I use my own custom domain?',
      answer: 'Yes! With our Pro plan, you can connect your own custom domain. Go to Settings > Domain and follow the instructions to set up your custom URL.',
    },
    {
      question: 'How do I make my portfolio private?',
      answer: 'You can control your portfolio visibility in the Privacy settings. Choose between Public (visible to everyone), Unlisted (only accessible via direct link), or Private (password protected).',
    },
    {
      question: 'What file formats can I upload?',
      answer: 'We support most common image formats (JPG, PNG, GIF, WebP), videos (MP4, WebM), and documents (PDF). Each file can be up to 50MB on the free plan and 200MB on Pro plans.',
    },
    {
      question: 'How do I collaborate with other users?',
      answer: 'You can invite collaborators to your projects by going to Project Settings > Collaborators. They can comment, suggest edits, or co-manage your portfolio depending on the permissions you set.',
    },
    {
      question: 'Can I export my portfolio?',
      answer: 'Yes! Pro users can export their portfolios as static HTML files or PDF presentations. This feature is available in Portfolio Settings > Export.',
    },
    {
      question: 'How do I get featured in the community?',
      answer: 'Create high-quality, original work and engage with the community. Our team regularly reviews portfolios for featuring. Make sure your work is properly tagged and has good descriptions.',
    },
    {
      question: 'What analytics are available?',
      answer: 'Track views, likes, comments, and visitor demographics in your Dashboard. Pro users get advanced analytics including traffic sources, device types, and detailed engagement metrics.',
    },
  ];

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Help & FAQs</h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Find answers to common questions and get the help you need to make the most of Zentho.
          </p>
          <div className="max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for help..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Help Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Quick Help</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Getting Started</h3>
              <p className="text-gray-600 mb-4">Learn the basics of creating and customizing your portfolio.</p>
              <button className="text-purple-600 hover:text-purple-700 font-medium">Learn More →</button>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Account & Billing</h3>
              <p className="text-gray-600 mb-4">Manage your subscription, payments, and account settings.</p>
              <button className="text-blue-600 hover:text-blue-700 font-medium">Learn More →</button>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Technical Support</h3>
              <p className="text-gray-600 mb-4">Get help with technical issues and troubleshooting.</p>
              <button className="text-green-600 hover:text-green-700 font-medium">Get Support →</button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {filteredFaqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="font-medium text-gray-900">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {filteredFaqs.length === 0 && (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">No results found</h3>
              <p className="text-gray-500">Try searching with different keywords or browse our help categories.</p>
            </div>
          )}
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Still need help?</h2>
            <p className="text-xl text-purple-100 mb-8">
              Our support team is here to help you with any questions or issues.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors">
                Contact Support
              </button>
              <button className="px-6 py-3 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-600 transition-colors">
                Join Community
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Help;
