import React from "react";
import "../style/style.css";

const SecondStep = () => {
  return (
    <div className="application-container">
      <div className="application-first-box">
        <div class="application-title">
          <p>Persönliche Daten der zu versichernden person</p>
          <p className="application-tarif">Ihr ausgewählter Tarif:</p>
        </div>
        <div className="information-third-box application-ambulant">
          <div className="information-ambulant">
            <label className="checkbox-label" htmlFor="ambulant">
              <span className="checkbox-dark-text">
                <input
                  type="checkbox"
                  name="ambulant"
                  id="ambulant"
                  className="tarif-checkbox1"
                />
                Union Krankenversicherung AG
              </span>
              <span className="checkbox-light-text">
                <input
                  type="checkbox"
                  name="ambulant"
                  id="ambulant"
                  readOnly
                  className="tarif-checkbox2"
                />
                Beitrag ausgewählte(r) Tarif(e): 13,45 EUR / Monat
              </span>
            </label>
            <p>VorsorgePRIVAT</p>
            <p>13,45 EUR / Monat</p>
            <i className="bi bi-exclamation-circle"></i>
          </div>
        </div>
      </div>
      <div className="application-second-box">
        <div class="application-title">
          Persönliche Daten der zu versichernden person
        </div>
        <div className="information-inputs application-inputs">
          <input
            type="text"
            id="vorname"
            className="information-input application-input"
            placeholder="Vorname"
          />
          <input
            type="text"
            id="nachname"
            className="information-input application-input"
            placeholder="Nachname"
          />
          <input
            type="text"
            id="geburtsdatum"
            className="information-input application-input"
            placeholder="Geburtsdatum"
          />
        </div>
      </div>
      <div className="application-third-box">
        <button
          id="submitBtn"
          className="information-input information-button application-button"
        >
          Zuruck
        </button>
        <button
          id="submitBtn"
          className="information-input information-button application-button"
        >
          Beantragung Starten
        </button>
      </div>
    </div>
  );
};

export default SecondStep;
