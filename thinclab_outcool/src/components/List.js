import React from "react";

import "./List.css";

const List = ({ props, getMission }) => {
	return (
		<div className="List" id={props.id} onClick={getMission}>
			<div>
				<p className="nameMission">Mission : {props.name}</p>
			</div>
			<div>
				<p className="date">Tache_id : {props.tache_id}</p>
			</div>
		</div>
	)
}

export default List;