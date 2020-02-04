import React from "react";

import "./List.css";
const List = ({ props, getMission, admin }) => {

	if (admin) {
		return (
			<div className="List-admin" id={props.id} onClick={getMission}>
				<span className="color-indication" style={{ backgroundColor: props.validation == 0 ? 'red' : 'rgba(46,167,65,1)' }}></span>
				<div className="item-container">
					<div>
						<p className="nameMission">Mission : {props.name}</p>
					</div>
					<div>
						<p className="date">Tache_id : {props.tache_id}</p>
						<p className="date">id : {props.id}</p>
						<p className="date">Itineraire_id : {props.itineraire_id}</p>
					</div>
				</div>
			</div>
		)
	} else {
		return (
			<div className="List" id={props.id} onClick={getMission}>
				<span className="color-indication" style={{ backgroundColor: props.tache_id % 5 == 0 ? 'yellow' : props.tache_id % 2 == 0 ? 'pink' : 'lightblue' }}></span>
				<div className="text-container">
					<div>
						<p className="nameMission">Mission : {props.name}</p>
					</div>
					<div>
						<p className="date">Tache_id : {props.tache_id}</p>
						<p className="date">id : {props.id}</p>
						<p className="date">Itineraire_id : {props.itineraire_id}</p>
					</div>
				</div>
			</div>
		)
	}
}

export default List;