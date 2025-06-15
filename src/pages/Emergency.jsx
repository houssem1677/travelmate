import React from 'react';
import '../css/Emergency.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const emergencyData = [
  {
    id: 1,
    type: 'Police',
    name: 'Cambridge Police Station',
    phone: '01223 358 966',
    location: [52.205, 0.119],
    color: 'blue'
  },
  {
    id: 2,
    type: 'Hospital',
    name: 'Addenbrooke’s Hospital',
    phone: '01223 245 151',
    location: [52.176, 0.139],
    color: 'red'
  },
  {
    id: 3,
    type: 'Pharmacy',
    name: 'Boots Pharmacy',
    phone: '01223 460 441',
    location: [52.202, 0.125],
    color: 'green'
  },
  {
    id: 4,
    type: 'Embassy',
    name: 'French Embassy - Cambridge Office',
    phone: '01223 123 456',
    location: [52.204, 0.118],
    color: 'purple'
  }
];

const createIcon = (color) =>
  new L.Icon({
    iconUrl: `https://chart.googleapis.com/chart?chst=d_map_pin_icon&chld=info|${color}`,
    iconSize: [30, 50],
    iconAnchor: [15, 45],
    popupAnchor: [0, -40]
  });

export default function Emergency() {
  return (
    <div className="emergency-page">
      <h2>Emergency Contacts</h2>
      <div className="emergency-container">
        <div className="emergency-list">
          {emergencyData.map((item) => (
            <div className={`emergency-card ${item.color}`} key={item.id}>
              <h3>{item.type}</h3>
              <p><strong>{item.name}</strong></p>
              <p>Phone: {item.phone}</p>
            </div>
          ))}
        </div>

        <div className="emergency-map">
          <MapContainer center={[52.204, 0.121]} zoom={13} style={{ height: "400px", width: "100%" }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; OpenStreetMap contributors'
            />
            {emergencyData.map((item) => (
              <Marker
                key={item.id}
                position={item.location}
                icon={createIcon(item.color)}
              >
                <Popup>
                  <strong>{item.type}</strong><br />
                  {item.name}<br />
                  📞 {item.phone}
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </div>
  );
}
