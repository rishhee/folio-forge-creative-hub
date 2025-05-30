
import React, { useState, useEffect } from 'react';
import { User, Send, MoreVertical } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

interface Comment {
  id: string;
  author: string;
  authorAvatar?: string;
  content: string;
  createdAt: string;
  likes: number;
  replies?: Comment[];
}

interface CommentSectionProps {
  projectId: string;
  isOpen: boolean;
  onClose: () => void;
}

const CommentSection: React.FC<CommentSectionProps> = ({ projectId, isOpen, onClose }) => {
  const { user } = useAuth();
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isOpen) {
      loadComments();
    }
  }, [projectId, isOpen]);

  const loadComments = async () => {
    setLoading(true);
    try {
      // Mock comments data
      const mockComments: Comment[] = [
        {
          id: '1',
          author: 'Sarah Chen',
          authorAvatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face',
          content: 'This is absolutely stunning! The color palette is perfect.',
          createdAt: '2024-03-20T10:30:00Z',
          likes: 5,
        },
        {
          id: '2',
          author: 'Marcus Rodriguez',
          authorAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face',
          content: 'Love the attention to detail in the typography. Great work!',
          createdAt: '2024-03-20T09:15:00Z',
          likes: 3,
        },
      ];
      setComments(mockComments);
    } catch (error) {
      console.error('Failed to load comments:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmitComment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
      alert('Please sign in to comment');
      return;
    }
    if (!newComment.trim()) return;

    const comment: Comment = {
      id: Date.now().toString(),
      author: user.name,
      authorAvatar: user.avatar,
      content: newComment.trim(),
      createdAt: new Date().toISOString(),
      likes: 0,
    };

    setComments(prev => [comment, ...prev]);
    setNewComment('');

    // In a real app, you would send this to your API
    try {
      console.log('Posting comment:', comment);
    } catch (error) {
      console.error('Failed to post comment:', error);
    }
  };

  const formatTimeAgo = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60));
    
    if (diffInMinutes < 1) return 'just now';
    if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
    if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)}h ago`;
    return `${Math.floor(diffInMinutes / 1440)}d ago`;
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg w-full max-w-2xl max-h-[80vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Comments</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            ✕
          </button>
        </div>

        {/* Comments List */}
        <div className="flex-1 overflow-y-auto p-6">
          {loading ? (
            <div className="space-y-4">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="flex space-x-3 animate-pulse">
                  <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                  <div className="flex-1">
                    <div className="h-4 bg-gray-200 rounded w-1/4 mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : comments.length > 0 ? (
            <div className="space-y-6">
              {comments.map((comment) => (
                <div key={comment.id} className="flex space-x-3">
                  <div className="flex-shrink-0">
                    {comment.authorAvatar ? (
                      <img 
                        src={comment.authorAvatar} 
                        alt={comment.author}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                    ) : (
                      <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                        <User className="w-5 h-5 text-purple-600" />
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="font-medium text-gray-900">{comment.author}</span>
                      <span className="text-xs text-gray-500">{formatTimeAgo(comment.createdAt)}</span>
                    </div>
                    <p className="text-gray-700 mb-2">{comment.content}</p>
                    <div className="flex items-center space-x-4 text-sm">
                      <button className="text-gray-500 hover:text-red-600 transition-colors">
                        ♥ {comment.likes}
                      </button>
                      <button className="text-gray-500 hover:text-purple-600 transition-colors">
                        Reply
                      </button>
                      <button className="text-gray-500 hover:text-gray-700 transition-colors">
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <MessageCircle className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 mb-2">No comments yet</p>
              <p className="text-sm text-gray-400">Be the first to share your thoughts!</p>
            </div>
          )}
        </div>

        {/* Comment Form */}
        <div className="border-t border-gray-200 p-6">
          {user ? (
            <form onSubmit={handleSubmitComment} className="flex space-x-3">
              <div className="flex-shrink-0">
                {user.avatar ? (
                  <img 
                    src={user.avatar} 
                    alt={user.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 text-purple-600" />
                  </div>
                )}
              </div>
              <div className="flex-1 flex space-x-3">
                <input
                  type="text"
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="Add a comment..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                <button
                  type="submit"
                  disabled={!newComment.trim()}
                  className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          ) : (
            <div className="text-center py-4">
              <p className="text-gray-500 mb-4">Sign in to join the conversation</p>
              <button
                onClick={() => window.location.href = '/auth'}
                className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              >
                Sign In
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CommentSection;
