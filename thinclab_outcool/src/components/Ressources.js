// Librairies
import React, {useState, useEffect} from 'react'

// Styles
import './Ressources.css'

const tab = [
    {
        id : 1,
        firstname : "Nicolas",
        lastname : "Dupont",
        role : "chef d'exploitation",
        email : "dupont@gmail.com",
        mission : 34
    },
    {
        id : 2,
        firstname : "Thomas",
        lastname : "Berger",
        role : "collab",
        email : "berger@gmail.com",
        mission : 26
    },
    {
        id : 3,
        firstname : "Alain",
        lastname : "Pinot",
        role : "collab",
        email : "pinot@gmail.com",
        mission : 10
    }
]

const Ressources = () => {

    const [person, setPerson] = useState('')

    const displayList = (array) => {
        return (
            array.map(elem => (
                <tr>
                    <td className="elem1">{elem.id}</td>
                    <td className="elem2">{elem.firstname}</td>
                    <td className="elem3">{elem.lastname}</td>
                    <td className="elem4">{elem.role}</td>
                    <td className="elem5">{elem.email}</td>
                    <td className="elem6">{elem.mission}</td>
                </tr>
            ))
        )
    }

    // useEffect(() => {
    //     fetch()
    //     .then(response => response.json())
    //     .then(data => this.setState({ data }));
    // }, [])

    return (
        <div className="ressources-global">
            <div className="ressources-collab">
                <h2>LISTE DES COLLABORATEURS</h2>
                <div className="collab-global">
                    <div className="collab-filter-add">
                        <div className="filter">
                            <p>Trier par :</p>
                            <select>
                                <option>Noms</option>
                                <option>Rôles</option>
                                <option>Missions</option>
                            </select>
                        </div>
                        <div className="button-add">
                            <p>Ajouter un nouvel utilisateur</p>
                        </div>
                    </div>
                    <div className="list">
                        <table>
                            <tbody>{displayList(tab)}</tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="ressources-outils">
                <h2>LISTE DES OUTILS</h2>
                <div className="outils-global">
                    <div className="outils-filter-add">
                        <div className="filter">
                            <p>Trier par :</p>
                            <select>
                                <option>Noms</option>
                                <option>Types</option>
                                <option>Missions</option>
                            </select>
                        </div>
                        <div className="button-add">
                            <p>Ajouter un nouvel outil</p>
                        </div>
                    </div>
                    <div className="list">
                        <table>
                            <tbody>{displayList(tab)}</tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ressources