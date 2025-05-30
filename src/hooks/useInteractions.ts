
import { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { supabaseApi } from '../services/supabaseApi';

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
    if (projectId) {
      loadInteractions();
    }
  }, [projectId, user]);

  const loadInteractions = async () => {
    setLoading(true);
    try {
      const [project, userLike] = await Promise.all([
        supabaseApi.getProject(projectId),
        user ? supabaseApi.getProjectLike(projectId) : null,
      ]);

      setInteractions({
        likes: project.likes_count,
        views: project.views_count,
        comments: project.comments_count,
        userLiked: !!userLike,
        userViewed: false,
      });
    } catch (error) {
      console.error('Failed to load interactions:', error);
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
      await supabaseApi.toggleLike(projectId);
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
      await supabaseApi.incrementViews(projectId);
    } catch (error) {
      console.error('Failed to record view:', error);
    }
  };

  const addComment = async (content: string) => {
    if (!user) {
      alert('Please sign in to comment');
      return null;
    }

    try {
      const newComment = await supabaseApi.addComment(projectId, content);
      setInteractions(prev => ({
        ...prev,
        comments: prev.comments + 1,
      }));
      return newComment;
    } catch (error) {
      console.error('Failed to add comment:', error);
      return null;
    }
  };

  return {
    interactions,
    loading,
    toggleLike,
    incrementView,
    addComment,
  };
};
