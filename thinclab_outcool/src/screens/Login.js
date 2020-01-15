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
			<div className="Login-Title">
				<h1>THINCLAB - OUTCOOL</h1>
			</div>
			<form className="Login-Form">
				<input className="Login-Input" type="email" placeholder="Email" value={emailInput} onChange={emailHandler} />
				<input className="Login-Input" type="password" placeholder="Password" value={passwordInput} onChange={passwordHandler} />
					<div className="Login-RememberMe">
						<input className="RememberMe" type="checkbox" name="scales" checked />		Se Souvenir de moi
						<a className="Link"href="App.js">Mot de passe oublié ?</a>
					</div>
				<input className="Login-Submit" type="submit" value="CONNEXION" />
			</form>
		</div>
	)
}

export default Login