
import React from 'react';
import { useSearchParams } from 'react-router-dom';

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Search Results</h1>
          <p className="text-gray-600">
            {query ? `Searching for: "${query}"` : 'Enter a search term to find portfolios and creators'}
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
            <span className="text-white text-2xl font-bold">🔍</span>
          </div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Search Results</h2>
          <p className="text-gray-600 mb-6">
            This page will display search results with filters for projects, users, tags, 
            and advanced search options with sorting capabilities.
          </p>
          {query && (
            <div className="bg-purple-50 p-4 rounded-lg inline-block">
              <p className="text-purple-700 font-medium">Searching for: "{query}"</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
