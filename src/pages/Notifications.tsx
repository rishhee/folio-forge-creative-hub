
import React from 'react';

const Notifications = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Notifications</h1>
          <p className="text-gray-600">Stay updated with your latest activity</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
            <span className="text-white text-2xl font-bold">🔔</span>
          </div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Notifications Center</h2>
          <p className="text-gray-600 mb-6">
            This page will show your notifications including likes, comments, follows, 
            and system updates in a clean, organized format.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mb-2 mx-auto">
                <span className="text-red-600 text-sm">❤️</span>
              </div>
              <p className="text-sm font-medium">Likes</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mb-2 mx-auto">
                <span className="text-blue-600 text-sm">💬</span>
              </div>
              <p className="text-sm font-medium">Comments</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mb-2 mx-auto">
                <span className="text-green-600 text-sm">👥</span>
              </div>
              <p className="text-sm font-medium">Follows</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
