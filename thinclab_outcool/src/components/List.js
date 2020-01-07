import React from "react";

import "./List.css";

const List = ({ props }) => {
    return (
        <div>
        <div className="Mission">
                <div>
                    <p className="nameMission">{props.name}</p>
                </div>
                <div><p className="date">{props.date}</p></div>
                <p className="brocoli">{props.brocoli}</p>
            </div>
            <div className="Mission2">
                <div>
                    <p className="nameMission">{props.name}</p>
                </div>
                <div><p className="date">{props.date}</p></div>
                <p className="brocoli">{props.brocoli}</p>
            </div>
            <div className="Mission3">
                <div>
                    <p className="nameMission">{props.name}</p>
                </div>
                <div><p className="date">{props.date}</p></div>
                <p className="brocoli">{props.brocoli}</p>
            </div>
            <div className="Mission4">
                <div>
                    <p className="nameMission">{props.name}</p>
                </div>
                <div><p className="date">{props.date}</p></div>
                <p className="brocoli">{props.brocoli}</p>
            </div>

        </div>
    )
}

export default List;