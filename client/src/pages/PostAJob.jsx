import React, { useState } from 'react';

const PostAJob = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    location: '',
    contact: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the form submission logic (e.g., sending data to a backend)
    console.log('Job posted:', formData);
  };

  return (
    <div className="container mx-auto p-6 bg-gray-900 text-gray-200 shadow-lg rounded-lg">
      <h2 className="text-3xl font-semibold mb-6 text-white">Post a Job</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="title" className="block text-lg font-medium text-gray-300 mb-2">
            Job Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-4 border border-gray-600 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter the job title"
            required
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-lg font-medium text-gray-300 mb-2">
            Job Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-4 border border-gray-600 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Describe the job in detail"
            rows="4"
            required
          />
        </div>

        <div>
          <label htmlFor="category" className="block text-lg font-medium text-gray-300 mb-2">
            Job Category
          </label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full p-4 border border-gray-600 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select a category</option>
            <option value="plumbing">Plumbing</option>
            <option value="electrician">Electrician</option>
            <option value="carpentry">Carpentry</option>
            <option value="painting">Painting</option>
            <option value="ac-repair">AC Repair</option>
            <option value="appliance-repair">Appliance Repair</option>
          </select>
        </div>

        <div>
          <label htmlFor="location" className="block text-lg font-medium text-gray-300 mb-2">
            Location
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full p-4 border border-gray-600 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your location"
            required
          />
        </div>

        <div>
          <label htmlFor="contact" className="block text-lg font-medium text-gray-300 mb-2">
            Contact Information
          </label>
          <input
            type="text"
            id="contact"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            className="w-full p-4 border border-gray-600 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your phone number or email"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-4 rounded-md font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
        >
          Post Job
        </button>
      </form>
    </div>
  );
};

export default PostAJob;
