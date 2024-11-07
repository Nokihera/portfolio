import React from "react";
import profile from "../assets/profile.jpg"; // Import your profile image
import chatProject from "../assets/chatProject.png"; // Example project image
import { Link } from "react-router-dom";
import SlideShow from "../components/SlideShow";
import MobileSlideShow from "../components/MobileSlideShow";

const Home = () => {
  return (
    <div className="bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen py-9">
        <div className="text-center px-4">
          <h1 className="text-3xl sm:text-5xl font-bold mb-4 sm:mb-6">
            Hi, I'm Min Zar Ni Htut
          </h1>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8">
            Front End Developer | Designer | Innovator
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
            <Link
              to={`/projects`}
              className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-300 transition duration-300"
            >
              View My Projects
            </Link>
            <Link
              to={`/contact`}
              className="px-6 py-3 border border-white font-semibold rounded-lg hover:bg-white hover:text-black transition duration-300"
            >
              Contact Me
            </Link>
          </div>
        </div>

        {/* Profile Image */}
        <div className="mt-10">
          <img
            src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
            alt="Profile"
            className="rounded-lg shadow-lg h-64 w-64 sm:h-80 sm:w-80 object-cover"
          />
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-12 px-6 bg-gray-800">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            I am a front-end developer with a passion for building beautiful and
            user-friendly websites. With a background in design and development,
            I strive to create engaging digital experiences. I love solving
            complex problems and bringing ideas to life through code.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-12 px-6 bg-gray-900 z-10">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Skills</h2>
          <SlideShow/>
          <MobileSlideShow/>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-12 px-6 bg-gray-800">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Project 1 */}
            <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg">
              <img
                src={chatProject}
                alt="Project 1"
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Chat App</h3>
                <p className="text-gray-400 mb-4">
                  A real-time chat application built with React, Firebase, and
                  Tailwind CSS.
                </p>
                <a
                  href="https://chattervibe.vercel.app/"
                  className="text-yellow-400 hover:text-yellow-300 transition duration-300"
                >
                  View Project
                </a>
              </div>
            </div>
            {/* Add more projects similarly */}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 px-6 bg-gray-900">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
          <p className="text-gray-400 text-lg mb-6">
            If you'd like to chat or have any project ideas, feel free to reach
            out!
          </p>
          <Link
            to="/contact"
            className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-300 transition duration-300"
          >
            Contact Me
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
