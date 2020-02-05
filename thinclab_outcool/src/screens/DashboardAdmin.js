import React, { useState, useEffect } from 'react'

import axios from 'axios'

import Agenda from '../components/Agenda'
import MissList from '../components/MissList'
import TypeItin from '../components/TypeItin'
import Ressources from '../components/Ressources'

import './Dashboard.css'

const DashboardAdmin = () => {
	const [items, setItems] = useState([]);
	const [itemIndex, setItemIndex] = useState(0);
	const [filter, setFilter] = useState(false);
	const [modalItineraire, setModalItineraire] = useState(false);
	const [modalRessources, setModalRessources] = useState(false);

	const admin = true;

	useEffect(() => {
		axios.get(`http://localhost:4000/api/exploitation/missions`)
			.then((result) => setItems(result.data))
	})

	const showItineraire = () => {
		setModalItineraire(!modalItineraire);
	}

	const showRessources = () => {
		setModalRessources(!modalRessources);
	}

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
						<div className="one" onClick={showItineraire}>Ajout Mission</div>
						<div className="two" onClick={showRessources}>Ressources</div>
					</div>
					<div className="action-right"></div>
				</div>
				<div className={admin ? "Dashboard-Schedule" : "Dashboard-Schedule-admin"}>
					<Agenda missions={items} />
				</div>
			</div>
			<div className="Dashboard-List">
				<div className="info-sup">
					<div className="graph">
						Graph
					</div>
				</div>
				<h3>Liste missions</h3>
				<MissList missions={items} admin={admin} />
			</div>
			{modalItineraire ? <div className="Dashboard-modal" clickOutside={showItineraire}>
				<TypeItin />
			</div> : ''}
			{modalRessources ? <div className="ressources-modal" clickOutside={showRessources}>
			 <Ressources />
			</div> : ''}
		</div >
	)
}

export default DashboardAdmin