import React from 'react';

export default function Contact() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
        <p className="text-xl text-gray-600 mb-8">
          We'd love to hear from you and discuss how we can help your business grow
        </p>
        <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
          Contact Us
        </button>
      </div>
    </div>
  );
}