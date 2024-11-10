import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

// Sample worker data (you might want to fetch this from a backend in a real scenario)
const workers = [
  {
    id: 1,
    long: 77.1189872,
    lat: 28.7405331,
    profile_pic_url:
      'https://images.unsplash.com/photo-1731084901083-cabdd7f51f91?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D',
    name: 'Worker 1',
    skill: 'Plumber',
    mobile: '123-456-7890',
    email: 'worker1@example.com',
    rating: 4.5,
  },
];

const WorkerDetail = () => {
  const { id } = useParams(); // Get the worker ID from the route params
  const worker = workers.find((worker) => worker.id === parseInt(id)); // Find the worker by ID

  const [rating, setRating] = useState(worker ? worker.rating : 0); // State for dynamic rating
  const [isRatingSubmitted, setIsRatingSubmitted] = useState(false); // State to track submission

  if (!worker) {
    return <div>Worker not found</div>; // In case worker is not found
  }

  // Handle the rating change
  const handleRatingChange = (newRating) => {
    setRating(newRating);
    setIsRatingSubmitted(false); // Reset the submission state when rating changes
  };

  // Function to render stars based on the rating
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <svg
          key={i}
          onClick={() => handleRatingChange(i)}
          xmlns="http://www.w3.org/2000/svg"
          fill={i <= rating ? 'yellow' : 'gray'}
          viewBox="0 0 24 24"
          width="24"
          height="24"
          className="cursor-pointer"
        >
          <path d="M12 2l2.4 7.8H22l-5.6 4.2L17.6 22l-5.6-4.2L6.4 22l1.2-7.8L2 9.8h7.6L12 2z" />
        </svg>
      );
    }
    return stars;
  };

  // Handle the submit rating action
  const handleSubmitRating = () => {
    // This is where you would handle the API call to save the rating
    // For now, we will just show a success message
    setIsRatingSubmitted(true);

    // Optionally, you can reset the rating after submission
    // setRating(0);
  };

  return (
    <div className="flex h-[90vh]">
      {/* Left Side: Messaging Window */}
      <div className="w-1/3 p-4 bg-gray-200">
        <div className="h-full flex flex-col justify-between bg-white rounded-lg shadow-lg">
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">Message worker</h2>
            <textarea
              placeholder="Type a message..."
              className="w-full h-20 p-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="p-4 bg-gray-100">
            <button className="w-full bg-blue-500 text-white py-2 rounded-lg">Send Message</button>
          </div>
        </div>
      </div>

      {/* Right Side: Worker Details and Rating */}
      <div className="w-2/3 p-4">
        <div className="flex flex-col bg-white rounded-lg shadow-lg p-6">
          {/* Worker Details */}
          <div className="flex items-center mb-4">
            <img
              src={worker.profile_pic_url}
              alt={worker.name}
              className="w-24 h-24 rounded-full mr-4"
            />
            <div>
              <h1 className="text-2xl font-semibold">{worker.name}</h1>
              <p className="text-gray-600">{worker.skill}</p>
              <p className="text-gray-600">Mobile: {worker.mobile}</p>
              <p className="text-gray-600">Email: {worker.email}</p>
            </div>
          </div>

          {/* Worker Rating */}
          <div className="flex items-center mb-4">
            <span className="text-lg font-semibold mr-2">Rating:</span>
            <div className="flex items-center">
              {renderStars()}
            </div>
            <span className="ml-2 text-gray-600">/ 5</span>
          </div>

          {/* Submit Rating Button */}
          <div className="mt-4">
            <button
              onClick={handleSubmitRating}
              className="w-full bg-blue-500 text-white py-2 rounded-lg"
            >
              {isRatingSubmitted ? 'Rating Submitted' : 'Submit Rating'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkerDetail;
