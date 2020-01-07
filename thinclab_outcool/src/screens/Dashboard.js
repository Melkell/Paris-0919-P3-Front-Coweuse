// Librairies
import React from 'react'

// Style
import './Dashboard.css'
import MissList from '../components/MissList'

const Dashboard = () => {
    return (
        <div className="Dashboard">
            <div className="Dashboard-Meteo">Meteo</div>
            <div className="Dashboard-Schedule">Schedule</div>
            <div className="Dashboard-List">
            <MissList />
            </div>
        </div>
    )
}

export default Dashboard
