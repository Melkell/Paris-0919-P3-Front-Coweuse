// Librairies
import React from 'react'

// Styles
import './Ressources.css'

const tab = {

}

const Ressources = () => {
    return (
        <div className="ressources-global">
            <div className="ressources-collab">
                <h2>LISTE DES COLLABORATEURS</h2>
                <div className="collab-global">
                    <div className="collab-filter-add">
                        <p>Trier par :</p>
                        <select>
                            <option>Noms</option>
                            <option>Rôles</option>
                            <option>missions</option>
                        </select>
                    </div>
                    <div className="collab-list">
                        
                    </div>
                </div>
            </div>
            <div className="ressources-outils">
                <h2>LISTE DES OUTILS</h2>
                <div className="outils-global">
                    <div className="outils-filter-add">
                    <p>Trier par :</p>
                        <select>
                            <option>Noms</option>
                            <option>Types</option>
                            <option>missions</option>
                        </select>
                    </div>
                    <div className="outils-list">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ressources