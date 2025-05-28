
import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Heart, Eye, MessageCircle, Share2, ArrowLeft } from 'lucide-react';
import { mockAPI, Project } from '../services/api';
import { useAuth } from '../contexts/AuthContext';

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [liked, setLiked] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (id) {
      loadProject(id);
    }
  }, [id]);

  const loadProject = async (projectId: string) => {
    setLoading(true);
    try {
      const data = await mockAPI.getProject(projectId);
      setProject(data);
    } catch (error) {
      console.error('Failed to load project:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLike = () => {
    if (!user) {
      navigate('/auth');
      return;
    }
    setLiked(!liked);
    // In real app, this would update the backend
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: project?.title,
        text: project?.description,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      // Show toast notification
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-32 mb-6"></div>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-96 bg-gray-200"></div>
              <div className="p-8">
                <div className="h-8 bg-gray-200 rounded mb-4"></div>
                <div className="h-4 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-2/3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-xl shadow-lg p-12">
            <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-gray-500 text-2xl">❌</span>
            </div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Project Not Found</h2>
            <p className="text-gray-600 mb-6">The project you're looking for doesn't exist.</p>
            <Link 
              to="/" 
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Explore
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-600 hover:text-purple-600 mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </button>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Image Gallery */}
          <div className="relative">
            <img 
              src={project.images[currentImageIndex]} 
              alt={project.title}
              className="w-full h-96 object-cover"
            />
            {project.images.length > 1 && (
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {project.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>

          <div className="p-8">
            {/* Project Header */}
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
              <div className="flex-1">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">{project.title}</h1>
                
                {/* Author Info */}
                <div className="flex items-center mb-4">
                  {project.authorAvatar && (
                    <img 
                      src={project.authorAvatar} 
                      alt={project.author}
                      className="w-12 h-12 rounded-full mr-3"
                    />
                  )}
                  <div>
                    <Link 
                      to={`/users/${project.authorId}`}
                      className="text-lg font-semibold text-gray-900 hover:text-purple-600 transition-colors"
                    >
                      {project.author}
                    </Link>
                    <p className="text-gray-600">Designer</p>
                  </div>
                </div>

                {/* Categories and Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-purple-100 text-purple-600 text-sm font-medium rounded-full">
                    {project.category}
                  </span>
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center space-x-4">
                <button
                  onClick={handleLike}
                  className={`flex items-center px-4 py-2 rounded-lg font-medium transition-all ${
                    liked 
                      ? 'bg-red-100 text-red-600' 
                      : 'bg-gray-100 text-gray-600 hover:bg-red-100 hover:text-red-600'
                  }`}
                >
                  <Heart className={`w-4 h-4 mr-2 ${liked ? 'fill-current' : ''}`} />
                  {project.likes + (liked ? 1 : 0)}
                </button>
                <button
                  onClick={handleShare}
                  className="flex items-center px-4 py-2 bg-gray-100 text-gray-600 hover:bg-purple-100 hover:text-purple-600 rounded-lg font-medium transition-all"
                >
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </button>
              </div>
            </div>

            {/* Project Description */}
            <div className="prose max-w-none mb-8">
              <p className="text-gray-700 text-lg leading-relaxed">{project.description}</p>
            </div>

            {/* Stats */}
            <div className="flex items-center space-x-8 text-gray-600 border-t border-gray-200 pt-6">
              <div className="flex items-center">
                <Eye className="w-5 h-5 mr-2" />
                <span>{project.views} views</span>
              </div>
              <div className="flex items-center">
                <Heart className="w-5 h-5 mr-2" />
                <span>{project.likes} likes</span>
              </div>
              <div className="flex items-center">
                <MessageCircle className="w-5 h-5 mr-2" />
                <span>{project.comments} comments</span>
              </div>
              <div className="text-sm">
                Published {new Date(project.createdAt).toLocaleDateString()}
              </div>
            </div>
          </div>
        </div>

        {/* Additional Images */}
        {project.images.length > 1 && (
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.images.slice(1).map((image, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <img 
                  src={image} 
                  alt={`${project.title} - Image ${index + 2}`}
                  className="w-full h-64 object-cover"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetails;
