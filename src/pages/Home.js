import React from 'react';

function Home() {
  return (
    <div 
      className="min-h-screen bg-cover bg-center p-6" 
      style={{ 
        backgroundImage: "url('https://www.targettraining.eu/wp-content/uploads/2016/04/Fotolia_63237846_M.jpg')" 
      }}
    >
      {/* Content Section */}
      <div className="space-y-16 max-w-4xl mx-auto">
        {/* Welcome Section */}
        <div className="bg-white bg-opacity-75 shadow-md p-6 rounded-lg max-w-lg mx-auto mt-20">
          <h2 className="text-xl font-semibold mb-4">Welcome to Disease Hotspot Tracker</h2>
          <p className="text-gray-700">Track and analyze disease hotspots in real-time using our interactive map and analytics dashboard.</p>
        </div>

        {/* Why Use Our Tracker Section */}
        <div className="bg-white shadow-md p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Why use our tracker?</h2>
          <p className="text-gray-700">Our tools provide accurate, actionable insights to help mitigate and manage disease outbreaks effectively.</p>
        </div>

     
        {/* Sign In and Sign Up Section */}
        <div className="bg-white shadow-md p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4 text-center">Get Started Now</h2>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
            {/* Sign In Box */}
            <div className="bg-gray-100 p-4 rounded-lg shadow-md w-full max-w-sm">
              <h3 className="text-lg font-semibold mb-2">Sign In</h3>
              <p className="text-gray-600 mb-4">Already have an account? Sign in to access your dashboard and alerts.</p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                Sign In
              </button>
            </div>

            {/* Sign Up Box */}
            <div className="bg-gray-100 p-4 rounded-lg shadow-md w-full max-w-sm">
              <h3 className="text-lg font-semibold mb-2">Sign Up</h3>
              <p className="text-gray-600 mb-4">New here? Create an account to get started with tracking and analytics.</p>
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
