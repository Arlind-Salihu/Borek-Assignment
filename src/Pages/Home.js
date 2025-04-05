import React from "react";
import "../style/style.css";
import logo from "../assets/mister-spex-logo.svg";

const Home = () => {
  return (
    <div className="body">
      {/* Navbar */}
      <div className="navbar">
        <div className="nav-header">
          <span className="nav-help">
            <i class="bi bi-question-circle"></i>
            Hilfe & Beratung
          </span>
          <img alt="logo" src={logo} className="nav-logo" />
          <div className="nav-header-items">
            <ul>
              <li>
                <i class="bi bi-search"></i>
              </li>
              <li>
                <i class="bi bi-geo-alt"></i>
              </li>
              <li>
                <i class="bi bi-person"></i>
              </li>
              <li>
                <i class="bi bi-heart"></i>
              </li>
              <li>
                <i class="bi bi-handbag"></i>
              </li>
            </ul>
          </div>
        </div>
        <div className="nav-menu">
            <a>Brillen</a>
            <a>Sonnenbrillen</a>
            <a>Kontaktlinsen</a>
            <a>Marken</a>
            <a>Boutique</a>
            <a>Kostenloser Sehtest</a>
            <a>Stores</a>
            <a>Winter Deal</a>
        </div>
      </div>
      {/* Container */}
      <div className="container">
        {/* Steps */}
        <div class="stepper">
          <div class="step active">
            <div class="step-number">1</div>
            <div class="step-label">Beitrag</div>
          </div>
          <div class="step">
            <div class="step-number">2</div>
            <div class="step-label">Antragsdaten</div>
          </div>
          <div class="step">
            <div class="step-number">3</div>
            <div class="step-label">Zusammenfassung</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
