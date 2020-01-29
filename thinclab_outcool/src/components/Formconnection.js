import React from 'react'
import './Formconnection.css'
import logo from '../img/oc.png'


const Formconnection = () => {
    return (
        <div>
        <form class="form-style-9">
        <img src={logo} class="logoForm"/>
            <ul>
                <li>
                    <input type="email" name="field3" class="field-style field-full align-none" placeholder="Adresse mail" />
                </li>
                <li>
                    <input type="password" name="field3" class="field-style field-full align-none" placeholder="Mot de passe" />
                </li>
                <li>
                    <input type="submit" value="Connexion" />
                </li>
                
            </ul>
        </form>
        </div>

    )
}


export default Formconnection