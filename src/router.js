import {Switch, Route} from 'react-router-dom'
import React from 'react'

import Dashboard from './components/Dashboard/Dashboard'
import Wizard from './components/Wizard/Wizard'

function routes(){
    return(
        <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/wizard' component={Wizard} />
        </Switch>
    )
}

export default routes