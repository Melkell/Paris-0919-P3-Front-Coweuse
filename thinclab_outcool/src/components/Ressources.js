// Librairies
import React, { useState, useEffect } from "react";
import "./Header";

// Styles
import "./Ressources.css";

const tab = [
  {
    id: 1,
    firstname: "Nicolas",
    lastname: "Dupont",
    role: "chef d'exploitation",
    email: "dupont@gmail.com",
    mission: 34
  },
  {
    id: 2,
    firstname: "Thomas",
    lastname: "Berger",
    role: "collab",
    email: "berger@gmail.com",
    mission: 26
  },
  {
    id: 3,
    firstname: "Alain",
    lastname: "Pinot",
    role: "collab",
    email: "pinot@gmail.com",
    mission: 10
  }
];

const Ressources = () => {
  const [person, setPerson] = useState("");

  const displayList = array => {
    return array.map(elem => (
      <tr className="tableElements">
        <td className="tBody">{elem.id}</td>
        <td className="tBody">{elem.firstname}</td>
        <td className="tBody">{elem.lastname}</td>
        <td className="tBody">{elem.role}</td>
        <td className="tBody">{elem.email}</td>
        <td className="tBody">{elem.mission}</td>
      </tr>
    ));
  };

  // useEffect(() => {
  //     fetch()
  //     .then(response => response.json())
  //     .then(data => this.setState({ data }));
  // }, [])

  return (
    <div className="ressources-global">
      <div className="ressources-collab">
        <h2>LISTE DES COLLABORATEURS</h2>
        <div className="collab-global">
          <div className="collab-filter-add">
            <div className="filter">
              <span>Trier par :</span>
              <select className="select-ressources">
                <option value="">--Choisir une option--</option>
                <option value="noms">Noms</option>
                <option value="roles">Rôles</option>
                <option value="missions">Missions</option>
              </select>
            </div>
            <div className="button-add">
              <button>Ajouter un nouvel utilisateur</button>
            </div>
          </div>
          <div>
            <table className="tableRessources">
              <th className="tHead">
                <tr className="tableElements">
                  <td className=" thId">Id</td>
                  <td className="thFirstname">Prénom</td>
                  <td className="thLastname">Nom</td>
                  <td className="thRole">Rôle</td>
                  <td className="thEmail">Email</td>
                  <td className="thMission">Mission</td>
                </tr>
              </th>
              <tbody>
                <td className="tBody">{displayList(tab)}</td>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="ressources-outils">
        <h2>LISTE DES OUTILS</h2>
        <div className="outils-global">
          <div className="outils-filter-add">
            <div className="filter">
              <span>Trier par :</span>
              <select className="select-ressources">
                <option value="">--Choisir une option--</option>
                <option value="noms">Noms</option>
                <option value="roles">Rôles</option>
                <option value="missions">Missions</option>
              </select>
            </div>
            <div className="button-add">
              <button>Ajouter un nouvel outil</button>
            </div>
          </div>
          <div>
            <table className="tableRessources">
              <th className="tHead">
                <tr className="tableElements">
                  <td className="thId">Id</td>
                  <td className="thFirstname">Prénom</td>
                  <td className="thLastname">Nom</td>
                  <td className="thRole">Rôle</td>
                  <td className="thEmail">Email</td>
                  <td className="thMission">Mission</td>
                </tr>
              </th>
              <tbody>
                <td className="tBody">{displayList(tab)}</td>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ressources;
