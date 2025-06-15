import React, { useState } from "react";
import { MapContainer, TileLayer, Popup, CircleMarker } from "react-leaflet";
import { emergencyData } from "./emergencyData";
import "leaflet/dist/leaflet.css";

import L from "leaflet";
import iconUrl from "leaflet/dist/images/marker-icon.png";
import iconShadowUrl from "leaflet/dist/images/marker-shadow.png";

L.Marker.prototype.options.icon = L.icon({
  iconUrl,
  shadowUrl: iconShadowUrl,
  iconAnchor: [12, 41],
});

export default function EmergencyMap() {
  const [filter, setFilter] = useState({
    Police: true,
    Hospital: true,
    Pharmacy: true,
    Embassy: true,
  });

  const toggleFilter = (type) => {
    setFilter((prev) => ({
      ...prev,
      [type]: !prev[type],
    }));
  };

  const filteredData = emergencyData.filter((item) => filter[item.type]);

  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: "300px", padding: "1rem", borderRight: "1px solid #ccc" }}>
        <h3>Emergency Services</h3>
        {Object.keys(filter).map((type) => (
          <div key={type}>
            <label>
              <input
                type="checkbox"
                checked={filter[type]}
                onChange={() => toggleFilter(type)}
              />
              <span style={{ marginLeft: 8, color: getColor(type) }}>{type}</span>
            </label>
          </div>
        ))}
        <hr />
        <ul style={{ listStyle: "none", padding: 0 }}>
          {filteredData.map(({ id, name, type, phone }) => (
            <li key={id} style={{ marginBottom: 10 }}>
              <strong style={{ color: getColor(type) }}>{name}</strong><br />
              <small>{type} – {phone}</small>
            </li>
          ))}
        </ul>
      </div>

      <div style={{ flex: 1, height: "80vh" }}>
        <MapContainer center={[52.2043, 0.119]} zoom={13} style={{ height: "100%", width: "100%" }}>
          <TileLayer
            attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {filteredData.map(({ id, name, phone, location, color }) => (
            <CircleMarker
              key={id}
              center={location}
              radius={10}
              pathOptions={{ color, fillColor: color, fillOpacity: 0.7 }}
            >
              <Popup>
                <strong>{name}</strong><br />
                Phone: {phone}
              </Popup>
            </CircleMarker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}

function getColor(type) {
  switch (type) {
    case "Police":
      return "blue";
    case "Hospital":
      return "red";
    case "Pharmacy":
      return "green";
    case "Embassy":
      return "purple";
    default:
      return "gray";
  }
}
