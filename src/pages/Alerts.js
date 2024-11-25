
   
 import React, { useState } from 'react';
 import BubbleCard from './BubbleCard'; // Ensure the path is correct
 
 function Alerts() {
   const [alerts, setAlerts] = useState([
     { id: 1, type: 'Critical', message: 'High outbreak in XYZ region', timestamp: '2024-11-24 10:30' },
     { id: 2, type: 'Warning', message: 'Potential hotspot in ABC region', timestamp: '2024-11-24 09:15' },
     { id: 3, type: 'Info', message: 'Vaccination drive in PQR area', timestamp: '2024-11-24 08:00' },
   ]);
 
   const [newAlert, setNewAlert] = useState('');
 
   const handleAddAlert = () => {
     if (newAlert.trim() !== '') {
       const newAlertObj = {
         id: alerts.length + 1,
         type: 'Custom',
         message: newAlert,
         timestamp: new Date().toLocaleString(),
       };
       setAlerts([...alerts, newAlertObj]);
       setNewAlert('');
     }
   };
 
   return (
     <div
       className="min-h-screen bg-cover bg-center p-6"
       style={{
         backgroundImage:
           "url('https://img.freepik.com/free-vector/hotspot-network-technology-icon-neon-gradient-background_53876-119514.jpg')",
         backgroundSize: 'cover',
         backgroundPosition: 'center',
         backgroundRepeat: 'no-repeat',
       }}
     >
       {/* Heading and Subtitle */}
       <div className="bg-white bg-opacity-75 shadow-md p-6 rounded-lg max-w-2xl mx-auto mt-10">
         <h2 className="text-2xl font-bold mb-4 text-center">Alerts and Notifications</h2>
         <p className="text-gray-700 mb-6 text-center">
           Stay informed with real-time updates and create custom alerts for areas of interest.
         </p>
 
         {/* Alert Ticker */}
         <div className="bg-gray-100 border rounded-lg p-4 mb-6 overflow-hidden">
           <h3 className="font-semibold text-lg mb-3">Real-Time Alerts:</h3>
           <div className="ticker overflow-hidden relative">
             <ul className="space-y-2">
               {alerts.map((alert) => (
                 <li key={alert.id} className="flex items-center space-x-2">
                   <span className="text-sm font-bold text-blue-600">{alert.type}:</span>
                   <span className="text-sm">{alert.message}</span>
                   <span className="text-xs text-gray-500 ml-auto">{alert.timestamp}</span>
                 </li>
               ))}
             </ul>
           </div>
         </div>
 
         {/* Custom Alert Form */}
         <div className="mb-6">
           <h3 className="text-lg font-semibold mb-3">Add a Custom Alert</h3>
           <div className="flex space-x-2">
             <input
               type="text"
               placeholder="Enter alert message..."
               value={newAlert}
               onChange={(e) => setNewAlert(e.target.value)}
               className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
             />
             <button
               onClick={handleAddAlert}
               className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
             >
               Add Alert
             </button>
           </div>
         </div>
 
         {/* Bubble Cards */}
         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
           {alerts.map((alert) => (
             <BubbleCard key={alert.id} type={alert.type} message={alert.message} timestamp={alert.timestamp} />
           ))}
         </div>
       </div>
     </div>
   );
 }
 
 export default Alerts;
 