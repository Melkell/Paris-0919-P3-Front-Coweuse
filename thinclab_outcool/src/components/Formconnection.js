import React from 'react'
import './Formconnection.css'



const Formconnection = () => {
    return (
        <form class="form-style-9">
            <ul>
                <li>
                    <input type="email" name="field3" class="field-style field-full align-none" placeholder="Adresse mail@" />
                </li>
                <li>
                    <input type="password" name="field3" class="field-style field-full align-none" placeholder="Mot de passe" />
                </li>
                <li>
                    <input type="submit" value="Connection" />
                </li>
                
            </ul>
        </form>

    )
}


export default Formconnection