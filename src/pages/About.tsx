
import React from 'react';
import { Users, Target, Award, Globe } from 'lucide-react';

const About = () => {
  const stats = [
    { number: '50K+', label: 'Creative Professionals' },
    { number: '100K+', label: 'Projects Showcased' },
    { number: '150+', label: 'Countries Reached' },
    { number: '99%', label: 'User Satisfaction' },
  ];

  const team = [
    {
      name: 'Sarah Chen',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face',
      bio: 'Former design director at top tech companies, passionate about empowering creatives.',
    },
    {
      name: 'Marcus Rodriguez',
      role: 'CTO',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      bio: 'Full-stack engineer with 10+ years building scalable creative platforms.',
    },
    {
      name: 'Emily Watson',
      role: 'Head of Design',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
      bio: 'Award-winning designer focused on creating intuitive user experiences.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">About Zentho</h1>
            <p className="text-xl max-w-3xl mx-auto">
              We're on a mission to democratize creative showcase, making it easier for 
              talented individuals to share their work and connect with opportunities worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                At Zentho, we believe every creative professional deserves a platform 
                to showcase their talent without barriers. We're building the future of 
                creative portfolios, where design meets functionality and talent meets opportunity.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-start">
                  <Target className="w-6 h-6 text-purple-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold">Purpose-Driven</h3>
                    <p className="text-gray-600 text-sm">Empowering creatives globally</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Award className="w-6 h-6 text-purple-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold">Excellence</h3>
                    <p className="text-gray-600 text-sm">Delivering exceptional experiences</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop" 
                alt="Team collaboration"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Zentho by the Numbers
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're a diverse team of designers, engineers, and creative professionals 
              united by our passion for empowering the creative community.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.name} className="bg-white rounded-lg shadow-lg p-6 text-center">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-purple-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
