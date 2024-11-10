
import React, { useState } from "react";
import { Link } from "react-router-dom";

import services from "../data/services";
import useGetServiceProvider from "../hooks/useGetServiceProvider";

import logo from "../assets/Your_paragraph_text-removebg-preview.png";

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Your_paragraph_text-removebg-preview.png';
import services from '../data/services';
import useGetServiceProvider from '../hooks/useGetServiceProvider';


const Nav = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const openDropdown = () => setIsDropdownOpen(true);
  const closeDropdown = () => setIsDropdownOpen(false);

  const { loading, providers, setProviders, getProviders } =
    useGetServiceProvider();
  async function handleSubmit(service) {
    const providers = await getProviders(service);
    console.log(providers);
  }
  return (
    <nav className="bg-blue-800 text-white">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        {/* Brand */}
        <Link to="/" className="text-2xl font-bold">

          KaamBolo
        </Link>

  <h2 className="anton-sc-regular">KaamBolo</h2>
</Link>

        {/* </Link> */}


        {/* Toggle Button (for mobile) */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden focus:outline-none transform -translate-y-1"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={
                isMobileMenuOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>

        {/* Menu Links */}
        <div
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } md:flex items-center space-x-6`}
        >
          {/* Dropdown Menu */}
          <div
            className="relative"
            onMouseEnter={openDropdown}
            onMouseLeave={closeDropdown}
          >
            <button className="text-lg font-semibold hover:text-yellow-400">
              Find a Service
            </button>
            {isDropdownOpen && (
              <div
                className="absolute left-0 w-48 bg-white text-gray-900 rounded-md shadow-lg z-20"
                onMouseEnter={openDropdown}
                onMouseLeave={closeDropdown}
              >
                <ul className="py-2">
                  {services.map((service, index) => {
                    return (
                      <li key={index}>
                        <Link
                          to={`/find-a-service/${service}`}
                          onClick={(e) => {
                            handleSubmit(service);
                          }}
                          className="block px-4 py-2 hover:bg-gray-200"
                        >
                          {service}
                        </Link>
                      </li>
                    );
                  })}
                  {/* <li>
                    <Link
                      to="/find-a-service/plumber"
                      className="block px-4 py-2 hover:bg-gray-200"
                    >
                      Plumber
                    </Link>
                  </li> */}
                  {/* <li>
                    <Link
                      to="/find-a-service/electrician"
                      className="block px-4 py-2 hover:bg-gray-200"
                    >
                      Electrician
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/find-a-service/carpenter"
                      className="block px-4 py-2 hover:bg-gray-200"
                    >
                      Carpenter
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/find-a-service/painter"
                      className="block px-4 py-2 hover:bg-gray-200"
                    >
                      Painter
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/find-a-service/ac-technician"
                      className="block px-4 py-2 hover:bg-gray-200"
                    >
                      AC Technician
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/find-a-service/appliance-repair"
                      className="block px-4 py-2 hover:bg-gray-200"
                    >
                      Appliance Repair
                    </Link>
                  </li> */}
                </ul>
              </div>
            )}
          </div>

          <Link
            to="/about"
            className="text-lg font-semibold hover:text-yellow-400"
          >
            About
          </Link>

          {/* Post a Job */}
          <Link
            to="/post-job"
            className="text-lg font-semibold hover:text-yellow-400"
          >
            Post a Job
          </Link>

          {/* Signup / Login */}
          <Link
            to="/signup"
            className="text-lg font-semibold hover:text-yellow-400"
          >
            Signup
          </Link>
          <span>|</span>
          <Link
            to="/login"
            className="text-lg font-semibold hover:text-yellow-400"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
