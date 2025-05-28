
import React from 'react';

const CreatePortfolio = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Create Portfolio
          </h1>
          <p className="text-xl text-gray-600">Share your amazing work with the world</p>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="bg-gradient-to-r from-purple-100 to-blue-100 rounded-lg p-12 text-center">
            <div className="w-24 h-24 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center">
              <span className="text-white text-3xl font-bold">✨</span>
            </div>
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Portfolio Creation</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              This page will feature a comprehensive portfolio creation form with drag & drop file uploads, 
              project details, tagging, and preview functionality.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <span className="text-purple-600 text-xl">📸</span>
                </div>
                <h3 className="font-semibold mb-2">Upload Images</h3>
                <p className="text-sm text-gray-600">Drag & drop your best work</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <span className="text-blue-600 text-xl">📝</span>
                </div>
                <h3 className="font-semibold mb-2">Add Details</h3>
                <p className="text-sm text-gray-600">Describe your creative process</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <span className="text-green-600 text-xl">🚀</span>
                </div>
                <h3 className="font-semibold mb-2">Publish</h3>
                <p className="text-sm text-gray-600">Share with the community</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePortfolio;
