import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Index from '../Components/Index/index'
import Projects from '../Components/Projects'

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={ Index }/>
            <Route exact path="/projects" component={ Projects }/>
            <Route render={() => <p>Upssss... No encontramos lo que buscabas</p> }/>
        </Switch>
    )
}

export default Routes