import React, { useState } from "react";
import "../style/style.css";
import logo from "../assets/mister-spex-logo.svg";
import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";

const Home = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [persons, setPersons] = useState([
    {
      startDate: "",
      birthday: "",
      gender: "",
      showThirdBox: false,
      showComplete: false,
    },
  ]);

  const isPersonValid = (person) =>
    person.startDate &&
    person.birthday &&
    person.gender &&
    person.gender !== "Gechlecht";

  const handlePersonChange = (index, field, value) => {
    const updatedPersons = [...persons];
    updatedPersons[index][field] = value;
    setPersons(updatedPersons);
  };

  const addNewPerson = () => {
    setPersons([
      ...persons,
      {
        startDate: "",
        birthday: "",
        gender: "",
        showThirdBox: false,
        showComplete: false,
      },
    ]);
  };

  const handleShowTarife = (index) => {
    const updatedPersons = persons.map((p, i) =>
      i === index ? { ...p, showThirdBox: true } : p
    );
    setPersons(updatedPersons);
  };

  const handleShowComplete = (index) => {
    const updatedPersons = persons.map((p, i) =>
      i === index ? { ...p, showComplete: !p.showComplete } : p
    );
    setPersons(updatedPersons);
  };

  const handleComplete = () => {
    setActiveStep(2);
  };

  return (
    <div className="main-container">
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
      <div className="container">
        <div className="stepper">
          <div className="step active">
            <div className="step-number">1</div>
            <div className="step-label">Beitrag</div>
          </div>
          <div className={`step ${activeStep === 2 ? "active active2" : ""}`}>
            <div className="step-number">2</div>
            <div className="step-label">Antragsdaten</div>
          </div>
          <div className={`step ${activeStep === 3 ? "active3" : ""}`}>
            <div className="step-number">3</div>
            <div className="step-label">Zusammenfassung</div>
          </div>
        </div>
        {/* First Step */}
        {activeStep === 1 && (
          <FirstStep
            persons={persons}
            handlePersonChange={handlePersonChange}
            isPersonValid={isPersonValid}
            handleShowTarife={handleShowTarife}
            handleShowComplete={handleShowComplete}
            addNewPerson={addNewPerson}
          />
        )}
        {activeStep === 2 && <SecondStep />}
      </div>
      {/* Plus Button */}
      <div className="plus-container" onClick={addNewPerson}>
        <i className="bi bi-plus-circle"></i>
        Weitere Person versichern
      </div>

      {/* Complete Container */}
      {persons.some((person) => person.showComplete) && (
        <div className="complete-container">
          <p className="complete-text">
            Ihr ausgewählter Tarif: Beitrag für eine Person: 13,45 EUR / Monat
          </p>
          <button
            id="completeBtn"
            className="information-input complete-btn"
            onClick={handleComplete}
          >
            Jetzt Abschließen
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;
