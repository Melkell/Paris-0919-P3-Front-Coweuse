// Librairies
import React, { useRef, useState, useEffect } from 'react'

import axios from 'axios'

import Agenda from '../components/Agenda'
import MissList from '../components/MissList'
import Meteo from '../components/Meteo'

// Style//
import './Dashboard.css'

const Dashboard = () => {

	const [filterMission, setFilterMission] = useState([])
	const [addMission, setaddMission] = useState(false);
	const [items, setItems] = useState([]);
	const [itemIndex, setItemIndex] = useState(0);
	const [userMissions, setUserMissions] = useState([]);

	const admin = false;
	const didMountRef = useRef(true)

	useEffect(() => {
		if (didMountRef.current) {
			axios.get(`http://localhost:4000/api/dashboard/missions`)
				.then((result) => setItems(result.data))
			didMountRef.current = false
		} else {
			didMountRef.current = true
		}
	})

	const getMission = (e) => {
		const selected = Number(e.target.id)
		setItemIndex(selected)
		setaddMission(!addMission)
	}

	const delMission = () => {
		console.log("del mission")
		console.log(itemIndex)
		setItems(items.splice(itemIndex,1))
	}

	const addFilter = (e) => {
		const val = Number(e.target.id)
		if (filterMission.includes(val)) {
			//doublon
		} else {
			setFilterMission(filterMission => [...filterMission, val]);
		}
	}

	return (
		<div className="Dashboard">
			<div className="Left">
				<div className="Dashboard-Meteo">
					<Meteo />
				</div>
				<div className="Dashboard-Schedule">
					<Agenda addMission={addMission} delMission={delMission} missions={items} selected={itemIndex} />
				</div>
			</div>
			<div className="Dashboard-List">
				<MissList getMission={getMission} missions={items} admin={admin} filter={filterMission} />
				<div className="Filter-List">
					<div className="Head-filter">
						<div className="logo">
							<span className="config"></span>
						</div>
						<h3>Filter</h3>
					</div>
					<div className="Body-filter">
						<div>
							<label className="switch">
								<input name="checkbox" type="checkbox" />
								<span class="slider round yellow" id="5" onClick={addFilter}></span>
							</label>
						</div>
						<div>
							<label className="switch">
								<input name="checkbox" type="checkbox" />
								<span class="slider round pink" id="2" onClick={addFilter}></span>
							</label>
						</div>
						<div>
							<label className="switch">
								<input name="checkbox" type="checkbox" />
								<span class="slider round blue" id="1" onClick={addFilter}></span>
							</label>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}



export default Dashboard
