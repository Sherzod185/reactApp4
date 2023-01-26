import React from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import "./about.css"
const About = () => {

  return (
    <div className="container">
      <div className="block">
        <div className="box">
          <div className="navbar">
            <h1 className="titlesa" style={{ color: "#fff" }}>
              Category
            </h1>
            <div className="catigoria">
              <Link to="/about/mens">Men's clothing</Link>
            </div>
            <div className="catigoria">
              <Link to="/about/women">Women's clothing</Link>
            </div>
            <div className="catigoria">
              <Link to="/about/jewelery">Jewelery</Link>
            </div>
            <div className="catigoria">
              <Link to="/about/electronic">Electronic</Link>
            </div>
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default About;
