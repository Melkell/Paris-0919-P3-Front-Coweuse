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

    // According to the production type (animal, plants), we display a list of main tasks
    const changeRessourceType = () => {
        switch (ressourceType) {
            case "Animal":
                return (
                    <div>
                        <ul>
                            <li>1. Nourrir</li>
                            <li>2. Surveiller</li>
                            <li>3. Récupérer les ressources</li>
                        </ul>
                    </div>
                )
            case "Céréale":
                return (
                    <div>
                        <ul>
                            <li>1. Préparer le sol</li>
                            <li>2. Planter les graines</li>
                            <li>3. Arroser les pousses</li>
                            <li>4. Repousser les nuisibles</li>
                            <li>5. Récolter</li>
                        </ul>
                    </div>
                )
            default:
                break;
        }
    }

    // Search the production types
    useEffect(() => {
        /* Request the backend here */
        // Exemple
        setProdType(['Blé', 'Avoine', 'Bovidés', 'Volailles'])
        handleSelect()
    }, [])

    return (
        <div className="TypeItin">
            <h1 className="TypeItin-Title"> Itinéraire </h1>
            <select className="TypeItin-Select">
                <option value={null}>Choose a ressource</option>
                {prodType !== null ? prodType.map(item => (<option key={item.toLowerCase()} value={item.toLowerCase()}>{item}</option>)) : 'Loading'}
            </select>
            <div>
                {ressourceType !== null ? changeRessourceType() : 'Waiting for a selection'}
            </div>
        </div>
    )
}

export default TypeItin