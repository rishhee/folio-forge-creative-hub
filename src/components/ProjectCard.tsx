
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Project } from '../services/api';
import InteractionBar from './InteractionBar';
import CommentSection from './CommentSection';
import { useInteractions } from '../hooks/useInteractions';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [showComments, setShowComments] = useState(false);
  const { incrementView } = useInteractions(project.id);

  useEffect(() => {
    // Record view when card is viewed
    const timer = setTimeout(() => {
      incrementView();
    }, 1000); // Record view after 1 second

    return () => clearTimeout(timer);
  }, []);

  const handleCommentClick = () => {
    setShowComments(true);
  };

  return (
    <>
      <div className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
        <Link to={`/projects/${project.id}`}>
          <div className="aspect-w-16 aspect-h-12 overflow-hidden">
            <img 
              src={project.images[0]} 
              alt={project.title}
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
            />
          </div>
        </Link>
        
        <div className="p-6">
          <Link to={`/projects/${project.id}`}>
            <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
              {project.title}
            </h3>
          </Link>
          
          <div className="flex items-center mb-3">
            {project.authorAvatar && (
              <img 
                src={project.authorAvatar} 
                alt={project.author}
                className="w-8 h-8 rounded-full mr-2"
              />
            )}
            <span className="text-gray-600">by {project.author}</span>
          </div>
          
          <div className="flex items-center space-x-2 mb-4">
            <span className="px-2 py-1 bg-purple-100 text-purple-600 text-xs font-medium rounded-full">
              {project.category}
            </span>
            {project.featured && (
              <span className="px-2 py-1 bg-yellow-100 text-yellow-600 text-xs font-medium rounded-full">
                Featured
              </span>
            )}
          </div>
          
          <InteractionBar 
            projectId={project.id}
            onCommentClick={handleCommentClick}
            size="small"
          />
        </div>
      </div>

      <CommentSection
        projectId={project.id}
        isOpen={showComments}
        onClose={() => setShowComments(false)}
      />
    </>
  );
};

export default ProjectCard;
