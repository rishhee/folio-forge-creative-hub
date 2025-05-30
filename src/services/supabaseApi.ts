
import { supabase } from '../integrations/supabase/client';

export interface Project {
  id: string;
  user_id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  images: string[];
  featured_image?: string;
  likes_count: number;
  views_count: number;
  comments_count: number;
  created_at: string;
  updated_at: string;
  // Joined data
  author?: string;
  authorAvatar?: string;
  authorId?: string;
}

export interface ProjectComment {
  id: string;
  user_id: string;
  project_id: string;
  content: string;
  created_at: string;
  author?: string;
  authorAvatar?: string;
}

export interface DashboardStats {
  totalProjects: number;
  totalViews: number;
  totalLikes: number;
  totalFollowers: number;
}

export const supabaseApi = {
  // Projects
  async getProjects(filters?: { category?: string; search?: string }) {
    let query = supabase
      .from('projects')
      .select(`
        *,
        profiles:user_id (
          name,
          username,
          avatar_url
        )
      `)
      .order('created_at', { ascending: false });

    if (filters?.category) {
      query = query.eq('category', filters.category);
    }

    if (filters?.search) {
      query = query.ilike('title', `%${filters.search}%`);
    }

    const { data, error } = await query;

    if (error) throw error;

    return data?.map(project => ({
      ...project,
      author: project.profiles?.name || 'Unknown',
      authorAvatar: project.profiles?.avatar_url,
      authorId: project.user_id,
    })) || [];
  },

  async getProject(id: string) {
    const { data, error } = await supabase
      .from('projects')
      .select(`
        *,
        profiles:user_id (
          name,
          username,
          avatar_url
        )
      `)
      .eq('id', id)
      .single();

    if (error) throw error;

    return {
      ...data,
      author: data.profiles?.name || 'Unknown',
      authorAvatar: data.profiles?.avatar_url,
      authorId: data.user_id,
    };
  },

  async getUserProjects(userId: string) {
    const { data, error } = await supabase
      .from('projects')
      .select(`
        *,
        profiles:user_id (
          name,
          username,
          avatar_url
        )
      `)
      .eq('user_id', userId)
      .order('created_at', { ascending: false });

    if (error) throw error;

    return data?.map(project => ({
      ...project,
      author: project.profiles?.name || 'Unknown',
      authorAvatar: project.profiles?.avatar_url,
      authorId: project.user_id,
    })) || [];
  },

  async createProject(projectData: {
    title: string;
    description: string;
    category: string;
    tags: string[];
    images: string[];
  }) {
    const user = await supabase.auth.getUser();
    if (!user.data.user) throw new Error('Not authenticated');

    const { data, error } = await supabase
      .from('projects')
      .insert({
        ...projectData,
        user_id: user.data.user.id,
        featured_image: projectData.images[0] || null,
      })
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  // Project interactions
  async getProjectLike(projectId: string) {
    const user = await supabase.auth.getUser();
    if (!user.data.user) return null;

    const { data, error } = await supabase
      .from('project_likes')
      .select('*')
      .eq('project_id', projectId)
      .eq('user_id', user.data.user.id)
      .maybeSingle();

    if (error) throw error;
    return data;
  },

  async toggleLike(projectId: string) {
    const user = await supabase.auth.getUser();
    if (!user.data.user) throw new Error('Not authenticated');

    const existingLike = await this.getProjectLike(projectId);

    if (existingLike) {
      const { error } = await supabase
        .from('project_likes')
        .delete()
        .eq('id', existingLike.id);

      if (error) throw error;
      return false;
    } else {
      const { error } = await supabase
        .from('project_likes')
        .insert({
          project_id: projectId,
          user_id: user.data.user.id,
        });

      if (error) throw error;
      return true;
    }
  },

  async incrementViews(projectId: string) {
    const { error } = await supabase
      .from('projects')
      .update({ views_count: supabase.raw('views_count + 1') })
      .eq('id', projectId);

    if (error) throw error;
  },

  // Comments
  async getProjectComments(projectId: string) {
    const { data, error } = await supabase
      .from('project_comments')
      .select(`
        *,
        profiles:user_id (
          name,
          avatar_url
        )
      `)
      .eq('project_id', projectId)
      .order('created_at', { ascending: true });

    if (error) throw error;

    return data?.map(comment => ({
      ...comment,
      author: comment.profiles?.name || 'Unknown',
      authorAvatar: comment.profiles?.avatar_url,
    })) || [];
  },

  async addComment(projectId: string, content: string) {
    const user = await supabase.auth.getUser();
    if (!user.data.user) throw new Error('Not authenticated');

    const { data, error } = await supabase
      .from('project_comments')
      .insert({
        project_id: projectId,
        user_id: user.data.user.id,
        content,
      })
      .select(`
        *,
        profiles:user_id (
          name,
          avatar_url
        )
      `)
      .single();

    if (error) throw error;

    return {
      ...data,
      author: data.profiles?.name || 'Unknown',
      authorAvatar: data.profiles?.avatar_url,
    };
  },

  // Dashboard stats
  async getDashboardStats(userId: string): Promise<DashboardStats> {
    const [projectsResult, likesResult, followersResult] = await Promise.all([
      supabase.from('projects').select('id, views_count').eq('user_id', userId),
      supabase.from('project_likes').select('id').eq('user_id', userId),
      supabase.from('user_follows').select('id').eq('following_id', userId),
    ]);

    const totalProjects = projectsResult.data?.length || 0;
    const totalViews = projectsResult.data?.reduce((sum, p) => sum + (p.views_count || 0), 0) || 0;
    const totalLikes = likesResult.data?.length || 0;
    const totalFollowers = followersResult.data?.length || 0;

    return {
      totalProjects,
      totalViews,
      totalLikes,
      totalFollowers,
    };
  },
};
