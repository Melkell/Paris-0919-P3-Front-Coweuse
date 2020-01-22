// Librairies
import React from 'react'

// Style
import './Dashboard.css'
import Meteo from '../components/Meteo'
import Listemission from './Listemission';

const Dashboard = () => {
    return (
        <div className="Dashboard">
            <div className="Dashboard-Meteo">
                <Meteo />
            </div>
            <div className="Dashboard-Schedule"></div>
            <div className="Dashboard-List"> <div className="Dashboard-Listemission">
                <Listemission />
            </div></div>
        </div>
    )
}

export default Dashboard
