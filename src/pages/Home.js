import React, { useEffect, useState } from "react";
import "../style/style.css";
import logo from "../assets/mister-spex-logo.svg";

const Home = () => {
  const [persons, setPersons] = useState([
    { startDate: "", birthday: "", gender: "" },
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
    setPersons([...persons, { startDate: "", birthday: "", gender: "" }]);
  };

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
        {persons.map((person, index) => (
          <div className="information-container" key={index}>
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
                Online Abschlüsse für 16 und 17 Jährige sind aktuell nicht
                möglich (PDF-Antrag nutzen)
              </div>
              <div className="information-date-box">
                <div className="date-wrapper">
                  <input
                    type="date"
                    id="startDate"
                    className={`information-input information-date ${
                      person.startDate ? "typed" : ""
                    }`}
                    placeholder="Beginn der Versicherung"
                    value={person.startDate}
                    onChange={(e) =>
                      handlePersonChange(index, "startDate", e.target.value)
                    }
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
                  type="date"
                  id="birthday"
                  className={`information-input information-date information-date-2 ${
                    person.birthday ? "typed" : ""
                  }`}
                  placeholder="Geburtsdatum"
                  value={person.birthday}
                  onChange={(e) =>
                    handlePersonChange(index, "birthday", e.target.value)
                  }
                />
                <select
                  id="gender"
                  className={`information-input information-select ${
                    person.gender && person.gender !== "Gechlecht"
                      ? "typed"
                      : ""
                  }`}
                  value={person.gender}
                  onChange={(e) =>
                    handlePersonChange(index, "gender", e.target.value)
                  }
                >
                  <option value="Gechlecht">Geschlecht</option>
                  <option value="weiblich">Weiblich</option>
                  <option value="männlich">Männlich</option>
                </select>
                <button
                  id="submitBtn"
                  className={`information-input information-button submit-btn ${
                    isPersonValid(person) ? "enabled" : ""
                  }`}
                  disabled={!isPersonValid(person)}
                >
                  Tarife Anzeigen
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* Plus Button */}
        <div className="plus-container" onClick={addNewPerson}>
          <i className="bi bi-plus-circle"></i>
          Weitere Person versichern
        </div>
      </div>
    </div>
  );
};

export default Home;
