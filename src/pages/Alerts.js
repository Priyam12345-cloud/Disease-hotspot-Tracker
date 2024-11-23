import React from 'react';
import BubbleCard from './BubbleCard'; // Adjust the path if necessary

function Alerts() {
  return (
    <div
      className="min-h-screen bg-cover bg-center p-6"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/free-vector/hotspot-network-technology-icon-neon-gradient-background_53876-119514.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >


      <div className="bg-white bg-opacity-75 shadow-md p-6 rounded-lg max-w-lg mx-auto mt-20">
        <h2 className="text-xl font-semibold mb-4">Alerts</h2>
        <p className="text-gray-700 mb-6">
          Manage your alerts and notifications here.
        </p>
        
      </div>

      
   
   
 
      <BubbleCard />
    </div>
  );
}

export default Alerts;
