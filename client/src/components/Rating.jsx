import React, { useState } from 'react';

// Array to represent the 5 stars
const STAR_COUNT = 5;

const StarRatingComponent = ({ initialRating = 0, onChange }) => {
  const [rating, setRating] = useState(initialRating);
  const [hovered, setHovered] = useState(0);

  // Handle when a star is clicked
  const handleRatingChange = (value) => {
    setRating(value);
    onChange(value); // Callback to parent if needed
  };

  // Handle when a star is hovered
  const handleMouseEnter = (value) => {
    setHovered(value);
  };

  // Handle when the mouse leaves the stars
  const handleMouseLeave = () => {
    setHovered(0);
  };

  // Render the stars
  const renderStars = () => {
    return [...Array(STAR_COUNT)].map((_, index) => {
      const starValue = index + 1;
      const isFilled = starValue <= (hovered || rating);
      const starClass = isFilled ? "text-yellow-400" : "text-gray-300";

      return (
        <svg
          key={starValue}
          xmlns="http://www.w3.org/2000/svg"
          className={`w-6 h-6 cursor-pointer ${starClass}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          onClick={() => handleRatingChange(starValue)}
          onMouseEnter={() => handleMouseEnter(starValue)}
          onMouseLeave={handleMouseLeave}
        >
          <path
            d="M10 15l-5.5 3 2-6.5L0 6.5l6.9-.5L10 0l3.1 5.9L20 6.5l-6.5 5.5 2 6.5L10 15z"
          />
        </svg>
      );
    });
  };

  return (
    <div className="flex items-center space-x-1">
      {renderStars()}
    </div>
  );
};

export default StarRatingComponent;
