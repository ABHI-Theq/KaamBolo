import React from 'react';

const NearbyWorkers = ({ workers }) => {
  return (
    <div>
      <h2>Nearby Workers</h2>
      <ul>
        {workers.map((worker, index) => (
          <li className='worker-profile' key={index}>
            <img className='worker-profile-pic' src={worker.profile_pic_url} alt={worker.name} />
            <p>{worker.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NearbyWorkers;
