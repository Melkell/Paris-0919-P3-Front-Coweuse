// // Librairies
import React from 'react'
import Logo from '../Logo/logo.jpg'
import "bootstrap/dist/css/bootstrap.min.css";
import {  BrowserRouter as Router } from 'react-router-dom'



// Styles
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="Header">
      <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="logoTest" href="/dashboardAdmin"></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link to="/dashboardAdmin" className="nav-item nav-link">Dashboard</Link>
            <a className="nav-item nav-link active" href="/dashboardAdmin">Dashboard<span class="sr-only">(current)</span></a>
            <a className="nav-item nav-link" href="/itineraire">Itinéraire</a>
            <a className="nav-item nav-link" href="/ressourcesAdmin">Ressources</a>
            <a className="nav-item nav-link" href="/login">Déconnexion</a>
          </div>
        </div>
      </nav>
      </Router>
    </div>
  )
}

export default Header