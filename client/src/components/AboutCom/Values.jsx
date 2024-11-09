import React from 'react';
import { FaBullseye, FaAward, FaRocket } from 'react-icons/fa';

const valueCards = [
  {
    Icon: <FaBullseye size={40} color="blue" />,
    title: 'Our Mission',
    description: 'To empower businesses with innovative technology solutions that drive growth and success in the digital age.'
  },
  {
    Icon: <FaAward size={40} color="gold" />,
    title: 'Our Values',
    description: 'Excellence, integrity, and innovation guide everything we do, ensuring we deliver the highest quality solutions.'
  },
  {
    Icon: <FaRocket size={40} color="red" />,
    title: 'Our Vision',
    description: 'To be the leading force in digital transformation, setting new standards in technology innovation.'
  }
];

export default function Values() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {valueCards.map((card, index) => (
          <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 mb-4 flex items-center justify-center">
              {card.Icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
            <p className="text-gray-600">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
