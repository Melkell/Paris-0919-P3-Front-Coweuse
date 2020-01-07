// Librairies
import React from 'react'

import Agenda from '../components/Agenda'

// Style
import './Dashboard.css'

const Dashboard = () => {
    return (
        <div className="Dashboard">
            <div className="Dashboard-Meteo">Meteo</div>
            <div className="Dashboard-Schedule">
                <Agenda />
            </div>
            <div className="Dashboard-List">List</div>
        </div>
    )
}

export default Dashboard
