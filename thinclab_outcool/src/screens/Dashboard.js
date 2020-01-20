// Librairies
import React, { useState, useEffect } from 'react'
import Agenda from '../components/Agenda'
import MissList from '../components/MissList'
import Meteo from '../components/Meteo'

// Style//
import './Dashboard.css'

const Dashboard = () => {
	const [addMission, setaddMission] = useState(false);
	const [items, setItems] = useState([]);

	const getMission = (e) => {
		setaddMission(!addMission)

	}

	return (
		<div className="Dashboard">
			<div className="Left">
				<div className="Dashboard-Meteo">
					<Meteo />
				</div>
				<div className="Dashboard-Schedule">
					<Agenda addMission={addMission} />
				</div>
			</div>
			<div className="Dashboard-List">
				<MissList getMission={getMission} />
			</div>
		</div>
	)
}



export default Dashboard
