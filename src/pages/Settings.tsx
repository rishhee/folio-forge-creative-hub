
import React from 'react';

const Settings = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Settings</h1>
          <p className="text-gray-600">Manage your account preferences and privacy</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
            <span className="text-white text-2xl font-bold">⚙️</span>
          </div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Account Settings</h2>
          <p className="text-gray-600 mb-6">
            This page will include profile settings, privacy controls, notification preferences, 
            billing information, and account management options.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <span className="text-purple-600 text-xl">👤</span>
              </div>
              <h3 className="font-semibold mb-2">Profile</h3>
              <p className="text-sm text-gray-600">Update your personal information</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <span className="text-blue-600 text-xl">🔒</span>
              </div>
              <h3 className="font-semibold mb-2">Privacy</h3>
              <p className="text-sm text-gray-600">Control your privacy settings</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
