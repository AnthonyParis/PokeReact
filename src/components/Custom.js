import React, { useState, useEffect } from "react"

import CustomCard from "./CustomCard"

export default function List() {
    const [list, setList] = useState([])

    useEffect(() => {
        let custom = localStorage.getItem("custom")

        if(custom != null && custom.includes("[") && custom.includes("]")) setList(JSON.parse(custom))
        else setList([])
    }, [])

    const add = event => {
        event.preventDefault()

        const newCustom = [...list, {
            "id" : Math.random() * 65536,
            "name" : document.getElementById("name").value,
            "image" : document.getElementById("image").value,
            "type" : document.querySelector("[name='type']:checked").value,
        }]

        document.getElementById("name").value = ""
        document.getElementById("image").value = ""

        setList(newCustom)
        localStorage.setItem("custom", JSON.stringify(newCustom))
    }

    return (
        <section className="app-section">
            <h1 className="vertical-margin text-center"> Custom </h1>
            { list.map(pokemon => {
                return <CustomCard key={ pokemon.id } data={ pokemon }/>
            }) }
            <form className="vertical-margin" onSubmit={event => add(event)}>
                <input id="name" className="width-100 vertical-small-margin vertical-padding" type="text" placeholder="Name"/>
                <input id="image" className="width-100 vertical-small-margin vertical-padding" type="text" placeholder="Image"/>
                <div className="text-center">
                    <input id="normal" type="radio" name="type" value="normal" checked/>
                    <label for="normal"> Normal </label>
                </div>
                <div className="text-center">
                    <input id="grass" type="radio" name="type" value="grass"/>
                    <label for="grass"> Grass </label>
                </div>
                <div className="text-center">
                    <input id="fire" type="radio" name="type" value="fire"/>
                    <label for="fire"> Fire </label>
                </div>
                <div className="text-center">
                    <input id="water" type="radio" name="type" value="water"/>
                    <label for="water"> Water </label>
                </div>
                <input className="width-100 vertical-small-margin start-button" type="submit" value="Add"/>
            </form>
        </section>
    )
}
