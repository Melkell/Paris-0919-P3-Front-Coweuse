import React from "react"

import List from "./List.js"

import './MissList.css'

const MissList = ({ getMission, missions, admin }) => {
	const filter = 1
	return (
		<div className={admin ? "Misslist-admin" : "Misslist"}>
			{/*missions.map(item => (<List key={item.id} props={item} getMission={getMission} admin={admin} />))*/}
			{missions.filter(item => item.tache_id % filter == 0).map(item => (<List key={item.id} props={item} getMission={getMission} admin={admin} />))}
		</div>
	)
}

export default MissList