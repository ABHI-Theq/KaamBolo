import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

// Custom icon for the worker
const workerIcon = new L.Icon({
  iconUrl: 'https://via.placeholder.com/50',  // You can customize this URL with worker-specific icons if available
  iconSize: [50, 50],  // Icon size
  iconAnchor: [25, 50], // Anchor the icon at the bottom center
  popupAnchor: [0, -50],  // Adjust popup position relative to the icon
  shadowUrl: '', // No shadow for the icon
});

const workers = [
  {
    long: 77.1189872,
    lat: 28.7405331,
    profile_pic_url: "https://via.placeholder.com/50", 
    name: "Worker 1",
    skill: "Plumber",
  },
  {
    long: 77.1209872,
    lat: 28.7415331,
    profile_pic_url: "https://via.placeholder.com/50", 
    name: "Worker 2",
    skill: "Plumber",
  },
  {
    long: 77.1169872,
    lat: 28.7395331,
    profile_pic_url: "https://via.placeholder.com/50", 
    name: "Worker 3",
    skill: "Plumber",
  },
  {
    long: 77.1269872,
    lat: 28.7435331,
    profile_pic_url: "https://via.placeholder.com/50", 
    name: "Worker 4",
    skill: "Electrician",
  },
  {
    long: 77.1289872,
    lat: 28.7455331,
    profile_pic_url: "https://via.placeholder.com/50", 
    name: "Worker 5",
    skill: "Electrician",
  },
  {
    long: 77.1319872,
    lat: 28.7465331,
    profile_pic_url: "https://via.placeholder.com/50", 
    name: "Worker 6",
    skill: "Carpenter",
  },
  {
    long: 77.1329872,
    lat: 28.7475331,
    profile_pic_url: "https://via.placeholder.com/50", 
    name: "Worker 7",
    skill: "Carpenter",
  },
  {
    long: 77.1339872,
    lat: 28.7485331,
    profile_pic_url: "https://via.placeholder.com/50", 
    name: "Worker 8",
    skill: "Painter",
  },
  {
    long: 77.1359872,
    lat: 28.7505331,
    profile_pic_url: "https://via.placeholder.com/50", 
    name: "Worker 9",
    skill: "Painter",
  },
  {
    long: 77.1379872,
    lat: 28.7525331,
    profile_pic_url: "https://via.placeholder.com/50", 
    name: "Worker 10",
    skill: "AC Technician",
  },
];

const NearbyWorker = () => {
  return (
    <>
      {workers.map((worker, index) => (
        <Marker 
          key={index} 
          position={[worker.lat, worker.long]} 
          icon={workerIcon}
        >
          <Popup>
            <div>
              <img 
                src={worker.profile_pic_url} 
                alt={worker.name} 
                style={{ width: '40px', height: '40px', borderRadius: '50%' }} 
              />
              <h3>{worker.name}</h3>
              <p>Skill: {worker.skill}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </>
  );
}

export default NearbyWorker;
