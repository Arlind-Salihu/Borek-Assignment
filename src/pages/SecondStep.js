import React, { useState } from "react";
import "../style/style.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SecondStep = ({ setActiveStep }) => {
  const [loadingStates, setLoadingStates] = useState([false]);

  const handleBack = () => {
    setActiveStep(1);
  };

  const handleDownload = () => {
    toast.success("Dokumente wurden erfolgreich heruntergeladen!", {
      position: "top-right",
      autoClose: 3000,
    });
  };

  const handleButtonClick = (index) => {
    const newLoadingStates = [...loadingStates];
    newLoadingStates[index] = true;
    setLoadingStates(newLoadingStates);

    setTimeout(() => {
      newLoadingStates[index] = false;
      setLoadingStates([...newLoadingStates]);
      handleBack();
    }, 1500);
  };

  return (
    <div className="application-container">
      <ToastContainer />
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

      <div className="application-submit">
        <div className="application-title">Ihre Vertragsunterlagen</div>
        <div className="application-description">
          Speichern Sie bitte vor dem Online-Abschluss die Allgemeinen
          Vertragsunterlagen (Verbraucherinformationen und weitere Hinweise),
          die Tarifunterlagen (Allgemeine Versicherungsbedingungen und
          Produktinformationsblatt) sowie die Einwilligungs-und
          Schweigepflichtentbindungserklärung (Datenschutzrechtliche
          Einwilligungserklärung zu Ihren Gesundheitsdaten und sonstigen nach §
          203 StGB geschützten Daten) oder drucken Sie diese aus. Diese
          Unterlagen sind - neben dem Antrag, dem Versicherungsschein und
          etwaigen Nachträgen - Grundlage Ihres Versicherungsvertrags.
        </div>

        <div className="application-document">
          <input
            type="text"
            id="document"
            readOnly
            className="information-input application-input application-download"
            placeholder="Alle Dokumente Herunterladen"
            onClick={handleDownload}
          />
        </div>
      </div>

      <div className="application-third-box">
        <button
          id="backBtn"
          className="information-input information-button application-button"
          onClick={() => {
            handleButtonClick(0);
          }}
          disabled={loadingStates[0]}
        >
          {loadingStates[0] ? <span className="spinner"></span> : "Zurück"}
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
