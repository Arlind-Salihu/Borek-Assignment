import React, { useState } from "react";
import "../style/style.css";

const FirstStep = ({
  persons,
  handlePersonChange,
  isPersonValid,
  handleShowTarife,
  handleShowComplete,
  addNewPerson,
}) => {
  const [collapsed, setCollapsed] = useState(persons.map(() => false));

  const toggleCollapse = (index) => {
    setCollapsed((prev) => {
      const newCollapsed = [...prev];
      newCollapsed[index] = !newCollapsed[index];
      return newCollapsed;
    });
  };

  return (
    <>
      {persons.map((person, index) => (
        <div className="information-container" key={index}>
          <div
            className={`information-first-box ${
              collapsed[index] ? "padding-collapsed" : ""
            }`}
          >
            <div className="information-title first-title">
              <p>Informationen zum Online-Abschluss</p>
              <i
                className={`bi ${
                  collapsed[index]
                    ? "title-icon bi-chevron-down"
                    : "title-icon bi-chevron-up"
                }`}
                onClick={() => toggleCollapse(index)}
              ></i>
            </div>
            <div
              className={`information-description ${
                collapsed[index] ? "collapsed" : ""
              }`}
            >
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
            <div
              className={`information-date-box ${
                collapsed[index] ? "collapsed" : ""
              }`}
            >
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
              Personliche Daten der zu versichernden Person
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
                  person.gender && person.gender !== "Gechlecht" ? "typed" : ""
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
                className={`information-input information-button ${
                  isPersonValid(person) ? "enabled" : ""
                }`}
                disabled={!isPersonValid(person)}
                onClick={() => handleShowTarife(index)}
              >
                Tarife Anzeigen
              </button>
            </div>
          </div>
          {person.showThirdBox && (
            <div className="information-third-box">
              <div className="information-title">Ambulant</div>
              <div className="information-ambulant">
                <label className="checkbox-label" htmlFor="ambulant">
                  <span className="checkbox-dark-text">
                    <input
                      type="checkbox"
                      name="ambulant"
                      id="ambulant"
                      className="tarif-checkbox1"
                      onClick={() => handleShowComplete(index)}
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
          )}
        </div>
      ))}
      {/* Plus Button */}
      <div className="plus-container" onClick={addNewPerson}>
        <i className="bi bi-plus-circle"></i>
        Weitere Person versichern
      </div>
    </>
  );
};

export default FirstStep;
