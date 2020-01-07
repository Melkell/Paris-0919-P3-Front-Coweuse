// Librairies
import React from 'react'

// Styles
import './Login.css'

const Login = () => {
    return (
        <div className="Login">
            <form className="Login-Form">
                <input type="email" name="mail" placeholder="Email" />
                <input type="password" name="password" placeholder="Password" />
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default Login