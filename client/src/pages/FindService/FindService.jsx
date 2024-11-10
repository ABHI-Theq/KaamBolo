import React from "react";
import "./FindService.css";
import Map from "../../components/Map/Map";

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
  
  // const nearbyWorkers = workers.filter((worker) => {
  //   const distance = getDistance(
  //     customer[0].lat,
  //     customer[0].long,
  //     worker.lat,
  //     worker.long
  //   );
  //   return distance <= 5;
  // });

  return (
      <div className="find-service flex flex-wrap">
        <Map />
      </div>
  );
};

export default FindService;
