
import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Eye, MessageCircle } from 'lucide-react';
import { Project } from '../services/api';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Link 
      to={`/projects/${project.id}`}
      className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
    >
      <div className="aspect-w-16 aspect-h-12 overflow-hidden">
        <img 
          src={project.images[0]} 
          alt={project.title}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
          {project.title}
        </h3>
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
        <div className="flex items-center space-x-2 mb-3">
          <span className="px-2 py-1 bg-purple-100 text-purple-600 text-xs font-medium rounded-full">
            {project.category}
          </span>
          {project.featured && (
            <span className="px-2 py-1 bg-yellow-100 text-yellow-600 text-xs font-medium rounded-full">
              Featured
            </span>
          )}
        </div>
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span className="flex items-center">
            <Heart className="w-4 h-4 mr-1 text-red-500" />
            {project.likes}
          </span>
          <span className="flex items-center">
            <Eye className="w-4 h-4 mr-1" />
            {project.views}
          </span>
          <span className="flex items-center">
            <MessageCircle className="w-4 h-4 mr-1" />
            {project.comments}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
