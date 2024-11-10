import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useLocation, useNavigate } from 'react-router-dom';

// Set custom icon for the main location marker
const mainLocationIcon = new L.Icon({
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  shadowSize: [41, 41]
});
// Worker data
const workers = [
  {
    id: 1,
    long: 77.1189872,
    lat: 28.7405331,
    profile_pic_url: "https://images.unsplash.com/photo-1731084901083-cabdd7f51f91?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D",  // Placeholder "x" for profile picture
    name: "Worker 1",
    skill: "Plumber",
    mobile: "123-456-7890",
    email: "worker1@example.com"
  },
  {
    id: 2,
    long: 77.2199872,
    lat: 28.8425331,
    profile_pic_url: "https://images.unsplash.com/photo-1731084901083-cabdd7f51f91?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D",  // Placeholder "x" for profile picture
    name: "Worker 2",
    skill: "Electrician",
    mobile: "123-456-7891",
    email: "worker2@example.com"
  },
  {
    id: 3,
    long: 77.3209872,
    lat: 28.9435331,
    profile_pic_url: "https://images.unsplash.com/photo-1731084901083-cabdd7f51f91?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D",  // Placeholder "x" for profile picture
    name: "Worker 3",
    skill: "Carpenter",
    mobile: "123-456-7892",
    email: "worker3@example.com"
  },
  {
    id: 4,
    long: 77.4219872,
    lat: 28.9445331,
    profile_pic_url: "https://images.unsplash.com/photo-1731084901083-cabdd7f51f91?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D",  // Placeholder "x" for profile picture
    name: "Worker 4",
    skill: "Painter",
    mobile: "123-456-7893",
    email: "worker4@example.com"
  },
  {
    id: 5,
    long: 77.5229872,
    lat: 28.8455331,
    profile_pic_url: "https://images.unsplash.com/photo-1731084901083-cabdd7f51f91?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D",  // Placeholder "x" for profile picture
    name: "Worker 5",
    skill: "Mason",
    mobile: "123-456-7894",
    email: "worker5@example.com"
  },
  {
    id: 6,
    long: 77.6239872,
    lat: 28.7465331,
    profile_pic_url: "https://images.unsplash.com/photo-1731084901083-cabdd7f51f91?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D",  // Placeholder "x" for profile picture
    name: "Worker 6",
    skill: "Gardener",
    mobile: "123-456-7895",
    email: "worker6@example.com"
  },
  {
    id: 7,
    long: 77.7249872,
    lat: 28.8475331,
    profile_pic_url: "https://images.unsplash.com/photo-1731084901083-cabdd7f51f91?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D",  // Placeholder "x" for profile picture
    name: "Worker 7",
    skill: "Blacksmith",
    mobile: "123-456-7896",
    email: "worker7@example.com"
  },
  {
    id: 8,
    long: 77.8259872,
    lat: 28.9485331,
    profile_pic_url: "https://images.unsplash.com/photo-1731084901083-cabdd7f51f91?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D",  // Placeholder "x" for profile picture
    name: "Worker 8",
    skill: "Mechanic",
    mobile: "123-456-7897",
    email: "worker8@example.com"
  },
  {
    id: 9,
    long: 77.9269872,
    lat: 28.8495331,
    profile_pic_url: "https://images.unsplash.com/photo-1731084901083-cabdd7f51f91?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D",  // Placeholder "x" for profile picture
    name: "Worker 9",
    skill: "Welder",
    mobile: "123-456-7898",
    email: "worker9@example.com"
  },
  {
    id: 10,
    long: 78.0279872,
    lat: 28.7505331,
    profile_pic_url: "https://images.unsplash.com/photo-1731084901083-cabdd7f51f91?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D",  // Placeholder "x" for profile picture
    name: "Worker 10",
    skill: "Tailor",
    mobile: "123-456-7899",
    email: "worker10@example.com"
  },
  // More Plumbers
  {
    id: 11,
    long: 77.1289872,
    lat: 28.7445331,
    profile_pic_url: "https://images.unsplash.com/photo-1731084901083-cabdd7f51f91?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D",  // Placeholder "x" for profile picture
    name: "Worker 11",
    skill: "Plumber",
    mobile: "123-456-7900",
    email: "worker11@example.com"
  },
  {
    id: 12,
    long: 77.2279872,
    lat: 28.7535331,
    profile_pic_url: "https://images.unsplash.com/photo-1731084901083-cabdd7f51f91?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D",  // Placeholder "x" for profile picture
    name: "Worker 12",
    skill: "Plumber",
    mobile: "123-456-7901",
    email: "worker12@example.com"
  },
  {
    id: 13,
    long: 77.3289872,
    lat: 28.8545331,
    profile_pic_url: "https://images.unsplash.com/photo-1731084901083-cabdd7f51f91?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D",  // Placeholder "x" for profile picture
    name: "Worker 13",
    skill: "Plumber",
    mobile: "123-456-7902",
    email: "worker13@example.com"
  },
  {
    id: 14,
    long: 77.4299872,
    lat: 28.9655331,
    profile_pic_url: "https://images.unsplash.com/photo-1731084901083-cabdd7f51f91?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D",  // Placeholder "x" for profile picture
    name: "Worker 14",
    skill: "Plumber",
    mobile: "123-456-7903",
    email: "worker14@example.com"
  }
];


function LocationUpdater({ position }) {
  const map = useMap();
  useEffect(() => {
    if (position) {
      map.setView(position, map.getZoom());
    }
  }, [position, map]);

  return null;
}

export default function Map() {
  const [position, setPosition] = useState(null);
  const [filteredWorkers, setFilteredWorkers] = useState([]);
  const location = useLocation(); // Get current route path
  const currentSkill = location.pathname.split('/').pop(); // Extract the last part of the path (e.g., 'plumber')
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/worker-detail/${id}`);
  };

  useEffect(() => {
    const geoId = navigator.geolocation.watchPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        setPosition([latitude, longitude]);
      },
      (err) => console.error(err),
      {
        enableHighAccuracy: true,
        maximumAge: 10000,
        timeout: 5000,
      }
    );

    // Filter workers based on skill when the route changes
    const workersForSkill = workers.filter(worker => worker.skill.toLowerCase() === currentSkill.toLowerCase());
    setFilteredWorkers(workersForSkill);

    return () => navigator.geolocation.clearWatch(geoId); // Stop watching on unmount
  }, [currentSkill]);

  // Function to create a custom icon for each worker using profile_pic_url
  const createWorkerIcon = (profilePicUrl) =>
    L.divIcon({
      className: 'worker-icon',
      html: `
        <div style="
          background-image: url(${profilePicUrl});
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background-size: cover;
          background-position: center;
        "></div>`,
      iconSize: [40, 40],
      iconAnchor: [20, 40],
      popupAnchor: [0, -40]
    });

  return (
    <div className='w-screen flex gap-8 overflow-y-hidden'>
      <MapContainer
        center={position || [51.505, -0.09]}
        zoom={14}
        style={{ height: "calc(100vh - 120px)", width: "70vw", zIndex: 0 }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {position && (
          <>
            <LocationUpdater position={position} />
            <Marker position={position} icon={mainLocationIcon}>
              <Popup>You are here</Popup>
            </Marker>
          </>
        )}

        {/* Markers for each filtered worker with custom icon */}
        {filteredWorkers.map((worker, index) => (
          <Marker
            key={index}
            position={[worker.lat, worker.long]}
            icon={createWorkerIcon(worker.profile_pic_url)} // Custom icon for each worker
          >
            <Popup>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={worker.profile_pic_url} alt={worker.name} />
                <div>
                  <strong>{worker.name}</strong>
                  <p>{worker.skill}</p>
                  <p>Mobile: {worker.mobile}</p>
                  <p>Email: {worker.email}</p>
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
      
      {/* Display worker details as a list on the route */}
      <section style={{ padding: '20px' }}>
        <h1 className=' text-xl text-white mb-3'>Workers in the {currentSkill} field</h1>
        <ul className=' flex flex-col gap-2 text-white h-[70vh] overflow-y-scroll'>
          {filteredWorkers.length > 0 ? (
            filteredWorkers.map((worker, index) => (
              <li key={index} className=' bg-blue-500 rounded-lg p-3 cursor-pointer' onClick={() => handleClick(worker.id)}>
                <strong>{worker.name}</strong> - {worker.skill}
                <p>Mobile: {worker.mobile}</p>
                <p>Email: {worker.email}</p>
              </li>
            ))
          ) : (
            <p>No workers available for this skill.</p>
          )}
        </ul>
      </section>
    </div>
  );
}
