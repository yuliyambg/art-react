import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../components/Home'
import ArtsContainer from "../components/ArtsContainer";

const Router = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/arts' component={ArtsContainer} />
        </Switch>
    )
}

export default Router;
