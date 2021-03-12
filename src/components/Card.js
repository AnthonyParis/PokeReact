import React, { useState, useEffect } from "react"

import axios from "axios"

import normal from "../images/normal.png"
import grass from "../images/grass.png"
import fire from "../images/fire.png"
import water from "../images/water.png"
import fightning from "../images/fightning.png"
import flying from "../images/flying.png"
import poison from "../images/poison.png"
import ground from "../images/ground.png"
import rock from "../images/rock.png"
import bug from "../images/bug.png"
import ghost from "../images/ghost.png"
import electric from "../images/electric.png"
import psychic from "../images/psychic.png"
import ice from "../images/ice.png"
import dragon from "../images/dragon.png"
import dark from "../images/dark.png"
import steel from "../images/steel.png"
import fairy from "../images/fairy.png"

export default function Card(props) {
    const [data, setData] = useState([])

    useEffect(() => {
        axios({
            "method" : "GET",
            "url" : props.url,
        }).then(response => {
            setData(response.data)
        }).catch(error => {
            console.log(error)
        })
    })

    const getType = type => {
        if(type === "grass") return grass
        else if(type === "fire") return fire
        else if(type === "water") return water
        else if(type === "fightning") return fightning
        else if(type === "flying") return flying
        else if(type === "poison") return poison
        else if(type === "ground") return ground
        else if(type === "rock") return rock
        else if(type === "bug") return bug
        else if(type === "ghost") return ghost
        else if(type === "electric") return electric
        else if(type === "psychic") return psychic
        else if(type === "ice") return ice
        else if(type === "dragon") return dragon
        else if(type === "dark") return dark
        else if(type === "steel") return steel
        else if(type === "fairy") return fairy
        else if(type !== "") return normal
    }

    if(data.length === 0) {
        return (
            <p className="text-center"> Loading... </p>
        )
    } else {
        return (
            <article className="app-card vertical-padding">
                <h1 className="text-center"> { data.name } </h1>
                <img className="height-auto" src={ data.sprites.front_default } alt={ data.name }/>
                <div className="horizontal-padding text-center">
                    <img className="width-50" src={ getType(data.types[0].type.name) } alt={ data.name }/>
                    { data.types.length === 2 ? <img className="width-50" src={ getType(data.types[1].type.name) } alt={ data.name }/> : "" }
                </div>
                <div className="margin">
                    <button className="start-button" onClick={() => window.location.assign("/details/" + data.name)}> Details </button>
                </div>
            </article>
        )
    }
}
