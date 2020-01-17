// Librairies
import React from 'react'
import Agenda from '../components/Agenda'
import MissList from '../components/MissList'

// Style
import './Dashboard.css'

const Dashboard = () => {
	return (
		<div className="Dashboard">
			<div className="Dashboard-Meteo">Meteo</div>
			<div className="Dashboard-Schedule">
				<Agenda />
			</div>
			<div className="Dashboard-List">
				<MissList />
			</div>
		</div>
	)
}

export default Dashboard
