import React from "react"
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom"

import Home from "./components/Home"
import List from "./components/List"
import Bookmarks from "./components/Bookmarks"
import Details from "./components/Details"
import Custom from "./components/Custom"
import Style from "./Style"

import "./App.css"

import arceus from "./images/arceus.png"

export default function App() {
    return (
        <Router>
            <div className="app-navbar">
                <div className="width-50 text-center">
                    <Link className="app-navbar-list-link" to="/">
                        <img className="width-auto" src={ arceus } alt="PokéReact"/>
                    </Link>
                </div>
                <ul className="width-50 app-navbar-list">
                    <Link className="app-navbar-list-link" to="/"> Home </Link>
                    <Link className="app-navbar-list-link" to="/list"> List </Link>
                    <Link className="app-navbar-list-link" to="/bookmarks"> Favoris </Link>
                    <Link className="app-navbar-list-link" to="/custom"> Custom </Link>
                </ul>
            </div>
            <Switch>
                <Route path="/list">
                    <List/>
                </Route>
                <Route path="/bookmarks">
                    <Bookmarks/>
                </Route>
                <Route path="/details/:id">
                    <Details/>
                </Route>
                <Route path="/custom/">
                    <Custom/>
                </Route>
                <Route path="/">
                    <Home/>
                </Route>
            </Switch>
            <Style/>
        </Router>
    )
}
