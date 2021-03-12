import React, { useState, useEffect } from "react"

import Card from "./Card"

import axios from "axios"

export default function List() {
    const [list, setList] = useState([])
    const [page, setPage] = useState(0)

    const loadList = () => {
        axios({
            "method" : "GET",
            "url" : "https://pokeapi.co/api/v2/pokemon/?offset=" + (page * 20) + "&limit=20",
        }).then(response => {
            setList([...list, ...response.data.results])
        }).catch(error => {
            console.log(error)
        })
    }

    useEffect(() => {
        loadList()
    }, [page])

    return (
        <section className="app-section">
            <h1 className="vertical-margin text-center"> List </h1>
            { list.map(pokemon => {
                return <Card key={ pokemon.name } url={ pokemon.url }/>
            }) }
            <button onClick={() => setPage(page + 1)}> Load New Pokémons </button>
        </section>
    )
}
