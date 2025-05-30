
import { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';

interface ProjectInteractions {
  likes: number;
  views: number;
  comments: number;
  userLiked: boolean;
  userViewed: boolean;
}

export const useInteractions = (projectId: string) => {
  const { user } = useAuth();
  const [interactions, setInteractions] = useState<ProjectInteractions>({
    likes: 0,
    views: 0,
    comments: 0,
    userLiked: false,
    userViewed: false,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadInteractions();
  }, [projectId, user]);

  const loadInteractions = async () => {
    setLoading(true);
    try {
      // Simulate API call to get interactions
      const response = await fetch(`/api/projects/${projectId}/interactions`);
      if (response.ok) {
        const data = await response.json();
        setInteractions(data);
      } else {
        // Mock data for development
        setInteractions({
          likes: Math.floor(Math.random() * 100),
          views: Math.floor(Math.random() * 500),
          comments: Math.floor(Math.random() * 20),
          userLiked: false,
          userViewed: false,
        });
      }
    } catch (error) {
      console.error('Failed to load interactions:', error);
      // Mock data fallback
      setInteractions({
        likes: Math.floor(Math.random() * 100),
        views: Math.floor(Math.random() * 500),
        comments: Math.floor(Math.random() * 20),
        userLiked: false,
        userViewed: false,
      });
    } finally {
      setLoading(false);
    }
  };

  const toggleLike = async () => {
    if (!user) {
      alert('Please sign in to like projects');
      return;
    }

    const newLiked = !interactions.userLiked;
    const newLikes = newLiked ? interactions.likes + 1 : interactions.likes - 1;

    // Optimistic update
    setInteractions(prev => ({
      ...prev,
      userLiked: newLiked,
      likes: newLikes,
    }));

    try {
      const response = await fetch(`/api/projects/${projectId}/like`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ liked: newLiked }),
      });

      if (!response.ok) {
        // Revert on error
        setInteractions(prev => ({
          ...prev,
          userLiked: !newLiked,
          likes: !newLiked ? prev.likes + 1 : prev.likes - 1,
        }));
      }
    } catch (error) {
      console.error('Failed to toggle like:', error);
      // Revert on error
      setInteractions(prev => ({
        ...prev,
        userLiked: !newLiked,
        likes: !newLiked ? prev.likes + 1 : prev.likes - 1,
      }));
    }
  };

  const incrementView = async () => {
    if (interactions.userViewed) return;

    // Optimistic update
    setInteractions(prev => ({
      ...prev,
      views: prev.views + 1,
      userViewed: true,
    }));

    try {
      await fetch(`/api/projects/${projectId}/view`, {
        method: 'POST',
      });
    } catch (error) {
      console.error('Failed to record view:', error);
    }
  };

  const addComment = async (comment: string) => {
    if (!user) {
      alert('Please sign in to comment');
      return null;
    }

    try {
      const response = await fetch(`/api/projects/${projectId}/comments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ comment }),
      });

      if (response.ok) {
        const newComment = await response.json();
        setInteractions(prev => ({
          ...prev,
          comments: prev.comments + 1,
        }));
        return newComment;
      }
    } catch (error) {
      console.error('Failed to add comment:', error);
    }
    return null;
  };

  return {
    interactions,
    loading,
    toggleLike,
    incrementView,
    addComment,
  };
};
