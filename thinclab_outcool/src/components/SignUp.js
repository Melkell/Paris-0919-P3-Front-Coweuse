/* eslint-disable no-undef */
import React from "react";
import "./SignUp.css";
import logo from "../img/oc.png";
import Header from "./Header";
import DashboardAdmin from "../screens/DashboardAdmin";
import Dashboard from "../screens/Dashboard";
import { useHistory } from "react-router-dom";
// import {MyContext} from "./MyContext";

const SignUp = () => {
  // const {dispatch} = React.useContext(MyContext);
  let history = useHistory();
  const initialState = {
    first_name:"",
    last_name:"",
    role_id: "",
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
        first_name: data.first_name,
        last_name: data.last_name,
        role_id: data.role_id,
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
    // .then(resJson => {
    //   dispatch({
    //     type:"REGISTER",
    //     payload: resJson
    //   });
    // });
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

    const option = () => {
      if (option === "Administrateur") {
        return(<DashboardAdmin />)
      } else if (option === "Collaborateur") {
        return(<Dashboard />)
      }
    };


  return (
    <div>
      <form class="form-style-9" onSubmit={handleFormSubmit}>
        <img src={logo} class="logoForm" alt="logo of the form" />
        <ul>
          <li>
            <input
              type="text"
              value={data.last_name}
              onChange={handleInputChange}
              name="last_name"
              class="field-style field-full align-none"
              placeholder="Nom"
            />
          </li>
          <li>
            <input
              type="text"
              value={data.first_name}
              onChange={handleInputChange}
              name="first_name"
              class="field-style field-full align-none"
              placeholder="Prénom"
            />
          </li>
          <select className="select-status">
            <option value="">--Choisir une production--</option>
            <option value="blé">Blé</option>
            <option value="avoine">Avoine</option>
            <option value="bovides">Bovidés</option>
            <option value="volailles">Volailles</option>
          </select>
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
          <select className="select-status" onChange={handleSelectChange} >
            <option value="">--Choisir un statut--</option>
            <option value="1" name="role_id">Administrateur</option>
            <option value="2" name="role_id">Collaborateur</option>
          </select>
          <li>
            <input type="submit" value="Connexion" />
          </li>
        </ul>
      </form>
    </div>
  );
};

export default SignUp;
