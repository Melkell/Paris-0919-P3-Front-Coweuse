// Librairies
import React, { useState, useEffect } from 'react'
// Styles
import './TypeItin.css'


const TypeItin = () => {

    // This state will receive all production types
    const [prodType, setProdType] = useState(null)
    const [ressourceType, setRessourceType] = useState(null)

    // Select handler
    const handleSelect = () => {
        document.querySelector('.TypeItin-Select').addEventListener('change', e => {
            // Here we can get the selected option
            const prodType = e.target.value
            switch (prodType) {
                case "blé":
                case "avoine":
                case "maïs":
                    setRessourceType("Céréale")
                    break
                case "betterave":
                case "tomate":
                case "carotte":
                case "patate":
                    setRessourceType("Végétal")
                    break
                case "bovidés":
                case "volailles":
                    setRessourceType("Animal")
                    break
                default:
                    setRessourceType(null)
            }
        
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
                <option value={null}>Choose a ressource</option>
                {prodType !== null ? prodType.map(item => (<option key={item.toLowerCase()} value={item.toLowerCase()}>{item}</option>)) : 'Loading'}
            </select>
            {ressourceType !== null ? changeRessourceType() : 'Waiting for a selection'}
        </div>
    )
}

export default TypeItin