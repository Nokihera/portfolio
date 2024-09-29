import { serverTimestamp, setDoc, doc } from 'firebase/firestore';
import React, { useState } from 'react';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import { db } from '../api/firebase';

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    try {
      setLoading(true);
      
      // Create a new document with an auto-generated ID in the "messages" collection
      await setDoc(doc(db, "messages", `${Date.now()}`), {
        name,
        email,
        message,
        timestamp: serverTimestamp(),
      });
      
      // Reset form fields after submission
      setName('');
      setEmail('');
      setMessage('');
      alert('Message sent successfully!'); // Notify user of success
    } catch (err) {
      alert(`Error: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-6 py-12">
      <div className="w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-6">Contact Me</h2>
        <p className="text-gray-400 text-center mb-8">
          Have a question or want to work together? Feel free to reach out!
        </p>
        
        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-gray-400 mb-2">Name</label>
            <input 
              type="text" 
              id="name" 
              required
              onChange={(e) => setName(e.target.value)}
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
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email" 
              required
              className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-gray-400 mb-2">Message</label>
            <textarea 
              id="message" 
              name="message" 
              required
              onChange={(e) => setMessage(e.target.value)}
              rows="4" 
              placeholder="Your Message" 
              className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            ></textarea>
          </div>

          <div className="text-center">
            <button 
              disabled={loading}
              type="submit" 
              className={`w-full px-6 py-3 ${loading ? 'bg-yellow-300' : 'bg-yellow-400'} text-black font-semibold rounded-lg hover:bg-yellow-300 transition duration-300`}
            >
              {loading ? 'Sending...' : 'Send Message'}
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
