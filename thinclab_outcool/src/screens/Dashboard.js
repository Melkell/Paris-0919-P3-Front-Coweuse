// Librairies
import React, { useState, useEffect } from 'react'

import axios from 'axios'

import Agenda from '../components/Agenda'
import MissList from '../components/MissList'
import Meteo from '../components/Meteo'

// Style//
import './Dashboard.css'

const Dashboard = () => {
	const [addMission, setaddMission] = useState(false);
	const [items, setItems] = useState([]);
	const [item, setItem] = useState([]);

	useEffect(() => {
		console.log("hello use effect")
		axios.get(`http://localhost:4000/api/dashboard/missions`)
		.then((result) => setItems(result.data))
	}, [])


	const getMission = (e) => {
		setaddMission(!addMission)
		const selected = Number(e.target.id)
		setItem(items[selected])
	}

	return (
		<div className="Dashboard">
			<div className="Left">
				<div className="Dashboard-Meteo">
					<Meteo />
				</div>
				<div className="Dashboard-Schedule">
					<Agenda addMission={addMission} mission={item}/>
				</div>
			</div>
			<div className="Dashboard-List">
				<MissList getMission={getMission} missions={items}/>
			</div>
		</div>
	)
}



export default Dashboard
