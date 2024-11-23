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
        {/* First White Box */}
        <div className="bg-white bg-opacity-75 shadow-md p-6 rounded-lg max-w-lg mx-auto mt-20bg-white shadow-md p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Welcome to Disease Hotspot Tracker</h2>
          <p className="text-gray-700">Track and analyze disease hotspots in real-time using our interactive map and analytics dashboard.</p>
        </div>

        {/* Second White Box */}
        <div className="bg-white shadow-md p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Why use our tracker?</h2>
          <p className="text-gray-700">Our tools provide accurate, actionable insights to help mitigate and manage disease outbreaks effectively.</p>
        </div>

        {/* Third White Box */}
        <div className="bg-white shadow-md p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Get Started Now</h2>
          <p className="text-gray-700">Sign up to access advanced analytics and start making informed decisions today.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
