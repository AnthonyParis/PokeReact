import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

import axios from "axios"

export default function Details() {
    const { id } = useParams()
    const [data, setData] = useState([])
    const [fav, setFav] = useState(localStorage.getItem("bookmarks").includes(id))

    const loadList = () => {
        axios({
            "method" : "GET",
            "url" : "https://pokeapi.co/api/v2/pokemon/" + id,
        }).then(response => {
            setData(response.data)
        }).catch(error => {
            console.log(error)
        })
    }

    useEffect(() => {
        loadList()
    })

    if(data.length === 0) {
        return (
            <p className="text-center"> Loading... </p>
        )
    }

    const addBookmarks = pokemon => {
        let bookmarks = localStorage.getItem("bookmarks")

        if(bookmarks.includes("[") && bookmarks.includes("]")) bookmarks = JSON.parse(bookmarks)
        else bookmarks = []

        bookmarks.push(pokemon)

        localStorage.setItem("bookmarks", JSON.stringify(bookmarks))
        setFav(true)

        console.log(localStorage.getItem("bookmarks"))
    }

    const removeBookmarks = pokemon => {
        let bookmarks = localStorage.getItem("bookmarks")

        if(bookmarks.includes("[") && bookmarks.includes("]")) bookmarks = JSON.parse(bookmarks)
        else bookmarks = []

        const index = bookmarks.indexOf(pokemon)

        if(index !== -1) bookmarks.splice(index, 1)

        localStorage.setItem("bookmarks", JSON.stringify(bookmarks))
        setFav(false)

        console.log(localStorage.getItem("bookmarks"))
    }

    let bookmarks = <button className="vertical-margin start-button" onClick={() => addBookmarks( data.name )}> Add to Bookmarks </button>

    if(fav) bookmarks = <button className="vertical-margin start-button" onClick={() => removeBookmarks( data.name )}> Remove from Bookmarks </button>

    return (
        <section className="app-section">
            <h1 className="vertical-margin text-center"> { data.name } </h1>
            <img className="height-auto" src={ data.sprites.front_default } alt={ data.name }/>
            <table className="app-section-table text-center">
                <thead>
                    <tr>
                        <th className="width-50 app-section-item"> Statistic </th>
                        <th className="width-50 app-section-item"> Value </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="app-section-item"> PV </td>
                        <td className="app-section-item"> { data.stats[0].base_stat } </td>
                    </tr>
                    <tr>
                        <td className="app-section-item"> Attack </td>
                        <td className="app-section-item"> { data.stats[1].base_stat } </td>
                    </tr>
                    <tr>
                        <td className="app-section-item"> Defense </td>
                        <td className="app-section-item"> { data.stats[2].base_stat } </td>
                    </tr>
                    <tr>
                        <td className="app-section-item"> Attack SP </td>
                        <td className="app-section-item"> { data.stats[3].base_stat } </td>
                    </tr>
                    <tr>
                        <td className="app-section-item"> Defense SP </td>
                        <td className="app-section-item"> { data.stats[4].base_stat } </td>
                    </tr>
                    <tr>
                        <td className="app-section-item"> Speed </td>
                        <td className="app-section-item"> { data.stats[5].base_stat } </td>
                    </tr>
                </tbody>
            </table>
            { bookmarks }
        </section>
    )
}
