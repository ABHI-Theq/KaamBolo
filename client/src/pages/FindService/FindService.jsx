import React from "react";
import "./FindService.css";
import Map from "../../components/Map/Map";



const customer = [
  {
    long: -73.935242,
    lat: 40.73061,
    profile_pic_url: "x",
    name: "John Doe",
  },
];

const workers = [
  {
    long: -73.935242,
    lat: 40.73061,
    profile_pic_url: "https://images.unsplash.com/photo-1687706713715-cf69298b4d5b?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Worker 1",
    skill: "Plumber",
  },
  {
    long: -73.939242,
    lat: 40.73161,
    profile_pic_url: "https://images.unsplash.com/photo-1687706713715-cf69298b4d5b?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Worker 2",
    skill: "Plumber",
  },
  {
    long: -73.936242,
    lat: 40.73261,
    profile_pic_url: "https://images.unsplash.com/photo-1687706713715-cf69298b4d5b?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Worker 3",
    skill: "Plumber",
  },
  {
    long: -74.055242,
    lat: 40.76061,
    profile_pic_url: "https://images.unsplash.com/photo-1687706713715-cf69298b4d5b?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Worker 4",
    skill: "Electrician",
  },
  {
    long: -74.120242,
    lat: 40.80061,
    profile_pic_url: "https://images.unsplash.com/photo-1687706713715-cf69298b4d5b?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Worker 5",
    skill: "Carpenter",
  },
];

const getDistance = (lat1, lon1, lat2, lon2) => {
  const R = 6371; // Radius of the Earth in kilometers
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) *
      Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c; // Distance in kilometers
  return distance;
};

const FindService = () => {
  const nearbyWorkers = workers.filter((worker) => {
    const distance = getDistance(
      customer[0].lat,
      customer[0].long,
      worker.lat,
      worker.long
    );
    return distance <= 5;
  });

  return (
      <div className="find-service">
        <Map />
      </div>
  );
};

export default FindService;
