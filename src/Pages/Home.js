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
            <i className="bi bi-question-circle"></i>
            Hilfe & Beratung
          </span>
          <img alt="logo" src={logo} className="nav-logo" />
          <div className="nav-header-items">
            <ul>
              <li>
                <i className="bi bi-search"></i>
              </li>
              <li>
                <i className="bi bi-geo-alt"></i>
              </li>
              <li>
                <i className="bi bi-person"></i>
              </li>
              <li>
                <i className="bi bi-heart"></i>
              </li>
              <li>
                <i className="bi bi-handbag"></i>
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
        <div className="stepper">
          <div className="step active">
            <div className="step-number">1</div>
            <div className="step-label">Beitrag</div>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <div className="step-label">Antragsdaten</div>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <div className="step-label">Zusammenfassung</div>
          </div>
        </div>

        {/*Information*/}
        <div className="information-container">
          <div className="information-first-box">
            <div className="information-title">
              Informationen zum Online-Abschluss
            </div>
            <div className="information-description">
              Eine Rückdatierung auf den 01. des Monats ist bis zum 15. des
              Monats möglich. Online Abschlüsse sind möglich für:
              <br />
              <br />
              Erwachsene ab 18 Jahren (Versicherungsnehmer*in = versicherte
              Person)
              <br />
              Kinder bis 15 Jahre (abweichende(r) sicherungsnehmer*in)
              <br />
              Online Abschlüsse für 16 und 17 Jährige sind aktuell nicht möglich
              (PDF-Antrag nutzen)
            </div>
            <div className="information-date-box">
              <div className="date-wrapper">
                <input
                  type="date"
                  id="start-date"
                  className="information-date"
                  placeholder="Beginn der Versicherung"
                />
              </div>
            </div>
          </div>
          <div className="information-second-box">
            <div className="information-title">
              Personliche Daten der zu versichernden person
            </div>
            <div className="information-inputs">
              <input
                type="text"
                id="geburtsdatum"
                className="information-text"
                placeholder="Geburtsdatum"
              />
              <input
                type="select"
                id="gechlecht"
                className="information-select"
                placeholder="Gechlecht"
              />
              <input
                type="button"
                value="Tarife Anzeigen"
                className="information-button"
              />
            </div>
          </div>
        </div>

        {/* Plus button */}
        <div className="plus-container">
          <i className="bi bi-plus-circle"></i>
          Weitere Person versichern
        </div>
      </div>
    </div>
  );
};

export default Home;
