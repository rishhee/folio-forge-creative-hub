
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Explore from './pages/Explore';
import ProjectDetails from './pages/ProjectDetails';
import CreatePortfolio from './pages/CreatePortfolio';
import Dashboard from './pages/Dashboard';
import Community from './pages/Community';
import UserProfile from './pages/UserProfile';
import Notifications from './pages/Notifications';
import Settings from './pages/Settings';
import SearchResults from './pages/SearchResults';
import Auth from './pages/Auth';
import NotFound from './pages/NotFound';
// Company pages
import About from './pages/About';
import Careers from './pages/Careers';
import Press from './pages/Press';
import Blog from './pages/Blog';
// Support pages
import Help from './pages/Help';
import Contact from './pages/Contact';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Explore />} />
      <Route path="/projects/:id" element={<ProjectDetails />} />
      <Route path="/create" element={<CreatePortfolio />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/community" element={<Community />} />
      <Route path="/users/:username" element={<UserProfile />} />
      <Route path="/notifications" element={<Notifications />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/search" element={<SearchResults />} />
      <Route path="/auth" element={<Auth />} />
      
      {/* Company Pages */}
      <Route path="/about" element={<About />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/press" element={<Press />} />
      <Route path="/blog" element={<Blog />} />
      
      {/* Support Pages */}
      <Route path="/help" element={<Help />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/privacy" element={<Privacy />} />
      
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
