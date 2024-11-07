import React from 'react';
import profile from '../assets/profile.jpg'; // Replace with your actual profile image path
import SlideShow from '../components/SlideShow';
import MobileSlideShow from '../components/MobileSlideShow';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-6 py-12">
      <div className="w-full max-w-4xl">
        {/* Profile Section */}
        <div className="text-center mb-10">
          <img
            src={profile}
            alt="Profile"
            className="w-40 h-40 rounded-full mx-auto mb-6 object-cover shadow-lg"
          />
          <h2 className="text-4xl font-bold mb-4">Min Zar Ni Htut</h2>
          <p className="text-xl text-gray-400">Front End Developer | Designer | Innovator</p>
        </div>

        {/* About Me Section */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-semibold mb-4">About Me</h3>
          <p className="text-lg text-gray-400 leading-relaxed">
            I am a passionate front-end developer with a knack for creating interactive and user-friendly web designs. 
            My journey into web development began with a curiosity for how websites function behind the scenes. 
            Over the years, I have honed my skills in JavaScript, React, and various modern front-end technologies, 
            constantly pushing myself to learn and improve. I enjoy turning complex problems into simple, 
            beautiful, and intuitive solutions.
          </p>
        </div>

        {/* Skills Section */}
        <div className="mb-12">
          <h3 className="text-3xl font-semibold text-center mb-6">Skills & Expertise</h3>
          <SlideShow/>
          <MobileSlideShow/>
        </div>

        {/* Experience Section */}
        <div className="text-center">
          <h3 className="text-3xl font-semibold mb-6">Experience</h3>
          <p className="text-lg text-gray-400 leading-relaxed">
            I have worked on various web development projects ranging from small business websites to interactive 
            applications. My experience includes working with cross-functional teams, understanding client 
            requirements, and delivering quality code under tight deadlines. I believe in continuous learning 
            and improving my craft with each project I undertake.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
