// Librairies
import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./Header";

// Styles
import "./Ressources.css";
import FormOutils from './FormOutils';
import FormCollab from './FormCollab';
import { mapItems } from "./helpers";

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
  const [modalAddCollab, setModalAddCollab] = useState(false);
  const [modalAddTool, setModalAddTool] = useState(false);
  const [tools, setTools] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:4000/api/dashboard/equipements`)
      .then((result) => setTools(result.data))
  }, [])

  const addCollab = () => {
    setModalAddCollab(!modalAddCollab);
  };

  const addTool = () => {
    setModalAddTool(!modalAddTool);
  };

  // useEffect(() => {
  //     fetch()
  //     .then(response => response.json())
  //     .then(data => this.setState({ data }));
  // }, [])

  return (
    <div className="ressources-global">
      <div className="ressources-collab">
        <div className="theme">LISTE DES COLLABORATEURS</div>
        <div className="collab-global">
          <div className="collab-filter-add">
            <div className="filter">
              <select className="select-ressources">
                <option value="">Trier par</option>
                <option value="noms">Noms</option>
                <option value="roles">Rôles</option>
                <option value="missions">Missions</option>
              </select>
            </div>
            <div className="button-add">
              <button onClick={addCollab}>Ajouter</button>
            </div>
          </div>
          <div>

          </div>
          {modalAddCollab ? (
            <div className="add-modal" clickOutside={addCollab}>
              <FormCollab />
            </div>
          ) : (
              ""
            )}
        </div>
      </div>
      <div className="ressources-outils">
        <div className="theme">LISTE DES OUTILS</div>
        <div className="outils-global">
          <div className="outils-filter-add">
            <div className="filter">
              <select className="select-ressources">
                <option value="">Trier par</option>
                <option value="noms">Noms</option>
                <option value="roles">Rôles</option>
                <option value="missions">Missions</option>
              </select>
            </div>
            <div className="button-add">
              <button onClick={addTool}>Ajouter</button>
            </div>
          </div>
          <div>
          {tools.map(tool => <div className="card-tool"><p>Numero : {tool.id}</p><p> Nom : {tool.name}</p></div>)}
          </div>
          {modalAddTool ? (
            <div className="add-modal" clickOutside={addTool}>
              <FormOutils />
            </div>
          ) : (
              ""
            )}
        </div>
      </div>
    </div>
  );
};

export default Ressources;
