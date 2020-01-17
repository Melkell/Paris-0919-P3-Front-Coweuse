// Librairies
import React, { useState, useEffect } from 'react'
import Agenda from '../components/Agenda'
import MissList from '../components/MissList'

// Style//
import './Dashboard.css'
import Meteo from '../components/Meteo'
import Listemission from './Listemission';

const Dashboard = () => {
<<<<<<< HEAD
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
=======
    return (
        <div className="Dashboard">
            <div className="Dashboard-Meteo">
                <Meteo />
            </div>
            <div className="Dashboard-Schedule"> <div className="Dashboard-Agenda">
                <Agenda />
            </div></div>
            <div className="Dashboard-List"> <div className="Dashboard-Listemission">
                <Listemission />
            </div></div>
        </div>
    )
>>>>>>> 0e079229f3d531876697d82190bb7ce4a6954e53
}

export default Dashboard
