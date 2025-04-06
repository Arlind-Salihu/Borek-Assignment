import React from "react";
import "../style/style.css";

const SecondStep = ({ persons, setActiveStep }) => {
  const handleBack = () => {
    setActiveStep(1);
  };

  return (
    <div className="application-container">
      <div className="application-first-box">
        <div className="application-title">
          <p>Persönliche Daten der zu versichernden Person</p>
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
                  checked
                  readOnly
                />
                Union Krankenversicherung AG
              </span>
              <span className="checkbox-light-text">
                <input
                  type="checkbox"
                  name="ambulant"
                  id="ambulant2"
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
        <div className="application-title">
          Persönliche Daten der zu versichernden Person
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
          id="backBtn"
          className="information-input information-button application-button"
          onClick={handleBack}
        >
          Zurück
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
