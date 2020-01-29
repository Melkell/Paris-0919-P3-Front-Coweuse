// Librairies
import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";


// Styles
import './Header.css'

const Header = () => {
  return (
    <div className="Header">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="logoTest" href="#"></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-item nav-link active" href="#">Outcool <span class="sr-only">(current)</span></a>
            <a class="nav-item nav-link" href="#">Compte</a>
            <a class="nav-item nav-link" href="#">Déconnexion</a>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header