import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <div className="text-center">
        {/* 404 Text */}
        <h1 className="text-9xl font-bold mb-4">404</h1>
        <h2 className="text-4xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-gray-400 text-lg mb-8">
          Oops! The page you're looking for doesn't exist.
        </p>

        {/* Back to Home Button */}
        <Link 
          to="/" 
          className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-300 transition duration-300"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
