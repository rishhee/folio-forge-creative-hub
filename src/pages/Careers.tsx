
import React from 'react';
import { MapPin, Clock, Users, ArrowRight } from 'lucide-react';

const Careers = () => {
  const jobs = [
    {
      title: 'Senior Frontend Developer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      description: 'Build beautiful and performant user interfaces for our creative platform.',
      requirements: ['5+ years React experience', 'TypeScript expertise', 'Design system experience'],
    },
    {
      title: 'Product Designer',
      department: 'Design',
      location: 'San Francisco, CA',
      type: 'Full-time',
      description: 'Shape the future of creative portfolios with innovative design solutions.',
      requirements: ['3+ years product design', 'Figma expertise', 'User research experience'],
    },
    {
      title: 'Marketing Manager',
      department: 'Marketing',
      location: 'New York, NY',
      type: 'Full-time',
      description: 'Drive growth and brand awareness in the creative community.',
      requirements: ['Digital marketing experience', 'Creative industry knowledge', 'Data-driven mindset'],
    },
  ];

  const benefits = [
    'Competitive salary and equity',
    'Comprehensive health insurance',
    'Flexible working hours',
    'Remote work options',
    'Professional development budget',
    'Creative workspace',
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Join Our Team</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Help us build the future of creative portfolios and empower millions of 
            creative professionals worldwide.
          </p>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Culture</h2>
              <p className="text-lg text-gray-600 mb-6">
                We foster an environment of creativity, collaboration, and continuous learning. 
                Our team is passionate about design, technology, and making a meaningful impact 
                in the creative industry.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Users className="w-5 h-5 text-purple-600 mr-3" />
                  <span>Collaborative and inclusive environment</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-purple-600 mr-3" />
                  <span>Work-life balance priority</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-purple-600 mr-3" />
                  <span>Remote-first with global team</span>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop"
                alt="Team working together"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Open Positions</h2>
          <div className="space-y-6">
            {jobs.map((job) => (
              <div key={job.title} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
                      <span className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {job.department}
                      </span>
                      <span className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {job.location}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {job.type}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-3">{job.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {job.requirements.map((req) => (
                        <span key={req} className="px-2 py-1 bg-purple-100 text-purple-600 text-xs rounded-full">
                          {req}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-4 lg:mt-0 lg:ml-6">
                    <button className="flex items-center px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                      Apply Now
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Join Zentho?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit) => (
              <div key={benefit} className="bg-white rounded-lg p-6 shadow-lg text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-purple-600 text-xl">✓</span>
                </div>
                <p className="font-medium text-gray-900">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
