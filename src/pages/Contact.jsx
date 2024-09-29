import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-6 py-12">
      <div className="w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-6">Contact Me</h2>
        <p className="text-gray-400 text-center mb-8">
          Have a question or want to work together? Feel free to reach out!
        </p>
        
        {/* Contact Form */}
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-gray-400 mb-2">Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              placeholder="Your Name" 
              className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-400 mb-2">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              placeholder="Your Email" 
              className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-gray-400 mb-2">Message</label>
            <textarea 
              id="message" 
              name="message" 
              rows="4" 
              placeholder="Your Message" 
              className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            ></textarea>
          </div>

          <div className="text-center">
            <button 
              type="submit" 
              className="w-full px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-300 transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>

      {/* Social Media Links */}
      <div className="mt-10 text-gray-400">
        <p>Or reach out via social media:</p>
        <div className="flex justify-center gap-4 mt-4">
          <a href="https://github.com/Nokihera" target="_blank" rel="noopener noreferrer" className="hover:text-white transition duration-300">
            <FaGithub size={24} />
          </a>
          <a href="https://www.linkedin.com/in/min-zar-ni-htut-407ba3237/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition duration-300">
            <FaLinkedin size={24} />
          </a>
          <a href="https://facebook.com/minzarnihtut811" target="_blank" rel="noopener noreferrer" className="hover:text-white transition duration-300">
            <FaFacebook size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
