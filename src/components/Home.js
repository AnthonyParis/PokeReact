import React from "react"

export default function Home() {
    return (
        <section className="app-section">
            <h1 className="vertical-margin text-center"> Home </h1>
            <p className="vertical-margin text-justify"> Welcome to PokéReact ! This great online Pokédex will allow you to discover great new Pokémon. As a bonus, you'll also find a detailed description, so you can improve your fighting skills. </p>
            <div className="vertical-margin text-center">
                <div className="vertical-padding">
                    <button className="start-button" onClick={() => window.location.assign("/list")}> List </button>
                </div>
                <div className="vertical-padding">
                    <button className="start-button" onClick={() => window.location.assign("/bookmarks")}> Bookmarks </button>
                </div>
            </div>
        </section>
    )
}
