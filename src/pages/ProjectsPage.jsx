import React from 'react';
import chatProject from '../assets/chatProject.png'; // Replace with your actual project images
import shoppingPj from '../assets/shopping-pj.png';
const ProjectsPage = () => {
  const projects = [
    {
      id: 1,
      name: "ChatterVibe",
      description: "A real-time chat application built with React, Firebase, and Tailwind CSS.",
      image: chatProject,
      link: "https://chattervibe.vercel.app/", // Replace with actual project link
    },
    {
      id: 2,
      name: "Shopping App",
      description: "A personal portfolio showcasing my work and experience as a front-end developer.",
      image: shoppingPj, // Replace with actual project image
      link: "https://react-shopping-neon.vercel.app/",
    },
    {
      id: 3,
      name: "To-Do App",
      description: "A simple and elegant to-do list application built with React.",
      image: chatProject, // Replace with actual project image
      link: "https://currency-exchange-app-xi.vercel.app/",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white py-12 px-6">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold">My Projects</h1>
        <p className="text-gray-400 text-lg">A selection of projects I've worked on recently</p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project) => (
          <div key={project.id} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <img 
              src={project.image} 
              alt={project.name} 
              className="rounded-lg mb-6 w-full h-48 object-cover"
            />
            <h3 className="text-2xl font-semibold mb-2">{project.name}</h3>
            <p className="text-gray-400 mb-4">{project.description}</p>
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block px-4 py-2 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-300 transition duration-300"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
