import React, { useState, useEffect } from "react"

import normal from "../images/normal.png"
import grass from "../images/grass.png"
import fire from "../images/fire.png"
import water from "../images/water.png"

export default function CustomCard(props) {
    const getType = type => {
        if(type === "grass") return grass
        else if(type === "fire") return fire
        else if(type === "water") return water
        else if(type !== "") return normal
    }

    return (
        <article className="app-card vertical-padding">
            <h1 className="text-center"> { props.data.name } </h1>
            <img className="height-auto" src={ props.data.image } alt={ props.data.name }/>
            <div className="horizontal-padding text-center">
                <img className="width-50" src={ getType( props.data.type) } alt={ props.data.name }/>
            </div>
        </article>
    )
}
