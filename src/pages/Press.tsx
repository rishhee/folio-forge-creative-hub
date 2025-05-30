
import React from 'react';
import { Calendar, ExternalLink, Download } from 'lucide-react';

const Press = () => {
  const pressReleases = [
    {
      title: 'Zentho Raises $10M Series A to Revolutionize Creative Portfolios',
      date: '2024-03-15',
      excerpt: 'Leading creative platform secures funding to expand global reach and introduce AI-powered portfolio optimization.',
      link: '#',
    },
    {
      title: 'Zentho Launches Community Features for Creative Collaboration',
      date: '2024-02-28',
      excerpt: 'New tools enable designers and artists to connect, collaborate, and share feedback on projects.',
      link: '#',
    },
    {
      title: 'Zentho Reaches 50,000 Active Creative Professionals',
      date: '2024-01-20',
      excerpt: 'Platform celebrates major milestone as creative community continues to grow globally.',
      link: '#',
    },
  ];

  const coverage = [
    {
      outlet: 'TechCrunch',
      title: 'How Zentho is Changing the Portfolio Game',
      date: '2024-03-20',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=300&h=200&fit=crop',
    },
    {
      outlet: 'Design Week',
      title: 'The Future of Creative Showcasing',
      date: '2024-03-10',
      image: 'https://images.unsplash.com/photo-1611605698335-8b1569810432?w=300&h=200&fit=crop',
    },
    {
      outlet: 'Creative Bloq',
      title: 'Top Portfolio Platforms for 2024',
      date: '2024-02-25',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=300&h=200&fit=crop',
    },
  ];

  const assets = [
    {
      name: 'Zentho Logo Package',
      type: 'ZIP',
      size: '2.5 MB',
    },
    {
      name: 'Brand Guidelines',
      type: 'PDF',
      size: '1.8 MB',
    },
    {
      name: 'Press Kit',
      type: 'ZIP',
      size: '5.2 MB',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Press & Media</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Get the latest news, updates, and media resources about Zentho and 
            our mission to empower creative professionals worldwide.
          </p>
        </div>
      </section>

      {/* Press Releases */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Latest Press Releases</h2>
          <div className="space-y-8">
            {pressReleases.map((release) => (
              <div key={release.title} className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{release.title}</h3>
                    <div className="flex items-center text-gray-600 mb-4">
                      <Calendar className="w-4 h-4 mr-2" />
                      {new Date(release.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </div>
                    <p className="text-gray-600 mb-4">{release.excerpt}</p>
                  </div>
                  <a 
                    href={release.link}
                    className="flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors ml-6"
                  >
                    Read More
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Coverage */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">In the News</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coverage.map((article) => (
              <div key={article.title} className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="text-sm text-purple-600 font-medium mb-2">{article.outlet}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{article.title}</h3>
                  <div className="flex items-center text-gray-600 text-sm">
                    <Calendar className="w-4 h-4 mr-2" />
                    {new Date(article.date).toLocaleDateString()}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Press Kit */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-900 rounded-2xl p-12 text-white">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Press Kit & Brand Assets</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Download our logo, brand guidelines, and other media assets for your coverage.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {assets.map((asset) => (
                <div key={asset.name} className="bg-gray-800 rounded-lg p-6 text-center">
                  <div className="w-16 h-16 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Download className="w-8 h-8" />
                  </div>
                  <h3 className="font-semibold mb-2">{asset.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">{asset.type} • {asset.size}</p>
                  <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                    Download
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Media Inquiries</h2>
          <p className="text-lg text-gray-600 mb-8">
            For press inquiries, interviews, or additional information, please contact our media team.
          </p>
          <div className="bg-gray-50 rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Press Contact</h3>
                <p className="text-gray-600">Sarah Martinez</p>
                <p className="text-gray-600">Head of Communications</p>
                <p className="text-purple-600">press@zentho.com</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">General Inquiries</h3>
                <p className="text-gray-600">For general questions</p>
                <p className="text-gray-600">and partnership opportunities</p>
                <p className="text-purple-600">hello@zentho.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Press;
