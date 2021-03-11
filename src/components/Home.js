import React from "react"

export default function Home() {
    return (
        <section class="app-section">
            <h1 className="vertical-margin text-center"> Home </h1>
            <p className="vertical-margin text-justify"> Welcome to PokéReact ! This great online Pokédex will allow you to discover great new Pokémon. As a bonus, you'll also find a detailed description, so you can improve your fighting skills. </p>
            <div className="horizontal-flex vertical-margin text-center">
                <div className="width-50 horizontal-padding">
                    <button className="start-button" onClick={() => window.location.assign("/list")}> All Pokémons </button>
                </div>
                <div className="width-50 horizontal-padding">
                    <button className="start-button" onClick={() => window.location.assign("/search")}> Search Pokémons </button>
                </div>
            </div>
        </section>
    )
}
