import React from 'react';
import chatProject from "../assets/chatProject.png";
import profile from "../assets/profile.jpg";
const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white py-9">
      {/* Hero Section */}
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">Hi, I'm Min Zar Ni Htut</h1>
        <p className="text-xl mb-8">Front End Developer | Designer | Innovator</p>
        
        {/* Call to Action Buttons */}
        <div className="flex justify-center gap-6">
          <a 
            href="/projects" 
            className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-300 transition duration-300"
          >
            View My Projects
          </a>
          <a 
            href="/contact" 
            className="px-6 py-3 border border-white font-semibold rounded-lg hover:bg-white hover:text-black transition duration-300"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Image or Illustration Section */}
      <div className="mt-10">
        <img 
          src={profile} 
          alt="Developer Illustration" 
          className="rounded-lg shadow-lg h-80 w-80 object-cover"
        />
      </div>

      {/* Footer Section */}
      <footer className="mt-10 text-gray-400">
        <p>Scroll down to know more about me</p>
      </footer>
    </div>
  );
};

export default Home;
