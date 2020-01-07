// Librairies
import React from 'react'

// Style
import './Dashboard.css'
import Meteo from '../components/Meteo'

const Dashboard = () => {
    return (
        <div className="Dashboard">
            <div className="Dashboard-Meteo">
                <Meteo />
            </div>
            <div className="Dashboard-Schedule">Schedule</div>
            <div className="Dashboard-List">List</div>
        </div>
    )
}

export default Dashboard
