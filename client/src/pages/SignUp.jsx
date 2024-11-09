import React, { useState } from 'react';
import { Autocomplete,TextField } from '@mui/material';
import { skillOptions } from '../data/skills';
function Signup() {
    const [selectedSkills, setSelectedSkills] = useState([]);
  const [inputs, setInputs] = useState({
    fullName: "",
    email: "",
    password: "",
    Skills:[],
    confirmPassword: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    // Add your submit logic here, like calling an API
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-700 mb-6">Sign Up</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Full Name Field */}
          <div>
            <label className="block text-gray-600">Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              value={inputs.fullName}
              onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-gray-600">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={inputs.email}
              onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-gray-600">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={inputs.password}
              onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Confirm Password Field */}
          <div>
            <label className="block text-gray-600">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm your password"
              value={inputs.confirmPassword}
              onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <Autocomplete
        multiple
        options={skillOptions}
        getOptionLabel={(option) => option.title}
        value={selectedSkills}
        onChange={(event, newValue) => {
            setSelectedSkills(newValue)
            inputs.Skills=selectedSkills
        }}
        renderInput={(params) => (
          <TextField {...params} label="Skills" placeholder="Select skills" />
        )}
      />
          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full py-2 mt-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Sign Up
            </button>
          </div>

          {/* Login Link */}
          <div className="text-center mt-4">
            <p className="text-sm text-gray-600">
              Already have an account?{' '}
              <a href="/login" className="text-blue-500 hover:underline">Login here</a>
            </p>
          </div>

        </form>
      </div>
    </div>
  );
}

export default Signup;
