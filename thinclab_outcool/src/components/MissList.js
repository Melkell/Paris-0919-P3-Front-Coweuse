import React from "react"

import List from "./List.js"

import './MissList.css'

const MissList = ({ getMission, missions }) => {
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
		},
		{
			name: "Brocoli3",
			date: "Brocoli3",
			brocoli: "Brocoli3"
		},
		{
			name: "Brocoli3",
			date: "Brocoli3",
			brocoli: "Brocoli3"
		},
		{
			name: "Brocoli3",
			date: "Brocoli3",
			brocoli: "Brocoli3"
		},
		{
			name: "Brocoli3",
			date: "Brocoli3",
			brocoli: "Brocoli3"
		},
		{
			name: "Brocoli3",
			date: "Brocoli3",
			brocoli: "Brocoli3"
		},
		{
			name: "Brocoli3",
			date: "Brocoli3",
			brocoli: "Brocoli3"
		},
		{
			name: "Brocoli3",
			date: "Brocoli3",
			brocoli: "Brocoli3"
		}
	]
	
	return (
		<div className="Misslist">
			{missions.map(item => (<List props={item} getMission={getMission} />))}
		</div>
	)
}

export default MissList