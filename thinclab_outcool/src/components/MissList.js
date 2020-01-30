import React from "react"

import List from "./List.js"

import './MissList.css'

const MissList = ({ getMission, missions, admin }) => {
	return (
		<div className= {admin ? "Misslist-admin" : "Misslist"}>
			{missions.map(item => (<List key={item.id} props={item} getMission={getMission} admin={admin} />))}
		</div>
	)
}

export default MissList