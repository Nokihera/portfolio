import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa'; // Icons for social media

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-auto">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4 px-4">
        {/* Logo or Brand Name */}
        <div className="text-center md:text-left">
          <h1 className="text-2xl font-bold">Min Zar Ni Htut</h1>
          <p className="text-gray-400">Front End Developer & Designer</p>
        </div>

        {/* Footer Links */}
        <div className="flex flex-col md:flex-row gap-4 text-center">
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
        <div className="flex justify-center gap-4 mt-4 md:mt-0">
          <a
            href="https://github.com/Nokihera"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/min-zar-ni-htut-407ba3237/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://facebook.com/minzarnihtut811"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FaFacebook size={24} />
          </a>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-6 text-center text-gray-500 px-4">
        <p>&copy; {new Date().getFullYear()} Min Zar Ni Htut. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
