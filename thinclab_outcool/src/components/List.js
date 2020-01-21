import React from "react";

import "./List.css";

const List = ({ props, getMission }) => {
	console.log(props)
	return (
		<div className="List" id={props.id} onClick={getMission}>
			<div>
				<p className="nameMission">Nom : {props.name}</p>
			</div>
			<div>
				<p className="date">Tache : {props.tache_id}</p>
			</div>
		</div>
	)
}

export default List;