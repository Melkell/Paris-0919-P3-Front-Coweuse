/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./Formconnection.css";
import logo from "../img/oc.png";
import { useHistory } from "react-router-dom";


const Formconnection = () => {
  let history= useHistory();

  const initialState = {
    email: "",
    password: "",
    isSubmitting: false,
    errorMessage: null
  }

  const [data, setData] = React.useState(initialState);

  const handleSelectChange = event => {
    setData({
      ...data,
      role_id: event.target.value
    })
  }

  const handleInputChange = event => {    
    setData({
      ...data,
      [event.target.name]: event.target.value
    });
  };
  
  const handleFormSubmit = event => {
    event.preventDefault();
    setData({
      ...data,
      isSubmitting: true,
      errorMessage: null
    });
    fetch("http://localhost:4000/api/register", {
      method: "post",
      headers : {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        email: data.email,
        password: data.password
      })
    })
    .then(res => {
      if (res.ok) {
        console.log("log res", res);
        const path = (initialState.role_id === "Collaborateur" ? "/dashboardCollab" : "/dashboardAdmin")
        history.push(path)
        return res.json;
      }
      throw res;
    })

    try {
      
    } catch (error) {
      setData({
        ...data,
        isSubmitting: false,
        errorMessage: error.message || error.statusText
      });
    }; 

    console.log('formSubmit:', data)
  }


  return (
    <div>
      <form class="form-style-9" onSubmit={handleFormSubmit}>
        <img src={logo} class="logoForm" />
        <ul>
          <li>
            <input
              type="email"
              value={data.email}
              onChange={handleInputChange}
              name="email"
              class="field-style field-full align-none"
              placeholder="Adresse mail"
            />
          </li>
          <li>
            <input
              type="password"
              value={data.password}
              onChange={handleInputChange}
              name="password"
              class="field-style field-full align-none"
              placeholder="Mot de passe"
            />
          </li>
          <select className="select-status" onChange={handleSelectChange}>
            <option value="">--Choisir un statut--</option>
            <option value="admin" name="role_id">Administrateur</option>
            <option value="collab" name="role_id">Collaborateur</option>
          </select>
          <li>
            <input type="submit" value="Connexion" />
          </li>
        </ul>
      </form>
    </div>
  );
};


export default Formconnection