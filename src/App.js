import React from "react"
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom"

import Home from "./components/Home"
import List from "./components/List"
import Search from "./components/Search"
import Details from "./components/Details"

import "./App.css"

export default function App() {
    return (
        <Router>
            <div>
                <ul>
                    <Link to="/"> Home </Link>
                    <Link to="/list"> List </Link>
                    <Link to="/search"> Search </Link>
                </ul>
            </div>
            <Switch>
                <Route path="/list">
                    <List/>
                </Route>
                <Route path="/search">
                    <Search/>
                </Route>
                <Route path="/details/:id">
                    <Details/>
                </Route>
                <Route path="/">
                    <Home/>
                </Route>
            </Switch>
        </Router>
    )
}
