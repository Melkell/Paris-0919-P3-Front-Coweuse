// Librairies
import React, { useState } from 'react'

// Styles
import './Login.css'

const Login = () => {

    // States
    const [emailInput, setemailInput] = useState("")
    const [passwordInput, setpasswordInput] = useState("")

    // Input handlers
    const emailHandler = e => {
        const content = e.target.value
        setemailInput(content)
    }

    const passwordHandler = e => {
        const content = e.target.value
        setpasswordInput(content)
    }

    return (
        <div className="Login">
            <h4 className="Login-Title">Outcool - Connexion</h4>
            <form className="Login-Form">
                <input className="Login-Input" type="email" placeholder="Email" value={emailInput} onChange={emailHandler} />
                <input className="Login-Input" type="password" placeholder="Password" value={passwordInput} onChange={passwordHandler} />
                <input className="Login-Submit" type="submit" value="Se connecter" />
            </form>
        </div>
    )
}

export default Login