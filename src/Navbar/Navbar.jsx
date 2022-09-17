import React from "react";
import ribara from "../Image/purple-removebg-preview.png";
import { NavLink,Link } from "react-router-dom";
import smile from "../Image/changedribata-removebg-preview.png";
import "./Navbar.css";

const Navbar = () => {

  return (
    <div className="container">
      <div className="navbar">
        <Link to="/">
          <img src={ribara} alt="" className="ribara" />
        </Link>
        <div className="navbar-link">
          <NavLink to="about">
            <button>About</button>
          </NavLink>
          <NavLink to="services">
            <button>Services</button>
          </NavLink>
          <NavLink to="signup">
            <button id="signup">Sign up</button>
          </NavLink>
          <NavLink to="login">
            <button id="login">Log in</button>
          </NavLink>
        </div>
      </div>

      <div className="navbar">
        <div className="navbar-left">
          <p>See and Close the gaps</p>
          <h1 className="navbar-header">
            Rank your skill and see the
            <br />
            existing gap between you
            <br />
            and your desired job
          </h1>
          <h2 className="navbar-subheader">
            Stay in touch with industry skills requirement for more than 20,000
            job roles
          </h2>
          <button className="signup">Signup</button>
        </div>
        <div className="navbar-right-img">
          <img src={smile} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
