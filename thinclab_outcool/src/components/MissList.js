import React from "react"

import List from"./List.js"

const MissList = () => {
    const missionList = [
        {
            name: "Brocoli",
            date: "Brocoli",
            brocoli: "Brocoli"
        }
    ]


    return(
        <div>
            {missionList.map(item => (<List props={item} /> ))}
        </div>
    )
}

export default MissList