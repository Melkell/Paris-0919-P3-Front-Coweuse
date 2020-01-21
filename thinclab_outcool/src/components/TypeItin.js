// Librairies
import React, { useState, useEffect } from 'react'
// Styles
import './TypeItin.css'


const TypeItin = () => {

    // This state will receive all production types
    const [prodType, setProdType] = useState(null)

    // Select handler
    const handleSelect = () => {
        document.querySelector('.TypeItin-Select').addEventListener('change', e => {
            // Here we can get the selected option
            console.log(e.target.value)
        })
    }

    // Search the production types
    useEffect(() => {
        /* Request the backend here */
        // Exemple
        setProdType(['Blé', 'Avoine', 'Bovidés', 'Volailles'])
        handleSelect()
    }, [])

    return (
        <div className="select-prod">
            <h1 className="Itin"> Itinéraire </h1>
            <select className="TypeItin-Select">
                {prodType !== null ? prodType.map(item => (<option key={item.toLowerCase()} value={item.toLowerCase()}>{item}</option>)) : 'Loading'}
            </select>
        </div>
    )
}

export default TypeItin