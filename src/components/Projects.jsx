import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">My Projects</h1>
        {/* Add your projects here */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project cards will go here */}
        </div>
        <div className="mt-12 text-center">
          <Link to="/" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
