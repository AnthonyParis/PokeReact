import React, { useState, useEffect } from "react"

import Card from "./Card"

import axios from "axios"

export default function List() {
    const [list, setList] = useState([])

    useEffect(() => {
        axios({
            "method" : "GET",
            "url" : "https://pokeapi.co/api/v2/pokemon/",
        }).then(response => {
            console.log(response.data.results)
            setList(response.data.results)
        }).catch(error => {
            console.log(error)
        })
    }, [])

    return (
        <section className="app-section">
            <h1 className="vertical-margin text-center"> Search </h1>
            { list.map(pokemon => {
                return <Card key={ pokemon.name } url={ pokemon.url }/>
            }) }
        </section>
    )
}
