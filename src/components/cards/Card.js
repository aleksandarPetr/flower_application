import React from 'react'

import './styles.css'

const Card = (props) => {

    return (
        <div className="cardsContainer" style={{backgroundImage: `url(${props.details.image})`, backgroundSize: "cover"}}>
            <div className="bottomCard">
                <h2 className="titleCard"> {props.details.title}</h2>
                <p className="subtitleCard">{props.details.subtitle}</p>
                <button className="buttonCard">{props.details.sightings}</button>
            </div>
        </div>
    )

}

export default Card