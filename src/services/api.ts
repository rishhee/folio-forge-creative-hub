
// Mock backend API service
export interface User {
  id: string;
  username: string;
  email: string;
  name: string;
  avatar?: string;
  bio?: string;
  location?: string;
  website?: string;
  followers: number;
  following: number;
  projects: number;
  joinDate: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  images: string[];
  category: string;
  tags: string[];
  authorId: string;
  author: string;
  authorAvatar?: string;
  likes: number;
  views: number;
  comments: number;
  createdAt: string;
  featured: boolean;
}

export interface Comment {
  id: string;
  projectId: string;
  authorId: string;
  author: string;
  authorAvatar?: string;
  content: string;
  createdAt: string;
}

export interface Notification {
  id: string;
  type: 'like' | 'comment' | 'follow' | 'system';
  title: string;
  message: string;
  read: boolean;
  createdAt: string;
  actionUrl?: string;
}

// Mock data storage
class MockDatabase {
  private users: User[] = [];
  private projects: Project[] = [];
  private comments: Comment[] = [];
  private notifications: Notification[] = [];
  private currentUser: User | null = null;

  constructor() {
    this.initializeMockData();
  }

  private initializeMockData() {
    // Create mock users
    this.users = [
      {
        id: '1',
        username: 'sarah_chen',
        email: 'sarah@example.com',
        name: 'Sarah Chen',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b367?w=150',
        bio: 'UI/UX Designer passionate about creating meaningful digital experiences',
        location: 'San Francisco, CA',
        website: 'https://sarahchen.design',
        followers: 1250,
        following: 345,
        projects: 12,
        joinDate: '2023-01-15'
      },
      {
        id: '2',
        username: 'marcus_johnson',
        email: 'marcus@example.com',
        name: 'Marcus Johnson',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
        bio: 'Brand designer & creative director',
        location: 'New York, NY',
        followers: 890,
        following: 234,
        projects: 8,
        joinDate: '2023-03-20'
      }
    ];

    // Create mock projects
    this.projects = [
      {
        id: '1',
        title: 'Mobile Banking App Design',
        description: 'A comprehensive mobile banking application with focus on accessibility and user experience. The design system includes modern UI components and intuitive navigation patterns.',
        images: [
          'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800',
          'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800'
        ],
        category: 'UI/UX',
        tags: ['mobile', 'banking', 'fintech', 'accessibility'],
        authorId: '1',
        author: 'Sarah Chen',
        authorAvatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b367?w=150',
        likes: 234,
        views: 1250,
        comments: 12,
        createdAt: '2024-01-15',
        featured: true
      },
      {
        id: '2',
        title: 'Brand Identity for Tech Startup',
        description: 'Complete brand identity design for a sustainable technology startup. Includes logo design, color palette, typography, and brand guidelines.',
        images: [
          'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800',
          'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800'
        ],
        category: 'Branding',
        tags: ['branding', 'logo', 'identity', 'startup'],
        authorId: '2',
        author: 'Marcus Johnson',
        authorAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
        likes: 189,
        views: 980,
        comments: 8,
        createdAt: '2024-01-10',
        featured: true
      }
    ];

    // Mock notifications
    this.notifications = [
      {
        id: '1',
        type: 'like',
        title: 'New Like',
        message: 'Marcus Johnson liked your project "Mobile Banking App Design"',
        read: false,
        createdAt: '2024-01-20',
        actionUrl: '/projects/1'
      },
      {
        id: '2',
        type: 'comment',
        title: 'New Comment',
        message: 'Sarah Chen commented on your project "Brand Identity for Tech Startup"',
        read: true,
        createdAt: '2024-01-19',
        actionUrl: '/projects/2'
      }
    ];
  }

  // Auth methods
  async login(email: string, password: string): Promise<User> {
    await this.delay(500);
    const user = this.users.find(u => u.email === email);
    if (!user) throw new Error('Invalid credentials');
    this.currentUser = user;
    localStorage.setItem('currentUser', JSON.stringify(user));
    return user;
  }

  async register(userData: Partial<User> & { password: string }): Promise<User> {
    await this.delay(500);
    const newUser: User = {
      id: Date.now().toString(),
      username: userData.username || '',
      email: userData.email || '',
      name: userData.name || '',
      followers: 0,
      following: 0,
      projects: 0,
      joinDate: new Date().toISOString()
    };
    this.users.push(newUser);
    this.currentUser = newUser;
    localStorage.setItem('currentUser', JSON.stringify(newUser));
    return newUser;
  }

  logout() {
    this.currentUser = null;
    localStorage.removeItem('currentUser');
  }

  getCurrentUser(): User | null {
    if (this.currentUser) return this.currentUser;
    const stored = localStorage.getItem('currentUser');
    if (stored) {
      this.currentUser = JSON.parse(stored);
      return this.currentUser;
    }
    return null;
  }

  // Project methods
  async getProjects(filters?: { category?: string; search?: string }): Promise<Project[]> {
    await this.delay(300);
    let filtered = [...this.projects];
    
    if (filters?.category && filters.category !== 'All') {
      filtered = filtered.filter(p => p.category === filters.category);
    }
    
    if (filters?.search) {
      const search = filters.search.toLowerCase();
      filtered = filtered.filter(p => 
        p.title.toLowerCase().includes(search) ||
        p.description.toLowerCase().includes(search) ||
        p.tags.some(tag => tag.toLowerCase().includes(search))
      );
    }
    
    return filtered;
  }

  async getProject(id: string): Promise<Project | null> {
    await this.delay(200);
    return this.projects.find(p => p.id === id) || null;
  }

  async createProject(projectData: Omit<Project, 'id' | 'authorId' | 'author' | 'authorAvatar' | 'likes' | 'views' | 'comments' | 'createdAt' | 'featured'>): Promise<Project> {
    await this.delay(800);
    const user = this.getCurrentUser();
    if (!user) throw new Error('Not authenticated');

    const newProject: Project = {
      ...projectData,
      id: Date.now().toString(),
      authorId: user.id,
      author: user.name,
      authorAvatar: user.avatar,
      likes: 0,
      views: 0,
      comments: 0,
      createdAt: new Date().toISOString(),
      featured: false
    };

    this.projects.unshift(newProject);
    return newProject;
  }

  async getUserProjects(userId: string): Promise<Project[]> {
    await this.delay(300);
    return this.projects.filter(p => p.authorId === userId);
  }

  // User methods
  async getUser(username: string): Promise<User | null> {
    await this.delay(200);
    return this.users.find(u => u.username === username) || null;
  }

  async updateUser(userId: string, updates: Partial<User>): Promise<User> {
    await this.delay(400);
    const userIndex = this.users.findIndex(u => u.id === userId);
    if (userIndex === -1) throw new Error('User not found');
    
    this.users[userIndex] = { ...this.users[userIndex], ...updates };
    
    if (this.currentUser?.id === userId) {
      this.currentUser = this.users[userIndex];
      localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
    }
    
    return this.users[userIndex];
  }

  // Notifications
  async getNotifications(): Promise<Notification[]> {
    await this.delay(200);
    return this.notifications.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  }

  async markNotificationRead(id: string): Promise<void> {
    await this.delay(100);
    const notification = this.notifications.find(n => n.id === id);
    if (notification) {
      notification.read = true;
    }
  }

  // Analytics for dashboard
  async getDashboardStats(userId: string): Promise<{
    totalProjects: number;
    totalViews: number;
    totalLikes: number;
    totalFollowers: number;
    recentActivity: any[];
  }> {
    await this.delay(300);
    const userProjects = this.projects.filter(p => p.authorId === userId);
    const user = this.users.find(u => u.id === userId);
    
    return {
      totalProjects: userProjects.length,
      totalViews: userProjects.reduce((sum, p) => sum + p.views, 0),
      totalLikes: userProjects.reduce((sum, p) => sum + p.likes, 0),
      totalFollowers: user?.followers || 0,
      recentActivity: [
        { type: 'project', message: 'New project published', date: '2024-01-20' },
        { type: 'like', message: 'Received 25 new likes', date: '2024-01-19' }
      ]
    };
  }

  private delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

export const mockAPI = new MockDatabase();
