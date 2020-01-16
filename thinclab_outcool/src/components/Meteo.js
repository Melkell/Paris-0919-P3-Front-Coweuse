// Librairies
import React, { useState, useEffect } from 'react'

// Styles
import './Meteo.css'

const Meteo = () => {

    let request = require('request');

    let api_key = 'c0166b37dd54444edbfe4b624fbe5640';
    let city = 'paris';
    let url = `http://maps.openweathermap.org/maps/2.0/weather/TA2/{z}/{x}/{y}?appid=${api_key}&
    fill_bound=true&opacity=0.6&palette=-65:821692;-55:821692;-45:821692;-40:821692;
    -30:8257db;-20:208cec;-10:20c4e8;0:23dddd;10:c2ff28;20:fff028;25:ffc228;30:fc8014`
    
    request(url, function (err, response, body) {
      if(err){
        console.log('error:', err);
      } else {
        let weather = JSON.parse(body)
        console.log(weather);
      }
    });

    return (
        <div className="Meteo">
        </div>
    )
}

export default Meteo
