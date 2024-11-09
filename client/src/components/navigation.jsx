import React from "react";
import { Link } from "react-router-dom";
import DropdownMenu from "./DropdownMenu";

export const Navigation = (props) => {
  const serviceMenuItems = [
    <Link to="/find-a-service/plumber">Plumber</Link>,
    <Link to="/find-a-service/electrician">Electrician</Link>,
    <Link to="/find-a-service/carpenter">Carpenter</Link>,
    <Link to="/find-a-service/painter">Painter</Link>,
    <Link to="/find-a-service/ac-technician">AC Technician</Link>,
    <Link to="/find-a-service/appliance-repair">Appliance Repair</Link>,
  ];
  

  return (
    <nav id="menu" className="navbar navbar-default ">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <Link className="navbar-brand page-scroll" to="/home">
            KaamBolo
          </Link>
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <DropdownMenu
                buttonText="Find a service"
                menuItems={serviceMenuItems}
              />
            </li>
            <li>
              <Link to="/post-job" className="page-scroll">
                Post a job
              </Link>
            </li>
            <li>
              <Link to="/signup-login" className="page-scroll">
                Signup / login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
