import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "react-leaflet-markercluster/dist/styles.min.css";

// Custom marker icon
const icon = new L.Icon({
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

// Custom cluster colors based on size
const createClusterCustomIcon = (cluster) => {
  const count = cluster.getChildCount();
  let color = "blue"; // Default color

  if (count < 10) color = "green";
  else if (count < 50) color = "yellow";
  else if (count < 100) color = "orange";
  else color = "red";

  return L.divIcon({
    html: `<div style="background-color:${color};border-radius:50%;width:30px;height:30px;display:flex;align-items:center;justify-content:center;color:white;font-size:12px;">${count}</div>`,
    className: "cluster-icon",
  });
};

function Map() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from the backend
    fetch("http://localhost:5000/api/disease-data")
      .then((response) => response.json())
      .then((data) => {
        // Filter out invalid latitude/longitude
        const validData = data.filter(
          (point) =>
            point.latitude !== null &&
            point.longitude !== null &&
            !isNaN(point.latitude) &&
            !isNaN(point.longitude) &&
            point.latitude !== 0 &&
            point.longitude !== 0
            
        );
        setData(validData);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <MapContainer center={[20, 78]} zoom={2} style={{ height: "100vh", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
      />
      <MarkerClusterGroup iconCreateFunction={createClusterCustomIcon}>
        {data.map((point, index) => (
          <Marker
            key={index}
            position={[point.latitude, point.longitude]}
            icon={icon}
          >
            <Popup>
              <strong>{point.location_key}</strong>
              <br />
              Area: {point.area_sq_km} sq km
            </Popup>
          </Marker>
        ))}
      </MarkerClusterGroup>
    </MapContainer>
  );
}

export default Map;
