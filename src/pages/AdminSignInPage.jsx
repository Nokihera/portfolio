import React from 'react';

const AdminSignInPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center">Admin Sign In</h1>
        <form>
          {/* Email Input */}
          <div className="mb-4">
            <label className="block mb-2 text-sm font-semibold" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
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
              className="w-full p-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            className="w-full px-4 py-2 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-300 transition duration-300"
          >
            Sign In
          </button>
        </form>

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
