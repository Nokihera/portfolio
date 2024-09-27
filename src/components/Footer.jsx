import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'; // Icons for social media

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-auto">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo or Brand Name */}
        <div>
          <h1 className="text-2xl font-bold">Min Zar Ni Htut</h1>
          <p className="text-gray-400">Front End Developer & Designer</p>
        </div>

        {/* Footer Links */}
        <div className="flex gap-6">
          <Link to="/" className="text-gray-300 hover:text-white transition duration-300">
            Home
          </Link>
          <Link to="/about" className="text-gray-300 hover:text-white transition duration-300">
            About
          </Link>
          <Link to="/projects" className="text-gray-300 hover:text-white transition duration-300">
            Projects
          </Link>
          <Link to="/contact" className="text-gray-300 hover:text-white transition duration-300">
            Contact
          </Link>
        </div>

        {/* Social Media Icons */}
        <div className="flex gap-4">
          <a href="https://github.com/Nokihera" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaGithub size={24} />
          </a>
          <a href="https://www.linkedin.com/in/min-zar-ni-htut-407ba3237/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaLinkedin size={24} />
          </a>
          <a href="https://facebook.com/minzarnihtut811" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaFacebook size={24} />
          </a>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-6 text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} Min Zar Ni Htut. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
