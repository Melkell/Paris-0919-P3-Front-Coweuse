import React from 'react'

import "bootstrap/dist/css/bootstrap.min.css";
import './Header.css'

const Header = () => {

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Thinklab</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-item nav-link active" href="#">Outcool <span className="sr-only">(current)</span></a>
                        <a className="nav-item nav-link" href="#">Dashboard</a>
                        <a className="nav-item nav-link" href="#">Agenda</a>
                        <a className="nav-item nav-link " href="#">3truc</a>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Header