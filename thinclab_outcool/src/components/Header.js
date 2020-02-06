// // Librairies
import React from "react";
import Logo from "../Logo/logo.jpg";
import "bootstrap/dist/css/bootstrap.min.css";

// Styles
import "./Header.css";

const Header = () => {
  return (
    <div className="Header">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="logoTest" href="/dashboardAdmin"></a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">

            <a className="nav-item nav-link" href="/dashboardAdmin">dashboardAdmin</a>
            <a className="nav-item nav-link" href="/dashboardCollab">dashboard</a>
            <a className="nav-item nav-link" href="/login">Déconnexion</a>

          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
