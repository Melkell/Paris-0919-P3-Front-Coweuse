// Librairies
import React, { useState, useEffect } from 'react'
import Agenda from '../components/Agenda'
import MissList from '../components/MissList'

// Style//
import './Dashboard.css'
import Meteo from '../components/Meteo'
import Listemission from './Listemission';

const Dashboard = () => {
	const [addMission, setaddMission] = useState(false);
	const [items, setItems] = useState([]);

	const getMission = (e) => {
		setaddMission(!addMission)
		
	}

	return (
		<div className="Dashboard">
			<div className="Dashboard-Meteo">Meteo</div>
			<div className="Dashboard-Schedule">
				<Agenda addMission={addMission}/>
			</div>
			<div className="Dashboard-List">
				<MissList getMission={getMission} />
			</div>
		</div>
	)
}

export default Dashboard
