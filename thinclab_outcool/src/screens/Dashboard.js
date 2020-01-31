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
	const [itemIndex, setItemIndex] = useState(0);
	// const [userMissions, setUserMissions] = useState([]);

	const admin = false;

	useEffect(() => {
		axios.get(`http://localhost:4000/api/dashboard/missions`)
			.then((result) => setItems(result.data))
	})


	const getMission = (e) => {
		const selected = Number(e.target.id)
		setItemIndex(selected)
		setaddMission(!addMission)
	}

	return (
		<div className="Dashboard">
			<div className="Left">
				<div className="Dashboard-Meteo">
					<Meteo />
				</div>
				<div className="Dashboard-Schedule">
					<Agenda addMission={addMission} missions={items} selected={itemIndex} />
				</div>
			</div>
			<div className="Dashboard-List">
				<MissList getMission={getMission} missions={items} admin={admin} />
				<div className="Filter-List">
					<div className="Head-filter">
						<div className="logo"></div>
						<p>Filter</p>
					</div>
					<div className="Body-filter">
						<div>
							<label className="switch">
								<input name="checkbox" type="checkbox" />
								<span class="slider round"></span>
							</label>
						</div>
						<div>
							<label className="switch">
								<input name="checkbox" type="checkbox" />
								<span class="slider round"></span>
							</label>
						</div>
						<div>
							<label className="switch">
								<input name="checkbox" type="checkbox" />
								<span class="slider round"></span>
							</label>
						</div>
						<div>
							<label className="switch">
								<input name="checkbox" type="checkbox" />
								<span class="slider round"></span>
							</label>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}



export default Dashboard
