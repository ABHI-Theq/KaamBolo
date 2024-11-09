import React from "react";
import { Link } from "react-router-dom";

export const Navigation = (props) => {
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
              <Link to="/find-a-service" className="page-scroll">
                Find a service
              </Link>
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
