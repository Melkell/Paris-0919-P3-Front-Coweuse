// Librairies
import React, { useState, useEffect } from 'react'
import axios from 'axios'
// Styles
import './TypeItin.css'


const TypeItin = () => {

    // This state will receive all production types
    const [prodType, setProdType] = useState(null)
    const [ressourceType, setRessourceType] = useState(null)
    const [slotNumber, setSlotNumber] = useState(null)

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

    const submitMiss = () => {
        setSlotNumber(document.querySelector('.nb-parce').value)




        axios({
            method: 'post',
            url: 'localhost:3000/routes/itineraire',
            //data: body
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
        // Pouf pouf requête POST blabla on a fini
    }


    // According to the production type (animal, plants), we display a list of main tasks
    const changeRessourceType = () => {
        switch (ressourceType) {
            case "Animal":
                return (
                    <div>
                        <div className="button-container">
                            <input className="btn-itin" type="button" value="Add misions" />
                            <input className="btn-itin" type="button" value="Submit" />
                        </div>
                        <div className="miss-card-container">
                            <div className="miss-card-céréale">
                                <p> Nourrir </p>
                            </div>
                            <div className="miss-card-céréale">
                                <p> Surveiller </p>
                            </div>
                            <div className="miss-card-céréale">
                                <p> Récupérer les ressources </p>
                            </div>
                        </div>
                    </div>
                )
            case "Céréale":
                return (
                    <div>
                        <form>
                            <div className="button-container">
                                <input className="nb-parce" type="number" min="1" max="5" id="parcelles" name="parcelles" placeholder="Nombre de parcelle" />
                                <input className="btn-itin" type="button" value="Add misions" />
                                <input className="btn-itin" type="button" value="Submit" />
                            </div>
                        </form>
                        <div className="miss-card-container">
                            <div className="miss-card-céréale">
                                <p> Préparer le sol </p>
                            </div>
                            <div className="miss-card-céréale">
                                <p> Planter les graines </p>
                            </div>
                            <div className="miss-card-céréale">
                                <p> Arroser les pousses </p>
                            </div>
                            <div className="miss-card-céréale">
                                <p> Repousser les nuisibles </p>
                            </div>
                            <div className="miss-card-céréale">
                                <p> Récolter </p>
                            </div>
                        </div>
                    </div>
                )
            default:
                break
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
            <div className="">
                {ressourceType !== null ? changeRessourceType() : ''}
            </div>
        </div>
    )
}

export default TypeItin