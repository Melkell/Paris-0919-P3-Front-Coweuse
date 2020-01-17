import React from "react"

import List from "./List.js"

const MissList = ({ getMission }) => {
	const missionList = [
		{
			name: "Brocoli",
			date: "Brocoli",
			brocoli: "Brocoli"
		},
		{
			name: "Brocoli2",
			date: "Brocoli2",
			brocoli: "Brocoli2"
		},
		{
			name: "Brocoli3",
			date: "Brocoli3",
			brocoli: "Brocoli3"
		}
	]

	return (
		<div>
			<div>
				{missionList.map(item => (<List props={item} getMission={getMission} />))}
			</div>
		</div>
	)
}

export default MissList