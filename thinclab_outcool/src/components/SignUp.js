import React from 'react'
import './SignUp.css'
import logo from '../img/oc.png'


const SignUp = () => {
  return (
    <div>
    <form class="form-style-9">
      <img src={logo} class="logoForm"/>
        <ul>
          <li>
            <input type="text" name="field3" class="field-style field-full align-none" placeholder="Nom" />
          </li>
          <li>
            <input type="text" name="field3" class="field-style field-full align-none" placeholder="Prénom" />
          </li>
          <select className="select-status">
            <option value="">--Choisir une production--</option>
            <option value="blé">Blé</option>
            <option value="avoine">Avoine</option>
            <option value="bovides">Bovidés</option>
            <option value="volailles">Volailles</option>
          </select>
          <li>
            <input type="email" name="field3" class="field-style field-full align-none" placeholder="Adresse mail" />
          </li>
          <li>
            <input type="password" name="field3" class="field-style field-full align-none" placeholder="Mot de passe" />
          </li>
          <select className="select-status">
            <option value="">--Choisir un statut--</option>
            <option value="admin">Administrateur</option>
            <option value="collab">Collaborateur</option>
          </select>
          <li>
            <input type="submit" value="Connexion" />
          </li>
        </ul>
    </form>
    </div>
  )
}


export default SignUp