import React from 'react'
// import { NavLink } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    let activeStyle = {
        textDecoration: "underline",
        backgroundColor: "bisque",
        color: "black"
      };
  return (
    <div className='navbar'>
      <ul>
          <li>
          {" "}
          <NavLink
            style={({ isActive }) => {
              return isActive ? activeStyle : null;
            }}
            className="navlinks"
            to="/"
          >
            HOME
          </NavLink>
          </li>
          <li>
          <NavLink
            style={({ isActive }) => {
              return isActive ? activeStyle : undefined;
            }}
            className="navlinks"
            to="/about"
          >
            ABOUT
          </NavLink>
          </li>
          <li>
          <NavLink
            style={({ isActive }) => {
              return isActive ? activeStyle : undefined;
            }}
            className="navlinks"
            to="/contact"
          >
            Contact
          </NavLink>
          </li>
      </ul>
    </div>
  )
}

export default Navbar
