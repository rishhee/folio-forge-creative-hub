
import React, { useState } from 'react';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 py-8">
      <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-8">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">PF</span>
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                {isLogin ? 'Welcome Back' : 'Join PortfolioForge'}
              </h1>
              <p className="text-gray-600 mt-2">
                {isLogin ? 'Sign in to your account' : 'Create your creative profile'}
              </p>
            </div>

            <div className="bg-gradient-to-r from-purple-100 to-blue-100 rounded-lg p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-xl font-bold">🔐</span>
              </div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Authentication</h2>
              <p className="text-gray-600 mb-6">
                This page will feature login/register forms with social authentication options, 
                password recovery, and email verification.
              </p>
              <div className="flex space-x-4 justify-center">
                <button
                  onClick={() => setIsLogin(true)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    isLogin 
                      ? 'bg-purple-600 text-white' 
                      : 'bg-white text-purple-600 border border-purple-600'
                  }`}
                >
                  Login
                </button>
                <button
                  onClick={() => setIsLogin(false)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    !isLogin 
                      ? 'bg-purple-600 text-white' 
                      : 'bg-white text-purple-600 border border-purple-600'
                  }`}
                >
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
