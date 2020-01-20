import React from "react";

import "./List.css";

const List = ({ props, getMission }) => {
	return (
		<div className="List" onClick={getMission}>
			<div>
				<p className="nameMission">{props.name}</p>
			</div>
			<div>
				<p className="date">{props.date}</p>
			</div>
			<div>
				<p className="brocoli">{props.brocoli}</p>
			</div>
		</div>
	)
}

export default List;