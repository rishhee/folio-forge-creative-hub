
import React from 'react';
import { useParams } from 'react-router-dom';

const UserProfile = () => {
  const { username } = useParams();

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">User Profile</h1>
            <p className="text-gray-600 mb-8">Viewing profile for: @{username}</p>
            
            <div className="bg-gradient-to-r from-purple-100 to-blue-100 rounded-lg p-8 text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">👤</span>
              </div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">User Profile Coming Soon</h2>
              <p className="text-gray-600 mb-6">
                This page will display user information, their portfolio collection, 
                follower/following stats, and social interactions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
