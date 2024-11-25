import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Switch from "react-switch";
import { FaSave, FaUserCog, FaGlobe, FaMap } from "react-icons/fa";

function Settings() {
  // State variables for settings
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState("English");
  const [autoUpdate, setAutoUpdate] = useState(true);

  // Function to handle saving settings
  const saveSettings = () => {
    const settings = {
      darkMode,
      language,
      autoUpdate,
    };

    // Simulate an API call
    fetch("http://localhost:5000/api/save-settings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(settings),
    })
      .then((response) => {
        if (response.ok) {
          toast.success("Settings saved successfully!");
        } else {
          toast.error("Failed to save settings.");
        }
      })
      .catch(() => toast.error("Error connecting to server."));
  };

  return (
    <div className="bg-white shadow-md p-16 rounded-lg space-y-6">
      <h2 className="text-2xl font-semibold flex items-center mb-4">
        <FaUserCog className="mr-2" /> Settings
      </h2>

      {/* General Settings */}
      <div className="bg-gray-100 p-14 rounded-lg shadow space-y-4">
        <h3 className="font-semibold flex items-center mb-2">
          <FaGlobe className="mr-2" /> General Settings
        </h3>
        <div className="flex items-center justify-between">
          <label htmlFor="darkMode" className="text-gray-700">
            Dark Mode
          </label>
          <Switch
            id="darkMode"
            onChange={() => setDarkMode(!darkMode)}
            checked={darkMode}
            onColor="#86d3ff"
            offColor="#ccc"
            handleDiameter={20}
            uncheckedIcon={false}
            checkedIcon={false}
            height={20}
            width={48}
          />
        </div>
        <div className="mt-4">
          <label htmlFor="language" className="text-gray-700">
            Language
          </label>
          <select
            id="language"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="block w-full mt-1 p-2 border rounded-lg"
          >
            <option>English</option>
            <option>Hindi</option>
            <option>Spanish</option>
            <option>French</option>
          </select>
        </div>
      </div>

      {/* Map Settings */}
      <div className="bg-gray-100 p-4 rounded-lg shadow space-y-4">
        <h3 className="font-semibold flex items-center mb-2">
          <FaMap className="mr-2" /> Map Settings
        </h3>
        <div className="flex items-center justify-between">
          <label htmlFor="autoUpdate" className="text-gray-700">
            Enable Auto Updates
          </label>
          <Switch
            id="autoUpdate"
            onChange={() => setAutoUpdate(!autoUpdate)}
            checked={autoUpdate}
            onColor="#86d3ff"
            offColor="#ccc"
            handleDiameter={20}
            uncheckedIcon={false}
            checkedIcon={false}
            height={20}
            width={48}
          />
        </div>
      </div>

      {/* Save Button */}
      <button
        onClick={saveSettings}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 flex items-center space-x-2"
      >
        <FaSave />
        <span>Save Settings</span>
      </button>

      {/* Toast Notifications */}
      <ToastContainer />
    </div>
  );
}

export default Settings;
