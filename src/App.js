import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Map from './pages/Map';
import Dashboard from './pages/Dashboard';
import Alerts from './pages/Alerts';
import Settings from './pages/Settings';
import 'leaflet/dist/leaflet.css';


function App() {
  return (
    <Router>
      <div className="bg-gray-100 min-h-screen font-roboto">
        <header className="bg-blue-700 text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">Disease Hotspot Tracker</h1>
            <nav>
              <ul className="flex space-x-4">
                <li><Link to="/" className="hover:underline">Home</Link></li>
                <li><Link to="/map" className="hover:underline">Map</Link></li>
                <li><Link to="/dashboard" className="hover:underline">Dashboard</Link></li>
                <li><Link to="/alerts" className="hover:underline">Alerts</Link></li>
                <li><Link to="/settings" className="hover:underline">Settings</Link></li>
              </ul>
            </nav>
          </div>
        </header>

        <main className="container mx-auto p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/map" element={<Map />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/alerts" element={<Alerts />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>

        <footer className="bg-blue-700 text-white p-4 mt-6">
          <div className="container mx-auto text-center">
            <p>&copy; 2023 Disease Hotspot Tracker. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;

