import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { app } from '../api/firebase';
import { useNavigate } from 'react-router-dom';

const AdminSignInPage = () => {
    const auth = getAuth(app);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const submitBtn = async ()=> {
        try{
            setLoading(true);
            await signInWithEmailAndPassword(auth, email, password);
        }catch(err){
            alert(err.message);
        }finally{
            setLoading(false);
            navigate("/admin");
        }
    }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center">Admin Sign In</h1>
        <div>
          {/* Email Input */}
          <div className="mb-4">
            <label className="block mb-2 text-sm font-semibold" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password Input */}
          <div className="mb-6">
            <label className="block mb-2 text-sm font-semibold" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Sign In Button */}
          <button
            onClick={submitBtn}
            disabled={loading}
            type="submit"
            className={`w-full px-4 py-2 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-300 transition duration-300 ${
              loading ? "opacity-50" : ""}`}
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>
        </div>

        {/* Link to Reset Password or other actions */}
        <p className="mt-4 text-sm text-center text-gray-400">
          <a href="#" className="hover:text-yellow-400">
            Forgot your password?
          </a>
        </p>
      </div>
    </div>
  );
};

export default AdminSignInPage;
