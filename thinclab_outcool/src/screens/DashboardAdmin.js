import React, { useState, useEffect } from 'react'

import axios from 'axios'

import Agenda from '../components/Agenda'
import MissList from '../components/MissList'
import Meteo from '../components/Meteo'

import './Dashboard.css'

const DashboardAdmin = () => {
	const [items, setItems] = useState([]);
	const [itemIndex, setItemIndex] = useState(0);

	const admin = true;

	useEffect(() => {
		axios.get(`http://localhost:4000/api/exploitation/missions`)
			.then((result) => setItems(result.data))
	})

	/*const getMission = (e) => {
		const selected = Number(e.target.id)
		setItemIndex(selected)
		setaddMission(!addMission)
	}*/

	return (
		<div className="Dashboard">
			<div className="Left">
				<div className="Action">
					<div className="action-left">
						<div className="first-line">
							<div className="one"></div>
							<div className="two"></div>
						</div>
						<div className="second-line">
							<div className="square"></div>
							<div className="square"></div>
							<div className="square"></div>
							<div className="square"></div>
						</div>
						<div></div>
					</div>
					<div className="action-right"></div>
				</div>
				<div className={admin ? "Dashboard-Schedule" : "Dashboard-Schedule-admin"}>
					<Agenda missions={items} />
				</div>
			</div>
			<div className="Dashboard-List">
				<div className="info-sup">info sup</div>
				<h3>Liste missions</h3>
				<label>
					filter : 
				<input
					name="checkbox"
					type="checkbox"
				/>
				</label>
				<MissList missions={items} admin={admin} />
			</div>
		</div>
	)
}

export default DashboardAdmin