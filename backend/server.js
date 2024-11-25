const express = require("express");
const { Pool } = require("pg");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// Database connection pool
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

// API Endpoint to get spatial data
app.get("/api/disease-data", async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT location_key, latitude, longitude, area_sq_km, ST_AsGeoJSON(location) AS geometry
       FROM jiyadisease_data;`
    );
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

app.post("/api/save-settings", (req, res) => {
    const { darkMode, language, autoUpdate } = req.body;
  
    // Simulate saving to a database or configuration file
    console.log("Settings saved:", { darkMode, language, autoUpdate });
    res.status(200).send("Settings saved successfully");
  });
  

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
