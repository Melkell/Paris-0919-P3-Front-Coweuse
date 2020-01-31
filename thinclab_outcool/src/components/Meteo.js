// Librairies
import React, { useState, useEffect } from 'react'
import Axios from 'axios'

// Styles
import './Meteo.css'

// var imgMeteo = '';

const Meteo = () => {

	const [currentDate, setCurrentDate] = useState('')
	const [meteo, setMeteo] = useState(null)
	const [isReady, setIsReady] = useState(false)
	let currentMeteo

	const getDate = () => {
		let date = new Date()
		// Getting the day
		let day = date.getDate()
		if (day < 10) {
			day = "0" + day
		}
		// Getting the month
		let month = date.getMonth()
		if (month < 10) {
			month = "0" + (month + 1)
		}
		// Getting the year
		let year = date.getFullYear()
		// Getting the hour
		let hour = date.getHours()
		if (hour < 10) {
			hour = "0" + hour
		}
		// The meteo API return datas when hours % 3 = 1
		switch (hour % 3) {
			case 0:
				hour += 1
				break
			case 2:
				hour += 2
				break
			default:
				break
		}

		// Set the date to the right format and give its value to the state
		setCurrentDate(`${year}-${month}-${day} ${hour}:00:00`)

		// Get the meteo
		Axios.get("https://www.infoclimat.fr/public-api/gfs/json?_ll=48.85341,2.3488&_auth=VU9QRwR6XX9TfgYxBXMKIwRsVWABdwIlC3cHZF86VClWPVU0VjZWMFM9VitSfQo8BSgEZ1phCTkKYVYuXC4FZFU%2FUDwEb106UzwGYwUqCiEEKlU0ASECJQtgB2FfLFQ1VjBVNFYrVjVTPFYqUmoKPwUpBHtaZAk0Cm5WOVwyBW9VMlA0BGVdOVMjBnsFMAprBDZVMQE4AjsLOQcxX2dUYVY3VTlWNlY2UyJWMVJiCjcFMwRtWmwJNgpsVi5cLgUfVUVQKQQnXX1TaQYiBSgKawRpVWE%3D&_c=d30a3dd0a6459d0695d16604536bb29c")
			.then((result) => {
				setMeteo(result.data)
				setIsReady(true)
			})
	}

	const getCurrentMeteo = (array) => {
		for (let [key, value] of Object.entries(array)) {
			if (key === currentDate) {
				currentMeteo = value
			}
		}
	}

	useEffect(() => {
		getDate()
	}, [])

	// Change background color according to the current nebulosity
	const changeColor = () => {
		if (currentMeteo) {
			let x = 50 + (currentMeteo.nebulosite.totale / 100 * 30)
			let y = 215 + (currentMeteo.nebulosite.totale / 100 * (-110))
			let z = 255 + (currentMeteo.nebulosite.totale / 100 * (-145))
			document.querySelector('.Meteo-Card').style.background = `rgb(${x}, ${y}, ${z}, 0.5)`
		}
	}
	// Change meteo description
	const meteoDescription = () => {
		if (currentMeteo) {
			if (currentMeteo.nebulosite.totale < 33) {
				return 'partiellement couvert'
			}
			else if (currentMeteo.nebulosite.totale > 33 && currentMeteo.nebulosite.totale < 50) {
				return 'plutôt nuageux'
			}
			else if (currentMeteo.nebulosite.totale > 50) {
				return 'très nuageux'
			}
		}
		navigator.getCurrentPosition((position) => {
			let lat = position.coords.latitude
			let lng = position.coords.longitude
			Axios.get(`https://www.prevision-meteo.ch/services/json/lat=${lat}lng=${lng}`)
		})
	}
	return (
		<div className="Meteo" >
			{isReady ? getCurrentMeteo(meteo) : ''}
			<div className="Meteo-Card" onLoad={changeColor()}>
				{currentMeteo !== undefined ? (
					<div className="Meteo-Info">
						<p className="Meteo-Temperature">{Math.round((currentMeteo.temperature.sol - 273.5) * 100) / 100} °C</p>
						<p>Ciel {meteoDescription()}</p>
					</div>
				) : ''}
			</div>
		</div>
	)
}

export default Meteo
