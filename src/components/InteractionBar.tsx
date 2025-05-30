
import React from 'react';
import { Heart, Eye, MessageCircle, Share2 } from 'lucide-react';
import { useInteractions } from '../hooks/useInteractions';

interface InteractionBarProps {
  projectId: string;
  onCommentClick?: () => void;
  showLabels?: boolean;
  size?: 'small' | 'medium' | 'large';
}

const InteractionBar: React.FC<InteractionBarProps> = ({ 
  projectId, 
  onCommentClick,
  showLabels = true,
  size = 'medium'
}) => {
  const { interactions, loading, toggleLike } = useInteractions(projectId);

  const sizeClasses = {
    small: 'text-sm',
    medium: 'text-base',
    large: 'text-lg',
  };

  const iconSizes = {
    small: 'w-4 h-4',
    medium: 'w-5 h-5',
    large: 'w-6 h-6',
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Check out this project',
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  if (loading) {
    return (
      <div className="flex items-center space-x-6">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center space-x-2">
            <div className="w-5 h-5 bg-gray-200 rounded animate-pulse"></div>
            {showLabels && <div className="w-8 h-4 bg-gray-200 rounded animate-pulse"></div>}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={`flex items-center space-x-6 ${sizeClasses[size]}`}>
      <button
        onClick={toggleLike}
        className={`flex items-center space-x-2 transition-colors ${
          interactions.userLiked 
            ? 'text-red-600 hover:text-red-700' 
            : 'text-gray-600 hover:text-red-600'
        }`}
      >
        <Heart className={`${iconSizes[size]} ${interactions.userLiked ? 'fill-current' : ''}`} />
        {showLabels && <span>{interactions.likes}</span>}
      </button>

      <div className="flex items-center space-x-2 text-gray-600">
        <Eye className={iconSizes[size]} />
        {showLabels && <span>{interactions.views}</span>}
      </div>

      <button
        onClick={onCommentClick}
        className="flex items-center space-x-2 text-gray-600 hover:text-purple-600 transition-colors"
      >
        <MessageCircle className={iconSizes[size]} />
        {showLabels && <span>{interactions.comments}</span>}
      </button>

      <button
        onClick={handleShare}
        className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors"
      >
        <Share2 className={iconSizes[size]} />
        {showLabels && size !== 'small' && <span>Share</span>}
      </button>
    </div>
  );
};

export default InteractionBar;
