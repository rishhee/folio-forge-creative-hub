
import React from 'react';
import { Link } from 'react-router-dom';

const Explore = () => {
  const featuredProjects = [
    {
      id: 1,
      title: "Mobile App Design",
      author: "Sarah Chen",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400",
      likes: 234,
      views: 1250
    },
    {
      id: 2,
      title: "Brand Identity Design",
      author: "Marcus Johnson",
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=400",
      likes: 189,
      views: 980
    },
    {
      id: 3,
      title: "Website Redesign",
      author: "Emily Rodriguez",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400",
      likes: 312,
      views: 1850
    },
    {
      id: 4,
      title: "Packaging Design",
      author: "David Kim",
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400",
      likes: 156,
      views: 720
    },
    {
      id: 5,
      title: "Logo Collection",
      author: "Anna Thompson",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
      likes: 278,
      views: 1340
    },
    {
      id: 6,
      title: "Digital Illustration",
      author: "James Wilson",
      image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=400",
      likes: 201,
      views: 890
    }
  ];

  const categories = [
    "All", "UI/UX", "Branding", "Illustration", "Photography", "Web Design", "Print", "3D"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent mb-6">
            Discover Amazing
            <br />
            Creative Work
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Explore millions of portfolios from talented designers, artists, and creative professionals worldwide.
          </p>
          <Link 
            to="/create" 
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all transform hover:scale-105 shadow-lg"
          >
            Start Creating
          </Link>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={category}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  index === 0 
                    ? 'bg-purple-600 text-white shadow-lg' 
                    : 'bg-white text-gray-700 hover:bg-purple-50 hover:text-purple-600 border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Grid */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <Link 
                key={project.id} 
                to={`/projects/${project.id}`}
                className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="aspect-w-16 aspect-h-12 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">by {project.author}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-1 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                      </svg>
                      {project.likes}
                    </span>
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      {project.views}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to showcase your work?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Join thousands of creatives sharing their portfolios on PortfolioForge
          </p>
          <Link 
            to="/create" 
            className="inline-flex items-center px-8 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-50 transition-all transform hover:scale-105 shadow-lg"
          >
            Create Your Portfolio
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Explore;
