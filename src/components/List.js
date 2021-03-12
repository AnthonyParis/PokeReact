import React, { useState, useEffect } from "react"

import Card from "./Card"

import axios from "axios"

export default function List() {
    const [list, setList] = useState([])
    const [page, setPage] = useState(0)
    const [search, setSearch] = useState("")

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
            <input id="search" className="width-100 vertical-margin" type="text" onChange={() => setSearch(document.getElementById("search").value)}/>
            { list.map(pokemon => {
                return <Card key={ pokemon.name } url={ pokemon.url } search={ search }/>
            }) }
            <button className="start-button" onClick={() => setPage(page + 1)}> Load New Pokémons </button>
        </section>
    )
}
