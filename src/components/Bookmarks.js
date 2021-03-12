import React, { useState } from "react"

import Card from "./Card"

export default function Bookmarks() {
    const [search, setSearch] = useState("")

    let bookmarks = localStorage.getItem("bookmarks")

    if(bookmarks != null && bookmarks.includes("[") && bookmarks.includes("]")) bookmarks = JSON.parse(bookmarks)
    else bookmarks = []

    return (
        <section className="app-section">
            <h1 className="vertical-margin text-center"> Bookmarks </h1>
            <input id="search" className="width-100 vertical-margin" type="text" onChange={() => setSearch(document.getElementById("search").value)}/>
            { bookmarks.map(pokemon => {
                if(pokemon.includes(search)) return <Card key={ pokemon } url={ "https://pokeapi.co/api/v2/pokemon/" + pokemon }/>
            }) }
        </section>
    )
}
