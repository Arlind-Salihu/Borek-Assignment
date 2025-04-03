import React from "react";
import "../style/style.css";
import logo from "../assets/mister_spex_logo.svg";

const Home = () => {
  return (
    <div className="body">
      <div className="navbar">
        <div className="nav-header">
          Home
          <img alt="" src={logo} width="200" />
          <div className="nav-header-items">
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
            </ul>
          </div>
        </div>
        <div className="nav-menu">
          <ul>
            <li>a</li>
            <li>b</li>
            <li>c</li>
            <li>d</li>
            <li>e</li>
            <li>f</li>
            <li>g</li>
            <li>h</li>
          </ul>
        </div>
      </div>
      <div className="container"></div>
    </div>
  );
};

export default Home;
