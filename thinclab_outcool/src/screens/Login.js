// Librairies
import React from 'react'

// Styles
import './Login.css'

const Login = () => {
    return (
        <div className="Login">
            <h4>Outcool - Connextion</h4>
            <form className="Login-Form">
                <input className="Login-Input" type="email" name="mail" placeholder="Email" />
                <input className="Login-Input" type="password" name="password" placeholder="Password" />
                <input className="Login-Submit" type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default Login