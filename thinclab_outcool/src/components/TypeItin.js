import React from 'react'


import './TypeItin.css'


const typeItin = () => {



    return(
        <div className="select-prod">
            <h1 className="Itin"> Itinéraire </h1>
            <select className="prod-type">
                <option> Blé </option>
                <option> Brocoli </option>
                <option> Tomate </option>
                <option> Céréal </option>
            </select>
        </div>
    )
}

export default typeItin