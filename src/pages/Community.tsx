import React, { useState, useEffect } from 'react';
import { MessageCircle, Trophy, Users, Plus, Search, Filter, Heart, Eye, TrendingUp, Calendar } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Textarea } from '../components/ui/textarea';

interface Discussion {
  id: string;
  title: string;
  content: string;
  author: string;
  authorAvatar?: string;
  category: 'general' | 'feedback' | 'showcase' | 'question';
  likes: number;
  replies: number;
  views: number;
  createdAt: string;
  trending: boolean;
}

interface Challenge {
  id: string;
  title: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  deadline: string;
  participants: number;
  prize: string;
  tags: string[];
}

const Community = () => {
  const { user, profile } = useAuth();
  const [activeTab, setActiveTab] = useState<'discussions' | 'challenges' | 'network'>('discussions');
  const [discussions, setDiscussions] = useState<Discussion[]>([]);
  const [challenges, setChallenges] = useState<Challenge[]>([]);
  const [newPost, setNewPost] = useState('');
  const [newPostTitle, setNewPostTitle] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'general' | 'feedback' | 'showcase' | 'question'>('general');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterBy, setFilterBy] = useState<'trending' | 'recent' | 'popular'>('trending');

  useEffect(() => {
    loadCommunityData();
  }, []);

  const loadCommunityData = () => {
    // Mock discussions data
    const mockDiscussions: Discussion[] = [
      {
        id: '1',
        title: 'Best practices for mobile-first design',
        content: 'What are your thoughts on designing mobile-first vs desktop-first? I\'ve been experimenting with different approaches...',
        author: profile?.name || user.email || 'Unknown',
        authorAvatar: profile?.avatar_url,
        category: 'question',
        likes: 24,
        replies: 12,
        views: 156,
        createdAt: '2024-03-20T10:30:00Z',
        trending: true
      },
      {
        id: '2',
        title: 'Just launched my new portfolio website!',
        content: 'After months of work, I finally launched my new portfolio. Would love to get some feedback from the community...',
        author: profile?.name || user.email || 'Unknown',
        authorAvatar: profile?.avatar_url,
        category: 'showcase',
        likes: 18,
        replies: 8,
        views: 89,
        createdAt: '2024-03-20T09:15:00Z',
        trending: false
      },
      {
        id: '3',
        title: 'Color theory for UI designers',
        content: 'Sharing some insights about color psychology in digital design. Colors can dramatically impact user behavior...',
        author: profile?.name || user.email || 'Unknown',
        category: 'general',
        likes: 31,
        replies: 15,
        views: 203,
        createdAt: '2024-03-19T15:45:00Z',
        trending: true
      }
    ];

    // Mock challenges data
    const mockChallenges: Challenge[] = [
      {
        id: '1',
        title: 'Weekly Design Challenge: E-commerce Homepage',
        description: 'Design a modern e-commerce homepage that showcases products effectively while maintaining excellent UX.',
        difficulty: 'intermediate',
        deadline: '2024-03-27',
        participants: 45,
        prize: '$500 + Featured on Homepage',
        tags: ['UI/UX', 'E-commerce', 'Web Design']
      },
      {
        id: '2',
        title: 'Mobile App Icon Challenge',
        description: 'Create a stunning app icon for a productivity app. Focus on clarity, uniqueness, and scalability.',
        difficulty: 'beginner',
        deadline: '2024-03-25',
        participants: 78,
        prize: '$200 + Portfolio Feature',
        tags: ['Icon Design', 'Mobile', 'Branding']
      },
      {
        id: '3',
        title: 'Advanced Animation Challenge',
        description: 'Create complex micro-interactions for a dashboard interface. Show your animation skills!',
        difficulty: 'advanced',
        deadline: '2024-03-30',
        participants: 23,
        prize: '$1000 + Mentorship Session',
        tags: ['Animation', 'Interaction Design', 'Dashboard']
      }
    ];

    setDiscussions(mockDiscussions);
    setChallenges(mockChallenges);
  };

  const handleCreatePost = () => {
    if (!user) {
      alert('Please sign in to create a post');
      return;
    }
    if (!newPostTitle.trim() || !newPost.trim()) return;

    const newDiscussion: Discussion = {
      id: Date.now().toString(),
      title: newPostTitle.trim(),
      content: newPost.trim(),
      author: profile?.name || user.email || 'Unknown',
      authorAvatar: profile?.avatar_url,
      category: selectedCategory,
      likes: 0,
      replies: 0,
      views: 0,
      createdAt: new Date().toISOString(),
      trending: false
    };

    setDiscussions(prev => [newDiscussion, ...prev]);
    setNewPost('');
    setNewPostTitle('');
  };

  const formatTimeAgo = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return 'just now';
    if (diffInHours < 24) return `${diffInHours}h ago`;
    return `${Math.floor(diffInHours / 24)}d ago`;
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      general: 'bg-blue-100 text-blue-700',
      feedback: 'bg-green-100 text-green-700',
      showcase: 'bg-purple-100 text-purple-700',
      question: 'bg-orange-100 text-orange-700'
    };
    return colors[category as keyof typeof colors] || colors.general;
  };

  const getDifficultyColor = (difficulty: string) => {
    const colors = {
      beginner: 'bg-green-100 text-green-700',
      intermediate: 'bg-yellow-100 text-yellow-700',
      advanced: 'bg-red-100 text-red-700'
    };
    return colors[difficulty as keyof typeof colors] || colors.beginner;
  };

  const filteredDiscussions = discussions
    .filter(discussion => 
      discussion.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      discussion.content.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (filterBy === 'trending') return Number(b.trending) - Number(a.trending);
      if (filterBy === 'popular') return b.likes - a.likes;
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    });

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Community
          </h1>
          <p className="text-xl text-gray-600">Connect, learn, and grow with fellow creatives</p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {[
            { key: 'discussions', label: 'Discussions', icon: MessageCircle },
            { key: 'challenges', label: 'Challenges', icon: Trophy },
            { key: 'network', label: 'Network', icon: Users }
          ].map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              onClick={() => setActiveTab(key as any)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all ${
                activeTab === key
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-purple-50 hover:text-purple-600'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span>{label}</span>
            </button>
          ))}
        </div>

        {/* Discussions Tab */}
        {activeTab === 'discussions' && (
          <div className="space-y-6">
            {/* Search and Filter */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search discussions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <select
                value={filterBy}
                onChange={(e) => setFilterBy(e.target.value as any)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="trending">Trending</option>
                <option value="recent">Recent</option>
                <option value="popular">Popular</option>
              </select>
            </div>

            {/* Create New Post */}
            {user && (
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle className="text-lg">Start a Discussion</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <input
                    type="text"
                    placeholder="Discussion title..."
                    value={newPostTitle}
                    onChange={(e) => setNewPostTitle(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                  <Textarea
                    placeholder="What's on your mind?"
                    value={newPost}
                    onChange={(e) => setNewPost(e.target.value)}
                    className="min-h-[100px]"
                  />
                  <div className="flex justify-between items-center">
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value as any)}
                      className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    >
                      <option value="general">General</option>
                      <option value="feedback">Feedback</option>
                      <option value="showcase">Showcase</option>
                      <option value="question">Question</option>
                    </select>
                    <Button onClick={handleCreatePost} disabled={!newPostTitle.trim() || !newPost.trim()}>
                      <Plus className="w-4 h-4 mr-2" />
                      Post
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Discussions List */}
            <div className="space-y-4">
              {filteredDiscussions.map((discussion) => (
                <Card key={discussion.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        {discussion.authorAvatar ? (
                          <img 
                            src={discussion.authorAvatar} 
                            alt={discussion.author}
                            className="w-12 h-12 rounded-full object-cover"
                          />
                        ) : (
                          <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                            <Users className="w-6 h-6 text-purple-600" />
                          </div>
                        )}
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          {discussion.trending && (
                            <TrendingUp className="w-4 h-4 text-orange-500" />
                          )}
                          <span className={`px-2 py-1 text-xs font-medium rounded-full ${getCategoryColor(discussion.category)}`}>
                            {discussion.category}
                          </span>
                          <span className="text-sm text-gray-500">•</span>
                          <span className="text-sm text-gray-500">{formatTimeAgo(discussion.createdAt)}</span>
                        </div>
                        
                        <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-purple-600 cursor-pointer">
                          {discussion.title}
                        </h3>
                        
                        <p className="text-gray-600 mb-4 line-clamp-2">{discussion.content}</p>
                        
                        <div className="flex items-center space-x-2 text-sm text-gray-500">
                          <span className="font-medium">{discussion.author}</span>
                          <span>•</span>
                          <div className="flex items-center space-x-4">
                            <span className="flex items-center space-x-1">
                              <Heart className="w-4 h-4" />
                              <span>{discussion.likes}</span>
                            </span>
                            <span className="flex items-center space-x-1">
                              <MessageCircle className="w-4 h-4" />
                              <span>{discussion.replies}</span>
                            </span>
                            <span className="flex items-center space-x-1">
                              <Eye className="w-4 h-4" />
                              <span>{discussion.views}</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Challenges Tab */}
        {activeTab === 'challenges' && (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Design Challenges</h2>
              <p className="text-gray-600">Test your skills and win amazing prizes</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {challenges.map((challenge) => (
                <Card key={challenge.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getDifficultyColor(challenge.difficulty)}`}>
                        {challenge.difficulty}
                      </span>
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(challenge.deadline).toLocaleDateString()}
                      </div>
                    </div>
                    <CardTitle className="text-lg">{challenge.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{challenge.description}</p>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {challenge.tags.map((tag, index) => (
                        <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Participants:</span>
                        <span className="font-medium">{challenge.participants}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Prize:</span>
                        <span className="font-medium text-purple-600">{challenge.prize}</span>
                      </div>
                    </div>
                    
                    <Button className="w-full">
                      Join Challenge
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Network Tab */}
        {activeTab === 'network' && (
          <div className="text-center py-12">
            <Users className="w-16 h-16 text-purple-600 mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Connect with Creatives</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Discover and connect with talented designers, developers, and creators from around the world.
              Build your professional network and collaborate on amazing projects.
            </p>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
              {[
                { name: 'Sarah Chen', role: 'UI/UX Designer', followers: '1.2K', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150' },
                { name: 'Marcus Johnson', role: 'Brand Designer', followers: '890', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150' },
                { name: 'Alex Rivera', role: 'Frontend Developer', followers: '2.1K', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150' }
              ].map((creator, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <img 
                      src={creator.avatar} 
                      alt={creator.name}
                      className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                    />
                    <h3 className="font-semibold text-gray-900 mb-1">{creator.name}</h3>
                    <p className="text-gray-600 text-sm mb-2">{creator.role}</p>
                    <p className="text-purple-600 text-sm mb-4">{creator.followers} followers</p>
                    <Button variant="outline" size="sm">
                      Follow
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Community;
