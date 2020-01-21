import React from "react"

import List from "./List.js"

import './MissList.css'

const MissList = ({ getMission, missions }) => {
	return (
		<div className="Misslist">
			{missions.map(item => (<List props={item} getMission={getMission} />))}
		</div>
	)
}

export default MissList