import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../components/Home'
import ArtsContainer from "../components/ArtsContainer";
import ArtContainer from "./ArtContainer";

const Router = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/arts/:id' render={(r) => <ArtContainer {...r} />}/>
            <Route path='/arts' component={ArtsContainer} />
        </Switch>
    )
}

export default Router;
