import React from "react"

import Card from "./Card"

export default function Bookmarks() {
    let bookmarks = localStorage.getItem("bookmarks")

    if(bookmarks.includes("[") && bookmarks.includes("]")) bookmarks = JSON.parse(bookmarks)
    else bookmarks = []

    return (
        <section className="app-section">
            <h1 className="vertical-margin text-center"> Search </h1>
            { bookmarks.map(pokemon => {
                return <Card key={ pokemon } url={ "https://pokeapi.co/api/v2/pokemon/" + pokemon }/>
            }) }
        </section>
    )
}
