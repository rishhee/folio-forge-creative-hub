
import React, { useState } from 'react';
import { Calendar, User, ArrowRight, Search } from 'lucide-react';

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Design', 'Technology', 'Industry', 'Tips', 'Community'];

  const posts = [
    {
      title: '10 Portfolio Design Trends That Will Dominate 2024',
      excerpt: 'Discover the latest design trends that will make your portfolio stand out in the competitive creative landscape.',
      author: 'Emily Chen',
      date: '2024-03-20',
      category: 'Design',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=300&fit=crop',
      readTime: '5 min read',
    },
    {
      title: 'How AI is Transforming Creative Workflows',
      excerpt: 'Explore how artificial intelligence is revolutionizing the way creative professionals work and showcase their projects.',
      author: 'Marcus Rodriguez',
      date: '2024-03-15',
      category: 'Technology',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=300&fit=crop',
      readTime: '7 min read',
    },
    {
      title: 'Building a Personal Brand as a Creative Professional',
      excerpt: 'Learn essential strategies for developing and maintaining a strong personal brand in the creative industry.',
      author: 'Sarah Williams',
      date: '2024-03-10',
      category: 'Industry',
      image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=300&fit=crop',
      readTime: '6 min read',
    },
    {
      title: 'The Art of Storytelling Through Visual Design',
      excerpt: 'Master the fundamentals of visual storytelling to create more engaging and memorable portfolio pieces.',
      author: 'David Park',
      date: '2024-03-05',
      category: 'Tips',
      image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=600&h=300&fit=crop',
      readTime: '8 min read',
    },
    {
      title: 'Community Spotlight: Rising Stars in UX Design',
      excerpt: 'Meet the emerging UX designers who are making waves in the industry with their innovative approaches.',
      author: 'Lisa Thompson',
      date: '2024-02-28',
      category: 'Community',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=300&fit=crop',
      readTime: '4 min read',
    },
    {
      title: 'Optimizing Your Portfolio for Better Performance',
      excerpt: 'Technical tips and best practices to ensure your portfolio loads fast and provides an excellent user experience.',
      author: 'Alex Johnson',
      date: '2024-02-25',
      category: 'Technology',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=300&fit=crop',
      readTime: '6 min read',
    },
  ];

  const filteredPosts = posts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = posts[0];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Zentho Blog</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Insights, tips, and stories from the creative community. Stay updated with 
            the latest trends, techniques, and industry news.
          </p>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full font-medium transition-all ${
                    selectedCategory === category
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-purple-50 hover:text-purple-600'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Article</h2>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <img 
                src={featuredPost.image} 
                alt={featuredPost.title}
                className="w-full h-64 lg:h-full object-cover"
              />
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                  <span className="px-2 py-1 bg-purple-100 text-purple-600 rounded-full">
                    {featuredPost.category}
                  </span>
                  <span className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(featuredPost.date).toLocaleDateString()}
                  </span>
                  <span>{featuredPost.readTime}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{featuredPost.title}</h3>
                <p className="text-gray-600 mb-6">{featuredPost.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-2 text-gray-400" />
                    <span className="text-gray-600">{featuredPost.author}</span>
                  </div>
                  <button className="flex items-center text-purple-600 hover:text-purple-700 font-medium">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.slice(1).map((post) => (
              <article key={post.title} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                    <span className="px-2 py-1 bg-purple-100 text-purple-600 rounded-full text-xs">
                      {post.category}
                    </span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-purple-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center text-gray-500">
                      <User className="w-4 h-4 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center text-gray-500">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
          <p className="text-xl text-purple-100 mb-8">
            Get the latest articles and insights delivered straight to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300"
            />
            <button className="px-6 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
